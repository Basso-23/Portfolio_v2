import React from "react";
import Head from "next/head";
import Link from "next/link";
import { MdOutlineTurnSlightLeft } from "react-icons/md";
import Footer from "@/components/Footer";
import { motion as m } from "framer-motion";
import {
  AiFillLinkedin,
  AiFillGoogleCircle,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

const Home = ({
  setToggle,
  toggle,
  active,
  setActive,
  theme,
  setTheme,
  language,
  setLanguage,
}) => {
  return (
    <div>
      <Head>
        {language ? (
          <title>CarlosBaso/Home</title>
        ) : (
          <title>CarlosBaso/Inicio</title>
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
              ? "w-[86%] min-h-[96%] bg-[#0055ff] divShadow rounded-xl mx-auto text-white space flex flex-col"
              : "w-[86%] min-h-[96%] bg-[#ff5100] rounded-xl mx-auto text-white space flex flex-col"
          }
        >
          {/* FIGURA DE LA IZQUIERDA-ABAJO----------------------- */}
          <div className="hidden sm:flex w-[75px] h-[75px] absolute left-[8.5%] bottom-[21.5%] trazo containerFloat1"></div>
          {/* FIGURA DE LA IZQUIERDA-ARRIBA----------------------- */}
          <div className="sm:w-[30px] sm:h-[30px] w-[5.8vw] h-[5.8vw] bg-white absolute sm:left-[10.5%] sm:top-[19.5%] left-[14vw] top-[43vw] containerFloat2 rounded-tl-full"></div>
          {/* FIGURA DE LA DERECHA-ABAJO----------------------- */}
          <div className="hidden sm:flex w-[37px] h-[37px] bg-white absolute right-[10.5%] bottom-[20%] rounded-full containerFloat3">
            <div
              className={
                theme === false
                  ? "w-[75%] h-[75%] bg-[#0055ff] m-auto rounded-full"
                  : "w-[75%] h-[75%] bg-[#ff5100] m-auto rounded-full"
              }
            ></div>
          </div>
          {/* FIGURA DE LA DERECHA-ARRIBA----------------------- */}
          <div className="absolute sm:right-[9%] sm:top-[21%] right-[14vw] top-[43vw] rotateSquare containerFloat4">
            <div className="triangle"></div>
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
                ? "my-auto md:px-2 px-4 sm:pt-4 text-white"
                : "my-auto md:px-2 px-4 sm:pt-4 text-white"
            }
          >
            {/* DIV DEL HEADER GRANDE----------------------- */}
            <div className="lg:text-[75px] font-semibold xl:flex xl:flex-col hidden pt-14">
              <div className="w-full justify-center text-center flex">
                <div className="lg:flex lg:h-[115px] lg:w-[115px] lg:mr-4 lg:mt-[-8px] hidden hand justify-center containerFloat1"></div>{" "}
                <div>
                  {language ? (
                    <div>Hello! I&apos;m </div>
                  ) : (
                    <div>¡Hola! Soy </div>
                  )}
                </div>
                <div className="lg:flex lg:h-[170px] lg:w-[175px] lg:mt-[-20px] lg:ml-[-20px] lg:mr-[-15px] hidden face containerFloat5"></div>{" "}
                <div>Carlos,</div>
              </div>
              <div className="w-full text-center lg:mt-[-48px]">
                {language ? (
                  <div>a Software Engineer.</div>
                ) : (
                  <div>Ingeniero de Software.</div>
                )}
              </div>
            </div>

            {/* DIV DEL HEADER GRANDE (MOVILES)----------------------- */}
            {language ? (
              <div className="pt-8 text-center xl:hidden flex flex-col lg:text-[70px] md:text-[55px] sm:text-[50px] text-[31px] font-semibold">
                <div>Hello! I&apos;m Carlos,</div>
                <div>a Software Engineer</div>
              </div>
            ) : (
              <div className="text-center xl:hidden flex flex-col lg:text-[70px] md:text-[55px] sm:text-[50px] text-[31px] font-semibold">
                <div>¡Hola! Soy Carlos,</div>
                <div>Ing. de Software</div>
              </div>
            )}

            {/* DIV DEL HEADER PEQUEÑO----------------------- */}
            <div
              className={
                theme === false
                  ? "text-[#ffffff] lg:text-[20px] md:text-[17px] text-[17px] font-light mt-[15px] text-center"
                  : "text-[#ffffff] lg:text-[20px] md:text-[17px] text-[17px] font-light mt-[15px] text-center"
              }
            >
              {language ? (
                <div className="md:flex-col md:flex hidden ">
                  <div>
                    Find out how I&apos;ve applied my passion for technology!
                  </div>
                  <div>
                    You can find my projects on Github or check my LinkedIn
                    profile.
                  </div>
                </div>
              ) : (
                <div className="md:flex-col md:flex hidden">
                  <div>
                    ¡Descubre cómo he aplicado mi pasión por la tecnología!
                  </div>
                  <div>
                    Puedes encontrar mis proyectos en Github o ver mi perfil de
                    LinkedIn.
                  </div>
                </div>
              )}
            </div>

            {/* DIV DEL HEADER PEQUEÑO (MOVILES)----------------------- */}
            <div
              className={
                theme === false
                  ? "text-[#ffffff] px-2 lg:text-[20px] md:text-[17px] text-[17px] font-light mt-[15px] text-center sm:px-10"
                  : "text-[#ffffff] px-2 lg:text-[20px] md:text-[17px] text-[17px] font-light mt-[15px] text-center sm:px-10"
              }
            >
              {language ? (
                <div className="md:hidden flex">
                  Find out how I&apos;ve applied my passion for technology! You
                  can find my projects on Github or see my LinkedIn profile.
                </div>
              ) : (
                <div className="md:hidden flex">
                  ¡Descubre cómo he aplicado mi pasión por la tecnología! Puedes
                  encontrar mis proyectos en Github o ver mi perfil de LinkedIn.
                </div>
              )}
            </div>

            {/* DIV DEL BOTON----------------------- */}
            <div className=" w-full justify-center flex sm:pt-[5vh] pt-[8vw] text-white">
              <Link
                href={"/Projects"}
                onClick={() => {
                  setActive("projects");
                  toggle === false ? "" : setToggle(!toggle);
                }}
                className={
                  theme === false
                    ? "font-bold text-[14.5px] pl-7 pr-5 py-[14px] bg-[#ffffff] text-[#000000] rounded-md flex buttonShadow cursor-pointer transitionButton"
                    : "font-bold text-[14.5px] pl-7 pr-5 py-[14px] bg-[#ffffff] text-[#000000] rounded-md flex buttonShadow cursor-pointer transitionButton"
                }
              >
                <div className="flex px-3">
                  {language ? (
                    <div className="pt-[1px]">See My Works</div>
                  ) : (
                    <div className="pt-[1px]">Ver Mis Trabajos</div>
                  )}

                  <div className="rotateIcon ml-1 mt-[0.5px] text-[25px]">
                    <MdOutlineTurnSlightLeft />
                  </div>
                </div>
              </Link>
            </div>
            <div className="gap-6 flex justify-center sm:mt-[6vh] sm:pb-[3vh] mt-[13.5vw] pb-[6.9vw]">
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

export default Home;
