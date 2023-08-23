import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { MdOutlineTurnSlightLeft } from "react-icons/md";
import Footer from "@/components/Footer";
import { motion as m } from "framer-motion";
import alien from "../assets/alien.png";

{
  /* ESTRUCTURA DEL CONTENEDOR DE LOS LENGUAJES----------------------- */
}
const Languages = ({ name, theme }) => {
  return (
    <div className="flex ">
      <div
        className={
          theme === false
            ? "bg-[#000000] text-[#ffffff] py-[6px] px-6 rounded-full font-medium text-[min(4vw,14px)]"
            : "bg-[#ffffff] text-[#111111] py-[6px] px-6 rounded-full font-medium text-[min(4vw,14px)]"
        }
      >
        {name}
      </div>
    </div>
  );
};

{
  /* ESTRUCTURA DEL CONTENEDOR DE LAS EXPERIENCIA----------------------- */
}
const CardExperience = ({
  company,
  title,
  description,
  date,
  language,
  language1,
  language2,
  language3,
  language4,
  theme,
  link,
}) => {
  return (
    <div className="lg:flex lg:flex-row flex-col lg:ml-[50px] md:ml-[15px] lg:flex-wrap mt-10">
      <div
        className={
          theme
            ? "font-bold ml-5 mb-4 text-[min(4.5vw,17px)] space text-[#06ff93]"
            : "font-bold ml-5 mb-4 text-[min(4.5vw,17px)] space text-[#ff007b]"
        }
      >
        {date}
      </div>

      <div className="flex">
        {theme ? (
          <div className="bg-[#06ff93] w-[min(4.5vw,15px)] h-[min(4.5vw,15px)] rounded-full absolute ml-[-18px]"></div>
        ) : (
          <div className="bg-[#ff007b] w-[min(4.5vw,15px)] h-[min(4.5vw,15px)] rounded-full absolute ml-[-18px]"></div>
        )}

        <div
          className={
            theme === false
              ? "bg-[#bd171700] ml-10 text-black font-semibold text-[min(4.5vw,20px)] mt-[-4px] mr-[15px]"
              : "bg-[#bd171700] ml-10 text-white font-semibold text-[min(4.5vw,20px)] mt-[-4px] mr-[15px]"
          }
        >
          <div className="flex flex-wrap">
            <div className="ml-[-20px] flex">
              {title} @ {company}
            </div>
          </div>

          <div className="ml-[-51.5px] font-normal">
            <div className=" border-l-2 border-[#565656] text-[min(4.5vw,16px)]">
              <div className="ml-[30px] pt-2 pb-12">
                <div className="text-[min(4.5vw,17px)] sm:mr-14 font-light">
                  {description}
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-4 mt-6">
                  <Languages name={language1} theme={theme} />
                  <Languages name={language2} theme={theme} />
                  <Languages name={language3} theme={theme} />
                </div>
              </div>
              <div className="ml-[30px] flex mt-[-15px] text-[min(4.5vw,17px)] font-light">
                {language ? <div>Company:</div> : <div>Compañía:</div>}
                <a
                  href={link}
                  target="_blank"
                  className={
                    theme === false
                      ? "pl-2 cursor-pointer text-[#ff007b] underline"
                      : "pl-2 cursor-pointer text-[#06ff93] underline"
                  }
                >
                  {link}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const About = ({
  setToggle,
  toggle,
  setActive,
  theme,
  language,
  setLanguage,
}) => {
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
    <div>
      <div
        className={
          theme === false
            ? "w-full bg-[#f9f9f9] pb-1"
            : "w-full bg-[#111111] pb-1"
        }
      >
        <div className="w-[86%] flex mx-auto pt-0 flex-col space">
          {/* DIV DE LA MITAD DE ARRIBA----------------------- */}
          <m.div
            initial={{ y: "10%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              type: "spring",
              delay: 0,
            }}
            className={
              theme === false
                ? "grid lg:grid-cols-2 grid-cols-1 text-[#000000]"
                : "grid lg:grid-cols-2 grid-cols-1 text-[#ffffff]"
            }
          >
            {/* DIV DE LA IZQUIERDA ARRIBA----------------------- */}
            <div className="w-[100%] flex py-10 pr-0">
              <div
                className={
                  theme === false
                    ? "m-auto faceBorder1 sm:h-[500px] sm:w-[500px] h-[89vw] w-[100vw] flex"
                    : "m-auto faceBorder2 sm:h-[500px] sm:w-[500px] h-[89vw] w-[100vw] flex"
                }
              >
                <div className="flex sm:h-[300px] sm:w-[300px] h-[60vw] w-[60vw] face containerFloat1 m-auto"></div>{" "}
              </div>
            </div>

            {/* DIV DE LA DERECHA ARRIBA----------------------- */}
            <div className="w-[100%] flex">
              <div className="md:px-4 md:my-auto my-auto lg:ml-12 lg:w-[550px] w-[100%]">
                <div
                  className={
                    theme === false
                      ? "font-semibold text-[min(8vw,48px)] text-black lg:pt-0 pt-6 space"
                      : "font-semibold text-[min(8vw,48px)] text-white lg:pt-0 pt-6 space"
                  }
                >
                  {language ? (
                    <div>More about me</div>
                  ) : (
                    <div>Más sobre mí</div>
                  )}
                </div>

                <div className="text-[min(4.5vw,19px)] font-light">
                  <div className="pt-2">
                    {language ? (
                      <div>
                        Hello! I&apos;m Carlos Baso, a multidisciplinary
                        software engineer based in Panama City.
                      </div>
                    ) : (
                      <div>
                        ¡Hola! Soy Carlos Baso, un ingeniero de software
                        multidisciplinario viviendo en la ciudad de Panamá.
                      </div>
                    )}
                  </div>
                  <div className="pt-4 text-[min(4.5vw,19px)] ">
                    {language ? (
                      <div>
                        I feel more than comfortable learning from my teammates
                        and using their experience to improve my skills.
                        Adaptability is my strength to face any situation.
                      </div>
                    ) : (
                      <div>
                        Me siento mas que cómodo al aprender de mis compañeros
                        de equipo y aprovechar su experiencia para mejorar mis
                        habilidades. La adaptabilidad es mi fortaleza para
                        enfrentar cualquier situación.
                      </div>
                    )}
                  </div>
                </div>

                {/* DIV DEL BOTON See All Projects----------------------- */}
                <div className="w-full flex pt-10 text-black">
                  <Link
                    href={"/Skills"}
                    onClick={() => {
                      setActive("skills");
                      toggle === false ? "" : setToggle(!toggle);
                    }}
                    className="font-bold text-[min(4vw,14.5px)] pl-7 pr-5 py-[14px] btnColor text-white rounded-sm flex buttonShadow transitionButton"
                  >
                    {language ? (
                      <div className="pt-[1px]">Check My Skills</div>
                    ) : (
                      <div className="pt-[1px]">Mis Habilidades</div>
                    )}
                    <div className="rotateIcon ml-1 mt-[0.5px] text-[min(5vw,25px)]">
                      <MdOutlineTurnSlightLeft />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </m.div>

          {/* DIV DE LA MITAD DE ABAJO----------------------- */}
          <m.div
            initial={{ y: "10%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              type: "spring",
              delay: 0.1,
            }}
            className={
              theme === false
                ? "grid lg:grid-cols-2 grid-cols-1 pt-20 pb-16 text-[#000000]"
                : "grid lg:grid-cols-2 grid-cols-1 pt-20 pb-16 text-[#ffffff]"
            }
          >
            {/* DIV DE ABAJO A LA IZQUIERDA----------------------- */}
            <div className="w-[100%]">
              <div className="w-[100%] flex">
                <div className="md:px-4 md:my-auto m-auto lg:w-[500px] w-[100%]">
                  <div
                    className={
                      theme === false
                        ? "font-semibold text-[min(8vw,48px)] text-black space"
                        : "font-semibold text-[min(8vw,48px)] text-white space"
                    }
                  >
                    {language ? (
                      <div>My experience</div>
                    ) : (
                      <div>Mi experiencia</div>
                    )}
                  </div>

                  <div className="text-[min(4.5vw,19px)] font-light">
                    <div className="pt-2 ">
                      {language ? (
                        <div>
                          I would like to have the pleasure of working with
                          companies within different sectors. I&apos;m always
                          interested in new and exciting adventures.
                        </div>
                      ) : (
                        <div>
                          Me gusta tener el placer de trabajar con empresas
                          dentro de distintos sectores. Siempre me interesan las
                          nuevas y emocionantes aventuras.
                        </div>
                      )}
                    </div>
                  </div>

                  {/* DIV DEL BOTON See All Projects----------------------- */}
                  <div className="w-full flex pt-10 text-black ">
                    <a
                      href={resume}
                      target="_blank"
                      className="font-bold text-[min(4vw,14.5px)] pl-7 pr-5 py-[14px] btnColor text-white rounded-sm flex buttonShadow transitionButton cursor-pointer"
                    >
                      {language ? (
                        <div className="pt-[1px]">Download Resume</div>
                      ) : (
                        <div className="pt-[1px]">Descargar Currículum</div>
                      )}
                      <div className="rotateIcon ml-1 mt-[0.5px] text-[min(5vw,25px)]">
                        <MdOutlineTurnSlightLeft />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* DIV DE LA DERECHA ABAJO----------------------- */}
            <div className="w-[100%] bg-[#98147b00] lg:mt-[-40px] mt-[60px]">
              <CardExperience
                theme={theme}
                language={language}
                date={language ? "JUL 2022 - DEC 2022" : "JUL 2022 - DEC 2022"}
                title="Front End Developer"
                company="PaYa"
                link="https://pidepaya.com/"
                description={
                  language
                    ? "Managed and developed the functionalities and the front-end for a delivery app using JavaScript, Firebase for authentication, and frameworks such as React Native."
                    : "Administré y desarrollé las funcionalidades y el front-end para un delivery app usando JavaScript, Firebase para autenticación y frameworks como React Native."
                }
                language1="React Native"
                language2="Javascript"
                language3="Firebase"
              />
            </div>
          </m.div>
        </div>
      </div>

      <Footer theme={theme} language={language} setLanguage={setLanguage} />
    </div>
  );
};

export default About;
