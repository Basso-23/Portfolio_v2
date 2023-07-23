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
          : "bg-[#111111] text-[#bcbcbc]"
      }
    >
      <Head>
        {language ? (
          <title>CarlosBaso/Contact</title>
        ) : (
          <title>CarlosBaso/Contacto</title>
        )}
      </Head>
      <div
        className={
          theme === false
            ? "w-full bg-[#f9f9f9] sm:h-[80vh] h-[178vw]"
            : "w-full bg-[#111111] sm:h-[80vh] h-[178vw]"
        }
      >
        {/* DIV DE LA PANTALLA----------------------- */}
        <div
          className={
            theme === false
              ? "w-[86%] min-h-[96%] bg-[#ffffff] divShadow rounded-xl mx-auto text-white space flex flex-col"
              : "w-[86%] min-h-[96%] bg-[#000000] rounded-xl mx-auto text-white space flex flex-col"
          }
        >
          {/* FIGURA DE LA IZQUIERDA-ABAJO----------------------- */}
          <div
            className={
              theme === false
                ? "hidden sm:flex w-[75px] h-[75px]  absolute left-[8.5%] bottom-[21.5%] trazo3 containerFloat1"
                : "hidden sm:flex w-[75px] h-[75px]  absolute left-[8.5%] bottom-[21.5%] trazo2 containerFloat1"
            }
          ></div>
          {/* FIGURA DE LA IZQUIERDA-ARRIBA----------------------- */}

          <div
            className={
              theme === false
                ? "sm:w-[30px] sm:h-[30px] w-[3.02vh] h-[3.02vh] bg-[#0055ff] absolute sm:left-[10.5%] sm:top-[19.5%] left-[6.5vh] top-[19.5vh] rounded-tl-full containerFloat2"
                : "sm:w-[30px] sm:h-[30px] w-[3.02vh] h-[3.02vh] bg-[#f9b757] absolute sm:left-[10.5%] sm:top-[19.5%] left-[6.5vh] top-[19.5vh] rounded-tl-full containerFloat2"
            }
          ></div>
          {/* FIGURA DE LA DERECHA-ABAJO----------------------- */}
          <div
            className={
              theme === false
                ? "hidden sm:flex w-[37px] h-[37px] bg-[#0055ff] absolute right-[10.5%] bottom-[20%] rounded-full containerFloat3"
                : "hidden sm:flex w-[37px] h-[37px] bg-[#6561bf] absolute right-[10.5%] bottom-[20%] rounded-full containerFloat3"
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
          {/* FIGURA DE LA DERECHA-ARRIBA----------------------- */}
          <div className="absolute sm:right-[9%] right-[15%] top-[21%] rotateSquare containerFloat4">
            <div className={theme === false ? "triangle1" : "triangle2"}></div>
          </div>

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
              <div className="text-center xl:hidden flex flex-col lg:text-[70px] md:text-[55px] sm:text-[50px] text-[31px] font-semibold">
                <div>Project in mind?</div>
                <div>Let&apos;s work together.</div>
              </div>
            ) : (
              <div className="text-center xl:hidden flex flex-col lg:text-[70px] md:text-[55px] sm:text-[50px] text-[31px] font-semibold">
                <div>Proyecto en mente?</div>
                <div>Trabajemos juntos.</div>
              </div>
            )}

            {/* DIV DEL HEADER PEQUEÑO----------------------- */}
            <div className="px-2 lg:text-[20px] md:text-[17px] text-[17px] font-light mt-[15px] text-center sm:px-10">
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
            <div className=" w-full justify-center flex pt-[6vh] text-white">
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
            <div className="gap-6 flex justify-center mt-[6vh] pb-[3vh]">
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
                className="ml-3 w-[36px] h-[24px] click transition-all cursor-pointer esp  rounded-sm"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
