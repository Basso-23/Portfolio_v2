import { motion as m } from "framer-motion";
import Link from "next/link";

{
  /* PROJECTS STRUCTURE----------------------- */
}
const Content = ({
  title,
  description,
  image,
  button,
  bottomBorder,
  number,
  link,
  language,
  new_,
}) => {
  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 w-full mt-56 mx-auto relative">
      {/* BOTTOM BORDER HIGHLIGHT-------------------------------------------------------------------------------------------------------- */}
      <div
        className={`xl:w-[450px] w-[60%] fixedCenterX transition-all bottom-0 absolute flex mb-[-100px] ${bottomBorder}`}
      >
        <m.div
          initial={{ width: "0%", opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{
            duration: 0.65,
            ease: "easeOut",
            delay: 0.5,
          }}
          className="light2 fixedCenterX absolute bottom-0"
        ></m.div>
      </div>
      <div className="w-full h-[min(58vw,500px)] flex xl:justify-end">
        {/* IMAGE CONTAINER-------------------------------------------------------------------------------------------------------- */}
        <div
          className={`md:w-[750px] xl:h-[450px] w-full h-full ${image} my-auto xl:mx-0 mx-auto relative`}
        >
          <div
            className={` absolute top-0 xl:ml-[20px] ml-[10px] xl:mt-[-50px] mt-[-35px] font-bold ${new_} text-[min(2.5vw,12px)] uppercase`}
          >
            {language ? "new" : "nuevo"}
          </div>
        </div>
      </div>

      <m.div
        initial={{ x: "-100px", opacity: 0 }}
        animate={{ x: "0px", opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: 0,
        }}
        className=" w-full flex flex-col xl:pl-16 xl:px-0 xl:text-start text-center my-auto xl:pt-0 pt-6"
      >
        <div className="flex flex-col xl:w-[min(50vw,500px)] relative">
          {/* NUMBER CONTAINER-------------------------------------------------------------------------------------------------------- */}
          <m.div
            initial={{ marginRight: "100px", opacity: 0 }}
            animate={{ marginRight: "0px", opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.25,
            }}
            className=" font-bold absolute right-0 fixedCenterY text-[min(75vw,400px)] text-[#95959511] xl:mr-[-50px] lg:mr-20 md:mr-10"
          >
            {number}
          </m.div>
          <div className="text-[min(9vw,45px)] font-bold ">{title}</div>

          <div className="text-[min(3.8vw,16.5px)] text-[#b8b8b8] mt-6 xl:w-auto sm:px-0 sm:w-[500px] w-full mx-auto z-50">
            {description}
          </div>

          {/* SEE PROJECT BUTTON-------------------------------------------------------------------------------------------------------- */}
          <div className="flex xl:mx-0 mx-auto z-50">
            <Link
              href={`/${link}`}
              className={`flex py-3 px-8 text-[min(3.8vw,15.5px)] xl:mt-20 mt-16 ${button}`}
            >
              <div className="px-2">
                {language ? "See Project" : "Ver Proyecto"}
              </div>
            </Link>
          </div>
        </div>
      </m.div>
    </div>
  );
};

const Projects = ({ language }) => {
  return (
    <div className="w-full min-h-screen radial3 flex flex-col px-3 relative lg:pb-72 pb-64">
      <div className=" flex flex-col radial2 relative sm:py-48 py-28 xl:mb-[-50px] mb-[-75px]">
        {/* TRANSPARENT TITLE-------------------------------------------------------------------------------------------------------- */}
        <div className=" font-bold absolute fixedCenterXnY text-[min(20vw,400px)] z-10 text-[#95959507] xl:flex hidden">
          PROJECTS
        </div>
        {/* BOTTOM BORDER HIGHLIGHT-------------------------------------------------------------------------------------------------------- */}
        <div className="w-[90%] fixedCenterX transition-all bottom-0 absolute flex">
          <m.div
            initial={{ width: "0%", opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
              delay: 0,
            }}
            className="light2 fixedCenterX absolute bottom-0"
          ></m.div>
        </div>

        {/* MAIN CONTAINER-------------------------------------------------------------------------------------------------------- */}
        <div className=" mx-auto font-bold text-[min(10vw,50px)] flex flex-wrap text-center relative sm:px-16 pt-10 ">
          {/* TOP LEFT CORNER-------------------------------------------------------------------------------------------------------- */}
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
          {/* TOP RIGHT CORNER-------------------------------------------------------------------------------------------------------- */}
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
          {/* TITLE CONTAINER-------------------------------------------------------------------------------------------------------- */}
          <m.div
            initial={{ y: "50px", opacity: 0 }}
            animate={{ y: "0px", opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0,
            }}
            className=" flex flex-wrap gap-x-4"
          >
            <div className=" mx-auto">
              {" "}
              {language ? <div>Check out my </div> : <div>Mira mis</div>}
            </div>
            <div className=" active mx-auto">
              {language ? (
                <div>latest projects. </div>
              ) : (
                <div>últimos proyectos.</div>
              )}
            </div>
          </m.div>
        </div>
        {/* SUBTITLE CONTAINER-------------------------------------------------------------------------------------------------------- */}
        <m.div
          initial={{ y: "50px", opacity: 0 }}
          animate={{ y: "0px", opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.1,
          }}
          className=" mx-auto text-[min(3.8vw,17px)] mt-6 text-[#b8b8b8] text-center"
        >
          {language ? (
            <div>
              Here you will find some of my personal and clients projects that
              I&apos;ve created.{" "}
            </div>
          ) : (
            <div>
              Aquí encontrarás algunos de mis proyectos personales y de clientes
              que he creado.
            </div>
          )}
        </m.div>
      </div>
      {/* PROJECTS CONTAINER-------------------------------------------------------------------------------------------------------- */}
      <Content
        number="3"
        title={language ? "Barber Shop" : "Barbería"}
        image="barber"
        description={
          language
            ? "This website showcases the essence of a modern barbershop steeped in tradition. With a clean, user-friendly design that welcomes visitors to discover your business."
            : "Este sitio web muestra la esencia de una barbería moderna llena de tradición. Con un diseño limpio y fácil de usar que invita a los visitantes a descubrir su negocio."
        }
        link="project-3"
        button="button2"
        bottomBorder=""
        language={language}
        new_="button4"
      />
      <Content
        number="2"
        title="Gleam AI"
        image="gleam"
        description={
          language
            ? "Gleam AI is a platform that brings together the most popular artificial intelligence tools. Using the OpenAI and ReplicateAI APIs here you can find all the best AIs in one place."
            : "Gleam AI es una plataforma que junta las más populares herramientas de inteligencia artificial. Utilizando APIs de OpenAI y ReplicateAI aquí puedes encontrar las mejores IAs en un solo lugar."
        }
        link="project-2"
        button="button2"
        bottomBorder=""
        language={language}
        new_="hidden"
      />
      <Content
        number="1"
        title={language ? "Portfolio" : "Portafolio"}
        image="portfolio_main"
        description={
          language
            ? "This is my portfolio, in where I showcase all the projects I've done. In here you can also find my CV and get to know me a little bit better."
            : "Este es mi portafolio, en donde muestro todos los proyectos que he realizado. Aquí también puedes encontrar mi CV y conocerme un poco mejor."
        }
        link="project-1"
        button="button"
        bottomBorder="hidden"
        language={language}
        new_="hidden"
      />
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
export default Projects;
