import { motion as m } from "framer-motion";
import { AiOutlineGithub } from "react-icons/ai";
import Link from "next/link";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

{
  /* TOOLS STRUCTURE----------------------- */
}
const Tools = ({ name }) => {
  return <div className=" py-3 px-6 bg-[#000000] rounded-lg">{name}</div>;
};

const Project1 = ({ language }) => {
  return (
    <div className=" w-full min-h-screen flex radial2 relative sm:pb-72 pb-64">
      {/* BACK ARROW-------------------------------------------------------------------------------------------------------- */}
      <Link
        href="/project-2"
        className=" w-[min(13vw,55px)]  h-[min(13vw,55px)] border top-0 left-0 sm:ml-10 ml-4 mt-10 flex justify-center items-center button5 text-[min(4vw,16px)] absolute"
      >
        <AiOutlineArrowLeft/>
      </Link>
      {/* MAIN CONTAINER-------------------------------------------------------------------------------------------------------- */}
      <div className="grid xl:grid-cols-2 grid-cols-1 w-full mt-36 px-3">
        {/* LEFT CONTAINER-------------------------------------------------------------------------------------------------------- */}
        <m.div
          initial={{ x: "-200px", opacity: 0 }}
          animate={{ x: "0px", opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            type: "spring",
            delay: 0,
          }}
          className=" xl:h-[500px] h-[min(58vw,500px)] flex justify-center xl:justify-end"
        >
          {/* IMAGE CONTAINER-------------------------------------------------------------------------------------------------------- */}
          <div className="md:w-[800px] w-full portfolio_main z-50"></div>
        </m.div>

        {/* RIGHT CONTAINER-------------------------------------------------------------------------------------------------------- */}
        <div className="w-full xl:h-[500px] h-full flex flex-col xl:ml-12 xl:text-start text-center mx-auto relative">
          {/* CONTENT CONTAINER-------------------------------------------------------------------------------------------------------- */}
          <div className=" flex flex-col xl:mx-0 mx-auto my-auto md:w-[575px] w-full">
            <m.div
              initial={{ y: "-25px", opacity: 0 }}
              animate={{ y: "0px", opacity: 1 }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
                delay: 0,
              }}
              className=" font-bold text-[min(5.5vw,30px)] xl:mt-0 mt-16"
            >
              {language ? (
                <div>Project Overview</div>
              ) : (
                <div>Descripción del Proyecto</div>
              )}
            </m.div>
            <m.div
              initial={{ y: "-25px", opacity: 0 }}
              animate={{ y: "0px", opacity: 1 }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
                delay: 0.1,
              }}
              className="w-full mt-6 text-[min(4vw,17.5px)] text-[#b8b8b8]"
            >
              {language ? (
                <div>
                  This is my portfolio, in where I showcase all the projects
                  I&apos;ve done. In here you can also find my CV and get to know me
                  a little bit better.
                </div>
              ) : (
                <div>
                  Este es mi portafolio, en donde muestro todos los proyectos
                  que he realizado. Aquí también puedes encontrar mi CV y
                  conocerme un poco mejor.
                </div>
              )}
            </m.div>

            <m.div
              initial={{ y: "-25px", opacity: 0 }}
              animate={{ y: "0px", opacity: 1 }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
                delay: 0.2,
              }}
              className=" font-bold text-[min(5.5vw,30px)] xl:mt-8 mt-14"
            >
              {language ? <div> Created With</div> : <div>Creado Con</div>}
            </m.div>
            {/* TOOLS CONTAINER-------------------------------------------------------------------------------------------------------- */}
            <m.div
              initial={{ y: "-25px", opacity: 0 }}
              animate={{ y: "0px", opacity: 1 }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
                delay: 0.3,
              }}
              className=" mt-6 flex sm:gap-6 gap-3 xl:mx-0 mx-auto xl:justify-start justify-center flex-wrap text-[min(3.5vw,16px)] text-[#b8b8b8] z-50"
            >
              <Tools name="JavaScript" />
              <Tools name="React JS" />
              <Tools name="Next JS" />
              <Tools name="Tailwind CSS" />
            </m.div>
            <m.div
              initial={{ y: "-25px", opacity: 0 }}
              animate={{ y: "0px", opacity: 1 }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
                delay: 0.4,
              }}
              className="xl:flex xl:flex-row flex flex-col-reverse z-50"
            >
              {/* VISIT WEBSITE BUTTON-------------------------------------------------------------------------------------------------------- */}
              <div className="flex xl:mx-0 mx-auto">
                <a
                  href="https://www.carlosbaso.com/"
                  target="_blank"
                  className="flex py-3 px-8 text-[min(3.8vw,15.5px)] xl:mt-24 mt-28 button first-letter"
                >
                  {language ? (
                    <div>Visit Website </div>
                  ) : (
                    <div>Visitar Página</div>
                  )}
                </a>
              </div>
              {/* GITHUB BUTTON-------------------------------------------------------------------------------------------------------- */}
              <div className="flex xl:mt-24 mt-16 xl:ml-16 xl:mx-0 mx-auto">
                <AiOutlineGithub className="mr-3 my-auto text-[min(8vw,35px)]" />{" "}
                <a
                  href="https://github.com/Basso-23/Portfolio-Portafolio"
                  target="_blank"
                  className=" my-auto mr-2 hover:underline text-[min(4vw,16px)] sm:pt-0 pt-1"
                >
                  {language ? <div>View Code</div> : <div>Ver Código</div>}
                </a>
              </div>
            </m.div>
          </div>
          {/* NUMBER CONTAINER-------------------------------------------------------------------------------------------------------- */}
          <div className=" font-bold absolute xl:left-0 right-0 bottom-0 fixedCenterY text-[min(75vw,400px)] text-[#95959511] sm:mt-[-75px] mt-[5px] xl:ml-[350px]">
            1
          </div>
        </div>
      </div>

      {/* FOOTER CONTAINER-------------------------------------------------------------------------------------------------------- */}
      <div className="absolute bottom-0 fixedCenterX w-full transition-all border-t-[1px] flex border-[#ffffff16] justify-center py-5 footerBg">
        <div className=" text-[min(3vw,13.5px)] my-auto text-center">
          {language ? (
            <div>©2023 CarlosBaso. All rights reserved.</div>
          ) : (
            <div>©2023 CarlosBaso. Todos los derechos reservados.</div>
          )}
        </div>
        {/* BOTTOM BORDER HIGHLIGHT-------------------------------------------------------------------------------------------------------- */}
        <div className="xl:w-[450px] w-full fixedCenterX transition-all top-0 absolute flex">
          <m.div
            initial={{ width: "0%", opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
              delay: 0,
            }}
            className="light fixedCenterX absolute top-0 animationBorder mt-[-0.5px]"
          ></m.div>
        </div>
      </div>
    </div>
  );
};
export default Project1;
