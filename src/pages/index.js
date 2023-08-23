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
  setActive,
  theme,
  language,
  setLanguage,
}) => {
  return (
    <div>
      
      {/* DIV DE LA PANTALLA---------------------------------------------- */}
      <div className="w-full bgColor min-h-[78vh] flex justify-center pt-2">
        {/* DIV DEL CONTENIDO---------------------------------------------- */}
        <div className=" flex min-h-[78vh] w-[86%] space z-10 btnColor rounded-lg">
          {/* DIV DE LAS FIGURAS----------------------- */}
          <div className="w-[86%] min-h-[78vh] m-auto text-white space grid grid-cols-2 grid-row-2 absolute">
            {/* FIGURA DE LA IZQUIERDA-ARRIBA---------------------------------------------- */}
            <div className="flex sm:pt-20 sm:pl-14 pt-6 px-4 transition-all">
              <div className="w-14 h-14 rounded-full z-20 flex">
                <div className="sm:w-[30px] sm:h-[30px] w-[5.8vw] h-[5.8vw] bg-white containerFloat2 rounded-tl-full m-auto"></div>
              </div>
            </div>
            {/* FIGURA DE LA DERECHA-ARRIBA---------------------------------------------- */}
            <div className="flex justify-end sm:pt-20 sm:pr-10 pt-6 px-4 transition-all">
              <div className="w-14 h-14 rounded-full z-20 rotateSquare containerFloat4 flex">
                <div className="triangle m-auto"></div>
              </div>
            </div>
            {/* FIGURA DE LA IZQUIERDA-ABAJO---------------------------------------------- */}
            <div className="xl:flex pb-28 pl-8 hidden">
              <div className="w-14 h-14 rounded-full self-end z-20">
                <div className="hidden sm:flex w-[75px] h-[75px] trazo containerFloat1 m-auto"></div>
              </div>
            </div>
            {/* FIGURA DE LA DERECHA-ABAJO---------------------------------------------- */}
            <div className="xl:flex justify-end pb-20 pr-16 hidden">
              <div className="w-14 h-14 rounded-full self-end z-20 flex">
                <div className="hidden sm:flex w-[37px] h-[37px] bg-white rounded-full containerFloat3 m-auto">
                  <div className="w-[75%] h-[75%] btnColor m-auto rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="m-auto">
            {/* DIV DEL HEADER----------------------- */}
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
                  ? "my-auto md:px-2 px-4 sm:pt-4 text-white"
                  : "my-auto md:px-2 px-4 sm:pt-4 text-white"
              }
            >
              {/* DIV DEL HEADER GRANDE----------------------- */}
              <div className="lg:text-[75px] font-semibold xl:flex xl:flex-col hidden pt-14 ">
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
                <div className="pt-8 text-center xl:hidden flex flex-col text-[min(7vw,70px)] font-semibold">
                  <div>Hello! I&apos;m Carlos,</div>
                  <div>a Software Engineer</div>
                </div>
              ) : (
                <div className="pt-8 text-center xl:hidden flex flex-col text-[min(7vw,70px)] font-semibold">
                  <div>¡Hola! Soy Carlos,</div>
                  <div>Ing. de Software</div>
                </div>
              )}

              {/* DIV DEL HEADER PEQUEÑO----------------------- */}
              <div className="text-[#ffffff] text-[min(2vw,19px)] font-light mt-[15px] text-center">
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
                      Puedes encontrar mis proyectos en Github o ver mi perfil
                      de LinkedIn.
                    </div>
                  </div>
                )}
              </div>

              {/* DIV DEL HEADER PEQUEÑO (MOVILES)----------------------- */}
              <div className="text-[#ffffff] px-2 text-[min(4.5vw,20px)] font-light mt-[15px] text-center sm:px-10">
                {language ? (
                  <div className="md:hidden flex">
                    Find out how I&apos;ve applied my passion for technology!
                    You can find my projects on Github or see my LinkedIn
                    profile.
                  </div>
                ) : (
                  <div className="md:hidden flex">
                    ¡Descubre cómo he aplicado mi pasión por la tecnología!
                    Puedes encontrar mis proyectos en Github o ver mi perfil de
                    LinkedIn.
                  </div>
                )}
              </div>

              {/* DIV DEL BOTON---------------------------------------------- */}
              <div className=" w-full justify-center flex text-white pt-8">
                <Link
                  href={"/Projects"}
                  onClick={() => {
                    setActive("projects");
                    toggle === false ? "" : setToggle(!toggle);
                  }}
                  className="font-bold text-[min(4vw,14.5px)] pl-7 pr-5 py-[14px] bg-[#ffffff] text-[#000000] rounded-sm flex buttonShadow cursor-pointer transitionButton"
                >
                  <div className="flex px-3">
                    {language ? (
                      <div className="pt-[1px]">See My Works</div>
                    ) : (
                      <div className="pt-[1px]">Ver Mis Trabajos</div>
                    )}

                    <div className="rotateIcon ml-1 mt-[0.5px] text-[min(5vw,25px)]">
                      <MdOutlineTurnSlightLeft />
                    </div>
                  </div>
                </Link>
              </div>

              {/* DIV DE LOS SOCIALS---------------------------------------------- */}
              <div className="gap-6 flex justify-center sm:mt-[6vh] sm:pb-[3vh] mt-[13.5vw] pb-[6.9vw] flex-wrap">
                <a href="mailto:carlos.baso23@gmail.com" target="_blank">
                  <AiFillGoogleCircle className="cursor-pointer text-[min(10vw,40px)] click transition-all" />
                </a>
                <a
                  href="https://www.linkedin.com/in/carlos-baso-4b90b7270/"
                  target="_blank"
                >
                  <AiFillLinkedin className="cursor-pointer text-[min(10vw,40px)] click transition-all" />
                </a>
                <a href="https://github.com/Basso-23" target="_blank">
                  <AiOutlineGithub className="cursor-pointer  text-[min(10vw,40px)] click transition-all" />
                </a>
                <a
                  href="https://www.instagram.com/carlos.basso_/"
                  target="_blank"
                >
                  <AiOutlineInstagram className="cursor-pointer text-[min(10vw,40px)] click transition-all" />
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
              : "w-[86%] text-[#8b8b8b] mx-auto space lg:flex pt-[5vh] pb-[2.5vh]"
          }
        >
          <div className="w-full text-[min(3.5vw,14px)] md:flex">
            {language ? (
              <div className="my-auto">
                ©2023 CarlosBaso. All rights reserved.
              </div>
            ) : (
              <div className="my-auto">
                ©2023 CarlosBaso. Todos los derechos reservados.
              </div>
            )}

            <div className="xl:flex hidden">
              <div
                onClick={() => {
                  setLanguage(true);
                }}
                className="ml-4 w-[35px] h-[23px] transition-all cursor-pointer eng rounded-sm"
              ></div>
              <div
                onClick={() => {
                  setLanguage(false);
                }}
                className="ml-3 w-[36px] h-[24px] transition-all cursor-pointer esp rounded-sm"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
