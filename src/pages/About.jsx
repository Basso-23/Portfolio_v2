import React, { useState, useEffect } from "react";
import { motion as m } from "framer-motion";
import Link from "next/link";
import { BsInfoCircle, BsStarFill } from "react-icons/bs";

{
  /* SKILLS STRUCTURE----------------------- */
}
const Skills = ({ title, description }) => {
  return (
    <>
      {/* SKILLS CONTAINER-------------------------------------------------------------------------------------------------------- */}
      <div className=" aboutBg sm:max-w-[525px] w-full relative rounded-md flex flex-col px-10 pb-10 lg:mx-0 mx-auto">
        {/* BOTTOM BORDER HIGHLIGHT-------------------------------------------------------------------------------------------------------- */}
        <div className="xl:w-[450px] w-full fixedCenterX transition-all bottom-0 absolute flex">
          <m.div
            initial={{ width: "0%", opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
              delay: 0,
            }}
            className="light fixedCenterX absolute bottom-0 animationBorder"
          ></m.div>
        </div>

        <div className=" w-[120px] h-[120px] rounded-full mx-auto bg-[#2A2A2A] mt-[-35px] borderMamalon flex">
          <BsStarFill className=" m-auto text-[min(30vw,45px)] text-[#ffc020]" />
        </div>
        <div className=" w-full mt-6 mx-auto text-center font-bold text-[min(30vw,25px)]">
          {title}
        </div>
        <div className=" w-full mt-8 mx-auto text-center text-[#b8b8b8] text-[min(3.8vw,16.5px)]">
          {description}
        </div>
      </div>
    </>
  );
};

