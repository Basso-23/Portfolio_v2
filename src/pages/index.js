import { motion as m } from "framer-motion";
import Link from "next/link";

const Home = ({ language }) => {
  return (
    <div className="min-h-screen w-full radial flex flex-col pb-40 xl:mt-[-80px] relative">
      {/* CIRCLES CONTAINER-------------------------------------------------------------------------------------------------------- */}
      <div className="fixedCenterXnY absolute w-[min(80vw,500px)] h-[min(80vw,500px)] flex mt-[-50px]">
        <div className=" w-full h-full relative flex justify-center items-center">
          <div className=" w-full h-full border rounded-full dot3 absolute"></div>
          <div className=" w-[67%] h-[67%] border rounded-full dot2 absolute "></div>
          <div className=" w-[34%] h-[34%] border rounded-full dot1 absolute "></div>
        </div>
      </div>

      {/* MAIN CONTAINER-------------------------------------------------------------------------------------------------------- */}
      <div className=" m-auto flex flex-col text-center px-3 py-20">
        <div className=" flex flex-col sm:pt-14 ">
          {/* TITLE CONTAINER-------------------------------------------------------------------------------------------------------- */}
          <div className="font-extrabold text-[min(13vw,90px)] flex flex-col px-2 relative pt-10">
            <m.div
              initial={{ scale: 0.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",

                delay: 0,
              }}
              className=" w-10 h-10 absolute top-0 left-0 border border-r-0 border-b-0"
            ></m.div>
            <m.div
              initial={{ scale: 0.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",

                delay: 0,
              }}
              className=" w-10 h-10 absolute top-0 right-0 border border-l-0 border-b-0"
            ></m.div>
            <m.div
              initial={{ y: "25px", opacity: 0 }}
              animate={{ y: "0px", opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.4,
              }}
              className=" flex flex-col"
            >
              <div className=" flex flex-wrap mx-auto gap-x-5">
                {" "}
                <div className=" mx-auto">
                  {language ? <div>Hello! I&apos;m</div> : <div>¡Hola! Soy</div>}{" "}
                </div>{" "}
                <div className=" mx-auto neon">Carlos,</div>
              </div>
              {language ? (
                <div>a Software Engineer</div>
              ) : (
                <div>un Ing. de Software</div>
              )}
            </m.div>
          </div>
          {/* SUBTITLE CONTAINER-------------------------------------------------------------------------------------------------------- */}
          <m.div
            initial={{ y: "25px", opacity: 0 }}
            animate={{ y: "0px", opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.5,
            }}
            className="text-[min(4vw,17.5px)] text-[#b8b8b8] mt-6"
          >
            {language ? (
              <div>Find out how I&apos;ve applied my passion for technology!</div>
            ) : (
              <div>¡Descubre cómo he aplicado mi pasión por la tecnología!</div>
            )}
          </m.div>

          {/* BUTTON CONTAINER-------------------------------------------------------------------------------------------------------- */}
          <m.div
            initial={{ y: "25px", opacity: 0 }}
            animate={{ y: "0px", opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.6,
            }}
            className="text-[min(3.8vw,15.5px)] mt-20 flex font-medium "
          >
            <Link
              href={"/projects"}
              className="button mx-auto py-3 px-8 cursor-pointer"
            >
              {language ? <div>See My Work</div> : <div>Ver Mi Trabajo</div>}
            </Link>
          </m.div>
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
export default Home;
