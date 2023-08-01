import React, { useState, useEffect } from "react";
import Head from "next/head";
import { MdOutlineTurnSlightLeft } from "react-icons/md";
import {
  AiFillLinkedin,
  AiFillGoogleCircle,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import { motion as m } from "framer-motion";

const Contact = ({
  setToggle,
  toggle,
  active,
  setActive,
  theme,
  setTheme,
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
    <div
      className={
        theme === false
          ? "bg-[#f9f9f9] text-[#000000]"
          : "bg-[#111111] text-[#bcbcbc] "
      }
    >
      <Head>
        {language ? (
          <title>CarlosBaso/Contact</title>
        ) : (
          <title>CarlosBaso/Contacto</title>
        )}
      </Head>
      {/* DIV DE LA PANTALLA---------------------------------------------- */}
      <div className="w-full bgColor min-h-[78vh] flex justify-center pt-2">
        {/* DIV DEL CONTENIDO---------------------------------------------- */}
        <div
          className={
            theme === false
              ? "flex min-h-[78vh] w-[86%] space z-10 rounded-xl bg-white divShadow"
              : "flex min-h-[78vh] w-[86%] space z-10 bg-black rounded-xl divShadow"
          }
        >
          {/* DIV DE LAS FIGURAS----------------------- */}
          <div className="w-[86%] min-h-[78vh] m-auto text-white space grid grid-cols-2 grid-row-2 absolute">
            {/* FIGURA DE LA IZQUIERDA-ARRIBA---------------------------------------------- */}
            <div className="flex sm:pt-20 sm:pl-14 pt-6 px-4 transition-all">
              <div className="w-14 h-14 rounded-full z-20 flex">
                <div
                  className={
                    theme === false
                      ? "sm:w-[30px] sm:h-[30px] w-[5.8vw] h-[5.8vw] bg-[#0055ff] rounded-tl-full containerFloat2 m-auto"
                      : "sm:w-[30px] sm:h-[30px] w-[5.8vw] h-[5.8vw] bg-[#f9b757] rounded-tl-full containerFloat2 m-auto"
                  }
                ></div>
              </div>
            </div>
            {/* FIGURA DE LA DERECHA-ARRIBA---------------------------------------------- */}
            <div className="flex justify-end sm:pt-20 sm:pr-10 pt-6 px-4 transition-all">
              <div className="w-14 h-14 rounded-full z-20 rotateSquare containerFloat4 flex">
                <div
                  className={
                    theme === false ? "triangle1 m-auto" : "triangle2 m-auto"
                  }
                ></div>
              </div>
            </div>
            {/* FIGURA DE LA IZQUIERDA-ABAJO---------------------------------------------- */}
            <div className="xl:flex pb-28 pl-8 hidden">
              <div className="w-14 h-14 rounded-full self-end z-20">
                <div
                  className={
                    theme === false
                      ? "hidden sm:flex w-[75px] h-[75px] trazo3 containerFloat1 m-auto"
                      : "hidden sm:flex w-[75px] h-[75px] trazo2 containerFloat1 m-auto"
                  }
                ></div>
              </div>
            </div>
            {/* FIGURA DE LA DERECHA-ABAJO---------------------------------------------- */}
            <div className="xl:flex justify-end pb-20 pr-16 hidden">
              <div className="w-14 h-14 rounded-full self-end z-20 flex">
                <div
                  className={
                    theme === false
                      ? "hidden sm:flex w-[37px] h-[37px] bg-[#0055ff] rounded-full containerFloat3 m-auto"
                      : "hidden sm:flex w-[37px] h-[37px] bg-[#6561bf] rounded-full containerFloat3 m-auto"
                  }
                >
                  <div
                    className={
                      theme === false
                        ? "w-[75%] h-[75%] bg-[#ffffff] m-auto rounded-full"
                        : "w-[75%] h-[75%] bg-[#000000] m-auto rounded-full"
                    }
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="m-auto">
            {/* DIV DEL HEADER----------------------- */}
            <m.div
              initial={{ y: "35%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeOut",
                type: "spring",
                delay: 0,
              }}
              className={
                theme === false
                  ? "my-auto md:px-2 px-4 sm:pt-4 text-black"
                  : "my-auto md:px-2 px-4 sm:pt-4 text-white"
              }
            >
              {/* DIV DEL HEADER GRANDE----------------------- */}
              <div className="lg:text-[75px] md:text-[65px] text-[35px] font-semibold text-center pt-10 xl:flex xl:flex-col hidden">
                <div className="w-full justify-center text-center flex flex-wrap">
                  {language ? <div>Got a</div> : <div>Tienes pensado </div>}
                  <div className="xl:flex lg:h-[115px] lg:w-[115px] lg:mt-[-10px] lg:ml-[10px] lg:mr-[10px] hidden alien containerFloat1 "></div>{" "}
                  <div className="lg:mt-0 md:mt-[-32px]">
                    {language ? (
                      <div>project in mind?</div>
                    ) : (
                      <div>un proyecto?</div>
                    )}
                  </div>
                </div>
                <div className="w-full text-center justify-center lg:mt-[0px] md:mt-[-32px] flex">
                  {language ? (
                    <div>Let&apos;s work together.</div>
                  ) : (
                    <div>Trabajemos juntos</div>
                  )}
                  <div className="xl:flex lg:h-[115px] lg:w-[115px] lg:ml-2 lg:mt-[-8px] hidden hand2 justify-center containerxFloat2"></div>{" "}
                </div>
              </div>

              {/* DIV DEL HEADER GRANDE (MOVILES)----------------------- */}
              {language ? (
                <div className="text-center xl:hidden flex flex-col text-[min(7vw,70px)] font-semibold">
                  <div>Project in mind?</div>
                  <div>Let&apos;s work together.</div>
                </div>
              ) : (
                <div className="text-center xl:hidden flex flex-col text-[min(7vw,70px)] font-semibold">
                  <div>Proyecto en mente?</div>
                  <div>Trabajemos juntos.</div>
                </div>
              )}

              {/* DIV DEL HEADER PEQUEÑO----------------------- */}
              <div
                className={
                  theme === false
                    ? "text-[#797979] px-2 lg:text-[20px] text-[min(4.5vw,20px)] font-light mt-[15px] text-center sm:px-10"
                    : "text-[#ffffff] px-2 lg:text-[20px] text-[min(4.5vw,20px)] font-light mt-[15px] text-center sm:px-10"
                }
              >
                {language ? (
                  <div className="flex-col flex ">
                    <div>
                      Have any questions? Reach out to me and I will get back to
                      you shortly.
                    </div>
                  </div>
                ) : (
                  <div className="flex-col md:flex">
                    <div>
                      Tienes algunas preguntas? Ponte en contacto conmigo y te
                      responderé en breve.
                    </div>
                  </div>
                )}
              </div>

              {/* DIV DEL BOTON----------------------- */}
              <div className=" w-full justify-center flex sm:pt-[6vh] pt-[12vw] text-white">
                <a
                  href={resume}
                  target="_blank"
                  className={
                    theme === false
                      ? "font-bold text-[14.5px] pl-7 pr-5 py-[14px] bg-[#0055ff] text-white rounded-md flex buttonShadow cursor-pointer transitionButton"
                      : "font-bold text-[14.5px] pl-7 pr-5 py-[14px] bg-[#ff5100] text-white rounded-md flex buttonShadow cursor-pointer transitionButton"
                  }
                >
                  {language ? (
                    <div className="pt-[1px]">Download Resume</div>
                  ) : (
                    <div className="pt-[1px]">Descargar Currículum</div>
                  )}
                  <div className="rotateIcon ml-1 mt-[0.5px]">
                    <MdOutlineTurnSlightLeft size={"25px"} />
                  </div>
                </a>
              </div>
              <div className="gap-6 flex justify-center sm:mt-[6vh] sm:pb-[3vh] mt-[13.5vw] pb-[6.9vw] flex-wrap">
                <a href="mailto:carlos.baso23@gmail.com" target="_blank">
                  <AiFillGoogleCircle className="cursor-pointer text-[40px] click transition-all" />
                </a>
                <a
                  href="https://www.linkedin.com/in/carlos-baso-4b90b7270/"
                  target="_blank"
                >
                  <AiFillLinkedin className="cursor-pointer text-[40px] click transition-all" />
                </a>
                <a href="https://github.com/Basso-23" target="_blank">
                  <AiOutlineGithub className="cursor-pointer  text-[40px] click transition-all" />
                </a>
                <a
                  href="https://www.instagram.com/carlos.basso_/"
                  target="_blank"
                >
                  <AiOutlineInstagram className="cursor-pointer text-[40px] click transition-all" />
                </a>
              </div>
            </m.div>
          </div>
        </div>
      </div>

      {/* DIV DEL FOOTER------------------------------------------------------------------------------------------- */}
      <div className={theme === false ? "bg-[#f9f9f9] " : "bg-[#111111] "}>
        <div
          className={
            theme === false
              ? "w-[86%] text-[#000000] mx-auto space lg:flex pt-[5vh] pb-[2.5vh]"
              : "w-[86%] text-[#bcbcbc] mx-auto space lg:flex pt-[5vh] pb-[2.5vh]"
          }
        >
          <div className="w-full text-[16px] md:flex ">
            {language ? (
              <div>©2023 CarlosBaso. All rights reserved.</div>
            ) : (
              <div>©2023 CarlosBaso. Todos los derechos reservados.</div>
            )}

            <div className="xl:flex hidden">
              <div
                onClick={() => {
                  setLanguage(true);
                }}
                className="ml-4 w-[35px] h-[23px] click transition-all cursor-pointer eng rounded-sm"
              ></div>
              <div
                onClick={() => {
                  setLanguage(false);
                }}
                className="ml-3 w-[36px] h-[24px] click transition-all cursor-pointer esp rounded-sm"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
