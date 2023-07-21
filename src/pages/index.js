import React from "react";
import Head from "next/head";
import Link from "next/link";
import { MdOutlineTurnSlightLeft } from "react-icons/md";
import Footer from "@/components/Footer";
import { motion as m } from "framer-motion";

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
            ? "w-full bg-[#f9f9f9] h-[80vh]"
            : "w-full bg-[#111111] h-[80vh]"
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
          <div className="sm:w-[30px] sm:h-[30px] w-[3.02vh] h-[3.02vh] bg-white absolute sm:left-[10.5%] sm:top-[19.5%] left-[6.5vh] top-[19.5vh] containerFloat2 rounded-tl-full"></div>
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
          <div className="absolute sm:right-[9%] right-[15%] top-[21%] rotateSquare containerFloat4">
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
            className="my-auto md:px-2 px-4 sm:pt-4"
          >
            {/* DIV DEL HEADER GRANDE----------------------- */}
            <div className="lg:text-[75px] font-semibold xl:flex xl:flex-col hidden">
              <div className="w-full justify-center text-center flex">
                <div className="lg:flex lg:h-[110px] lg:w-[110px] lg:mr-4 lg:mt-[-8px] hidden hand justify-center containerFloat1"></div>{" "}
                <div>
                  {language ? <div>Hello! I&apos;m </div> : <div>¡Hola! Soy </div>}
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
              <div className="text-center xl:hidden flex flex-col lg:text-[70px] md:text-[55px] sm:text-[50px] text-[31px] font-semibold">
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
            <div className="lg:text-[20px] md:text-[17px] text-[17px] font-light mt-[15px] text-center">
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
            <div className="px-2 md:text-[20px] text-[18px] font-light mt-[15px] text-center sm:px-10">
              {language ? (
                <div className="md:hidden flex">
                  Find out how I&apos;ve applied my passion for technology! You can
                  find my projects on Github or see my LinkedIn profile.
                </div>
              ) : (
                <div className="md:hidden flex">
                  ¡Descubre cómo he aplicado mi pasión por la tecnología! Puedes
                  encontrar mis proyectos en Github o ver mi perfil de LinkedIn.
                </div>
              )}
            </div>

            {/* DIV DEL BOTON----------------------- */}
            <div className=" w-full justify-center flex lg:pt-14 md:pt-20 pt-16 text-black">
              <Link
                href={"/Projects"}
                onClick={() => {
                  setActive("projects");
                  toggle === false ? "" : setToggle(!toggle);
                }}
                className="font-bold text-[14.5px] pl-7 pr-5 py-[14px] bg-white rounded-md flex buttonShadow transitionButton"
              >
                {language ? (
                  <div className="pt-[1px]">See My Works</div>
                ) : (
                  <div className="pt-[1px]">Ver Mis Trabajos</div>
                )}

                <div className="rotateIcon ml-1 mt-[0.5px] text-[25px]">
                  <MdOutlineTurnSlightLeft />
                </div>
              </Link>
            </div>
          </m.div>
        </div>
      </div>
      <Footer theme={theme} language={language} setLanguage={setLanguage} />
    </div>
  );
};

export default Home;