const About = ({ language }) => {
  const [resume, setResume] = useState(
    "https://drive.google.com/file/d/1O2gmqslUaGKqcvuj-d_cBgdJP1XEpCw4/view?usp=drive_link"
  );

  useEffect(() => {
    {
      /* INGLES ---------------------------------*/
    }
    if (language === true) {
      setResume(
        "https://drive.google.com/file/d/1O2gmqslUaGKqcvuj-d_cBgdJP1XEpCw4/view?usp=drive_link"
      );
    }
    {
      /* ESPAÑOL ---------------------------------*/
    }
    if (language === false) {
      setResume(
        "https://drive.google.com/file/d/1xK_8f4Jdlcjvw8a87wCpgfKEqfCBmR3O/view?usp=drive_link"
      );
    }
  }, [language]);
  return (
    <div className="w-full min-h-screen bg-[#07080b] flex px-3 relative pb-10">
      {/* MAIN CONTAINER-------------------------------------------------------------------------------------------------------- */}
      <div className=" flex flex-col w-full">
        {/* TOP CONTAINER-------------------------------------------------------------------------------------------------------- */}
        <div className="w-full grid lg:grid-cols-2 grid-cols-1 lg:mt-10 mt-20 relative radial2 pb-[145px]">
          {/* TRANSPARENT TITLE-------------------------------------------------------------------------------------------------------- */}
          <div className=" font-bold absolute fixedCenterXnY text-[min(20vw,400px)] text-[#95959507] xl:flex hidden tracking-[100px] text-center ">
            ABOUT
          </div>
          {/* BOTTOM BORDER HIGHLIGHT-------------------------------------------------------------------------------------------------------- */}
          <div className="xl:w-[450px] w-[85%] fixedCenterX transition-all bottom-0 absolute flex ">
            <m.div
              initial={{ width: "0%", opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{
                duration: 0.65,
                ease: "easeOut",
                delay: 0.5,
              }}
              className="light fixedCenterX absolute bottom-0"
            ></m.div>
          </div>
          {/* AFTER LG CONTENT-------------------------------------------------------------------------------------------------------- */}
          {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
          {/* VOICE AND SUBTITLE CONTAINER-------------------------------------------------------------------------------------------------------- */}
          <m.div
            initial={{ y: "50px", opacity: 0 }}
            animate={{ y: "0px", opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0,
            }}
            className=" flex flex-col lg:hidden"
          >
            <div className="mb-8 flex mx-auto">
              {/* VOICE CONTAINER-------------------------------------------------------------------------------------------------------- */}
              <div className=" h-[min(9vw,40px)] flex gap-[3px]">
                <div className="w-[1px] h-[10%] bg-white my-auto"></div>
                <div className="w-[1px] h-[20%] bg-white my-auto"></div>
                <div className="w-[1px] h-[25%] bg-white my-auto"></div>
                <div className="w-[1px] h-[35%] bg-white my-auto"></div>
                <div className="w-[1px] h-[60%] bg-white my-auto"></div>
                <div className="w-[1px] h-[45%] bg-white my-auto"></div>
                <div className="w-[1px] h-[25%] bg-white my-auto"></div>
                <div className="w-[1px] h-[50%] bg-white my-auto"></div>
                <div className="w-[1px] h-[34%] bg-white my-auto"></div>
                <div className="w-[1px] h-[25%] bg-white my-auto"></div>
                <div className="w-[1px] h-[15%] bg-white my-auto"></div>
              </div>
              {/* SUBTITLE CONTAINER-------------------------------------------------------------------------------------------------------- */}
              <div className=" my-auto ml-4 font-bold active text-[min(5vw,17px)] uppercase ">
                {language ? (
                  <div>seeking new adventures</div>
                ) : (
                  <div>buscando nuevas aventuras</div>
                )}
              </div>
            </div>
            {/* TITLE CONTAINER-------------------------------------------------------------------------------------------------------- */}
            <div className=" uppercase font-bold text-[min(11vw,50px)] tracking-wide flex flex-col lg:hidden mx-auto text-center">
              {language ? <div>Life is full of</div> : <div>La vida está</div>}
              {language ? <div>endless</div> : <div>llena de</div>}
              {language ? <div>possibilities.</div> : <div>posibilidades.</div>}
            </div>
          </m.div>
          {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

          {/* LEFT CONTAINER-------------------------------------------------------------------------------------------------------- */}
          <m.div
            initial={{ y: "-75px", opacity: 0 }}
            animate={{ y: "0px", opacity: 1 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: 0,
            }}
            className="w-[100%] flex lg:justify-end justify-center lg:pr-6"
          >
            {/* FACE CONTAINER-------------------------------------------------------------------------------------------------------- */}
            <div className=" aboutBg sm:max-w-[515px] w-full lg:mt-40 mt-20 relative rounded-md flex flex-col">
              {/* BOTTOM BORDER HIGHLIGHT-------------------------------------------------------------------------------------------------------- */}
              <div className="xl:w-[450px] w-full fixedCenterX transition-all bottom-0 absolute flex">
                <m.div
                  initial={{ width: "0%", opacity: 0 }}
                  animate={{ width: "100%", opacity: 1 }}
                  transition={{
                    duration: 0.65,
                    ease: "easeOut",
                    delay: 0,
                  }}
                  className="light fixedCenterX absolute bottom-0 animationBorder"
                ></m.div>
              </div>

              {/* PICTURE CONTAINER-------------------------------------------------------------------------------------------------------- */}
              <div className="sm:w-[81%] w-[90%] h-[min(100vw,500px)] magic mx-auto rounded-[5px] mt-[-30px] relative "></div>
              <div className=" flex mx-auto mt-6 mb-5">
                <BsInfoCircle className=" my-auto mr-3 text-[min(20vw,22px)]" />
                {/* TITLE CONTAINER-------------------------------------------------------------------------------------------------------- */}
                <div className=" font-bold  text-[min(5vw,21px)] my-auto pb-1 pt-1">
                  {language ? <div>About Me</div> : <div>Sobre Mí</div>}
                </div>
              </div>

              {/* SUBTITLE CONTAINER-------------------------------------------------------------------------------------------------------- */}
              <div className=" mx-auto text-[#b8b8b8] text-[min(3.8vw,16.5px)] mt-5 text-center md:px-14 px-6 mb-16 ">
                {language ? (
                  <div>
                    I&apos;m a Software Engineer based in Panama City. Adaptability
                    is my strength to face any situation.
                  </div>
                ) : (
                  <div>
                    Soy un Ingeniero de Software viviendo en la ciudad de
                    Panamá. La adaptabilidad es mi fortaleza para afrontar
                    cualquier situación.
                  </div>
                )}
              </div>
            </div>
          </m.div>

          {/* RIGHT CONTAINER-------------------------------------------------------------------------------------------------------- */}
          <m.div
            initial={{ y: "75px", opacity: 0 }}
            animate={{ y: "0px", opacity: 1 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: 0,
            }}
            className="w-[100%] flex flex-col lg:pl-6"
          >
            {/* MAIN CONTAINER-------------------------------------------------------------------------------------------------------- */}
            <div className=" my-auto flex flex-col ">
              {/* VOICE AND SUBTITLE CONTAINER-------------------------------------------------------------------------------------------------------- */}
              <div className="mb-8 lg:flex hidden">
                {/* VOICE CONTAINER-------------------------------------------------------------------------------------------------------- */}
                <div className=" h-[min(9vw,40px)] flex gap-[3px]">
                  <div className="w-[1px] h-[10%] bg-white my-auto"></div>
                  <div className="w-[1px] h-[20%] bg-white my-auto"></div>
                  <div className="w-[1px] h-[25%] bg-white my-auto"></div>
                  <div className="w-[1px] h-[35%] bg-white my-auto"></div>
                  <div className="w-[1px] h-[60%] bg-white my-auto"></div>
                  <div className="w-[1px] h-[45%] bg-white my-auto"></div>
                  <div className="w-[1px] h-[25%] bg-white my-auto"></div>
                  <div className="w-[1px] h-[50%] bg-white my-auto"></div>
                  <div className="w-[1px] h-[34%] bg-white my-auto"></div>
                  <div className="w-[1px] h-[25%] bg-white my-auto"></div>
                  <div className="w-[1px] h-[15%] bg-white my-auto"></div>
                </div>
                {/* SUBTITLE CONTAINER-------------------------------------------------------------------------------------------------------- */}
                <div className=" my-auto ml-4 font-bold active text-[min(5vw,17px)] uppercase ">
                  {language ? (
                    <div>seeking new adventures</div>
                  ) : (
                    <div>buscando nuevas aventuras</div>
                  )}
                </div>
              </div>

              {/* TITLE CONTAINER-------------------------------------------------------------------------------------------------------- */}
              <div className=" uppercase font-bold text-[min(30vw,70px)] tracking-wide lg:flex lg:flex-col hidden">
                {language ? (
                  <div>Life is full of</div>
                ) : (
                  <div>La vida está</div>
                )}
                {language ? <div>endless</div> : <div>llena de</div>}
                {language ? (
                  <div>possibilities.</div>
                ) : (
                  <div>posibilidades.</div>
                )}
              </div>

              {/* RESUME BUTTON-------------------------------------------------------------------------------------------------------- */}
              <div className="flex lg:mx-0 mx-auto z-50">
                <a
                  href={resume}
                  target="_blank"
                  className="flex py-3 px-8 text-[min(3.8vw,15.5px)] mt-20 button2 "
                >
                  {language ? (
                    <div>Download Resume</div>
                  ) : (
                    <div>Descargar Currículum</div>
                  )}
                </a>
              </div>
            </div>
          </m.div>
        </div>
        {/* BOTTOM CONTAINER-------------------------------------------------------------------------------------------------------- */}
        <div className="w-full grid lg:grid-cols-2 grid-cols-1 lg:pt-56 pt-40 lg:mb-72 mb-56 radial3 relative">
          {/* TRANSPARENT TITLE-------------------------------------------------------------------------------------------------------- */}
          <div className=" font-bold absolute fixedCenterXnY text-[min(20vw,400px)] text-[#95959507] xl:flex hidden tracking-[100px] text-center">
            SKILLS
          </div>
          {/* AFTER LG CONTENT-------------------------------------------------------------------------------------------------------- */}
          {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
          {/* VOICE AND SUBTITLE CONTAINER-------------------------------------------------------------------------------------------------------- */}
          <div className="mb-8 flex lg:hidden mx-auto">
            {/* VOICE CONTAINER-------------------------------------------------------------------------------------------------------- */}
            <div className=" h-[min(9vw,40px)] flex gap-[3px]">
              <div className="w-[1px] h-[10%] bg-white my-auto"></div>
              <div className="w-[1px] h-[20%] bg-white my-auto"></div>
              <div className="w-[1px] h-[25%] bg-white my-auto"></div>
              <div className="w-[1px] h-[35%] bg-white my-auto"></div>
              <div className="w-[1px] h-[60%] bg-white my-auto"></div>
              <div className="w-[1px] h-[45%] bg-white my-auto"></div>
              <div className="w-[1px] h-[25%] bg-white my-auto"></div>
              <div className="w-[1px] h-[50%] bg-white my-auto"></div>
              <div className="w-[1px] h-[34%] bg-white my-auto"></div>
              <div className="w-[1px] h-[25%] bg-white my-auto"></div>
              <div className="w-[1px] h-[15%] bg-white my-auto"></div>
            </div>
            {/* SUBTITLE CONTAINER-------------------------------------------------------------------------------------------------------- */}
            <div className=" my-auto ml-4 font-bold active text-[min(5vw,17px)] uppercase ">
              {language ? (
                <div>improving all the time</div>
              ) : (
                <div>mejorando todo el tiempo</div>
              )}
            </div>
          </div>
          {/* TITLE CONTAINER-------------------------------------------------------------------------------------------------------- */}
          <div className=" uppercase font-bold text-[min(11vw,50px)] tracking-wide flex flex-col lg:hidden mx-auto text-center">
            {language ? <div>keep learning</div> : <div>conocimiento</div>}
            {language ? <div>to unlock</div> : <div>desbloquea</div>}
            {language ? <div>power.</div> : <div>poder.</div>}
          </div>
          {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

          {/* LEFT CONTAINER-------------------------------------------------------------------------------------------------------- */}
          <m.div
            initial={{ y: "-50px", opacity: 0 }}
            animate={{ y: "0px", opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0,
            }}
            className="w-[100%] flex lg:justify-end justify-center"
          >
            {/* MAIN CONTAINER-------------------------------------------------------------------------------------------------------- */}
            <div className="flex flex-col ">
              {/* VOICE AND SUBTITLE CONTAINER-------------------------------------------------------------------------------------------------------- */}
              <div className="mb-8 lg:flex hidden">
                {/* VOICE CONTAINER-------------------------------------------------------------------------------------------------------- */}
                <div className=" h-[min(9vw,40px)] flex gap-[3px]">
                  <div className="w-[1px] h-[10%] bg-white my-auto"></div>
                  <div className="w-[1px] h-[20%] bg-white my-auto"></div>
                  <div className="w-[1px] h-[25%] bg-white my-auto"></div>
                  <div className="w-[1px] h-[35%] bg-white my-auto"></div>
                  <div className="w-[1px] h-[60%] bg-white my-auto"></div>
                  <div className="w-[1px] h-[45%] bg-white my-auto"></div>
                  <div className="w-[1px] h-[25%] bg-white my-auto"></div>
                  <div className="w-[1px] h-[50%] bg-white my-auto"></div>
                  <div className="w-[1px] h-[34%] bg-white my-auto"></div>
                  <div className="w-[1px] h-[25%] bg-white my-auto"></div>
                  <div className="w-[1px] h-[15%] bg-white my-auto"></div>
                </div>
                {/* SUBTITLE CONTAINER-------------------------------------------------------------------------------------------------------- */}
                <div className=" my-auto ml-4 font-bold active text-[min(5vw,17px)] uppercase ">
                  {language ? (
                    <div>improving all the time</div>
                  ) : (
                    <div>mejorando todo el tiempo</div>
                  )}
                </div>
              </div>

              {/* TITLE CONTAINER-------------------------------------------------------------------------------------------------------- */}
              <div className=" uppercase font-bold text-[min(30vw,70px)] tracking-wide lg:flex lg:flex-col hidden">
                {language ? <div>keep learning</div> : <div>conocimiento</div>}
                {language ? <div>to unlock</div> : <div>desbloquea</div>}
                {language ? <div>power.</div> : <div>poder.</div>}
              </div>

              {/* SEE PROJECTS BUTTON-------------------------------------------------------------------------------------------------------- */}
              <div className="hidden lg:flex lg:mx-0 mx-auto z-50">
                <Link
                  href={"/projects"}
                  className="flex py-3 px-8 text-[min(3.8vw,15.5px)] mt-20 button"
                >
                  {language ? (
                    <div>See Projects </div>
                  ) : (
                    <div>Ver Proyectos </div>
                  )}
                </Link>
              </div>
            </div>
          </m.div>

          {/* RIGHT CONTAINER-------------------------------------------------------------------------------------------------------- */}
          <m.div
            initial={{ y: "50px", opacity: 0 }}
            animate={{ y: "0px", opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0,
            }}
            className="w-[100%] flex flex-col lg:pl-14 gap-y-16 lg:mt-0 mt-20"
          >
            {/* SKILLS CONTAINER-------------------------------------------------------------------------------------------------------- */}
            <div className=" aboutBg sm:max-w-[525px] w-full relative rounded-md flex flex-col px-10 pb-10 lg:mx-0 mx-auto">
              <div className=" w-[120px] h-[120px] rounded-full mx-auto bg-[#2A2A2A] mt-[-35px] borderMamalon flex">
                <BsStarFill className=" m-auto text-[min(30vw,45px)] text-[#ffc020]" />
              </div>
              <div className=" w-full mt-6 mx-auto text-center font-bold text-[min(30vw,25px)]">
                {language ? (
                  <div>Web. App. Design. </div>
                ) : (
                  <div>Diseño. Web. App. </div>
                )}
              </div>
              <div className=" w-full mt-8 mx-auto text-center text-[#b8b8b8] text-[min(3.8vw,16.5px)]">
                {language ? (
                  <div>
                    Creation of attractive and functional interfaces providing
                    an excellent user experience. Using languages such as
                    JavaScript, CSS, and HTML, as well as modern frameworks.
                  </div>
                ) : (
                  <div>
                    Creación de interfaces atractivas y funcionales
                    proporcionando una excelente experiencia de usuario.
                    Utilizando lenguajes como JavaScript, CSS, and HTML, así
                    como frameworks modernos.
                  </div>
                )}
              </div>
            </div>

            <Skills
              title={
                language
                  ? "Strategy. Planning. Solutions."
                  : "Estrategia. Planificación. Soluciones."
              }
              description={
                language
                  ? "Design and execute successful project strategies, managing resources and deadlines efficiently. Adjusting planning as needed, working effectively to achieve satisfactory results."
                  : "Diseño y ejecución de estrategias exitosas de proyectos, gestionando recursos y plazos de manera eficiente. Ajustar la planificación según sea necesario, trabajando eficazmente para lograr resultados exitosos."
              }
            />
            {/* SEE PROJECTS BUTTON AFTER LG-------------------------------------------------------------------------------------------------------- */}
            <div className="lg:hidden flex lg:mx-0 mx-auto z-50">
              <Link
                href={"/projects"}
                className="flex py-3 px-8 text-[min(3.8vw,15.5px)] mt-8 button"
              >
                {language ? (
                  <div>See Projects </div>
                ) : (
                  <div>Ver Proyectos </div>
                )}
              </Link>
            </div>
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
export default About;
