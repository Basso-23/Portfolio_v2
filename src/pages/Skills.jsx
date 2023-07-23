import React from "react";
import { MdOutlineTurnSlightLeft } from "react-icons/md";
import Link from "next/link";
import Footer from "@/components/Footer";
import { motion as m } from "framer-motion";
import Head from "next/head";

{
  /* ESTRUCTURA DEL CONTENEDOR DE LOS LENGUAJES----------------------- */
}
const Languages = ({ name, theme, setTheme }) => {
  return (
    <div className="flex transition-all hover:scale-110 cursor-default">
      <div
        className={
          theme === false
            ? "border-[2px] hover:border-[#000] text-[#000] hover:bg-black hover:text-white mt-0 py-2 px-8 rounded-full font-sans text-[14px] inter"
            : "border-[2px] hover:border-[#fff] text-[#fff] hover:bg-white hover:text-black mt-0 py-2 px-8 rounded-full font-sans text-[14px] inter"
        }
      >
        {name}
      </div>
    </div>
  );
};

{
  /* ESTRUCTURA DEL CONTENEDOR DE LOS SKILLS----------------------- */
}
const CardSkills = ({
  name,
  description,
  image,
  animation,
  theme,
  setTheme,
}) => {
  return (
    <div
      className={
        theme === false
          ? "bg-[#ffffff] mx-auto lg:w-[90%] w-[100%] flex rounded-lg mt-10 divShadow"
          : "bg-[#070707] mx-auto lg:w-[90%] w-[100%] flex rounded-lg mt-10"
      }
    >
      <div className="flex">
        <div className="m-auto md:px-8">
          <div
            className={`${image} ${animation} md:flex hidden h-[95px] w-[95px] mt-[-25px]`}
          ></div>{" "}
        </div>
      </div>

      <div className="w-[100%] flex flex-col md:px-0 px-8">
        <div className="m-auto md:pr-10 md:pl-2 my-[40px]">
          <div
            className={
              theme === false
                ? "text-[#000] border-b-2 border-[#797979] pb-2 font-bold text-[21px] space"
                : "text-[#fff] border-b-2 border-[#797979] pb-2 font-bold text-[21px] space"
            }
          >
            {name}
          </div>
          <div
            className={
              theme === false
                ? "text-[16.5px] pt-4 space font-light text-[#000]"
                : "text-[16.5px] pt-4 space font-light text-[#fff]"
            }
          >
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

const Skills = ({
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
          <title>CarlosBaso/Skills</title>
        ) : (
          <title>CarlosBaso/Habilidades</title>
        )}
      </Head>
      <div
        className={
          theme === false ? "w-full bg-[#f9f9f9]" : "w-full bg-[#111111]"
        }
      >
        <m.div
          initial={{ y: "35%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            type: "spring",
            delay: 0,
          }}
          className="w-[86%] lg:flex mx-auto xl:pt-[50px] pt-2 space text-[#797979]"
        >
          <div className="lg:w-[50%] md:px-[46px] pb-[2.1vh]">
            <div
              className={
                theme === false
                  ? "font-semibold sm:text-[40px] text-[32px] text-black"
                  : "font-semibold sm:text-[40px] text-[32px] text-white"
              }
            >
              {language ? (
                <div>
                  The skills I offer is specifially designed to meet your needs.
                </div>
              ) : (
                <div>
                  Mis habilidades están diseñadas para cumplir tus necesidades.
                </div>
              )}
            </div>

            <div className="sm:text-[19px] text-[18px] font-light ">
              {language ? (
                <div className="pt-2">
                  Always willing to learn new tools and programming languages to
                  quickly adapt to any project and challenge that comes my way.
                </div>
              ) : (
                <div className="pt-2">
                  Siempre dispuesto a aprender nuevas herramientas y lenguajes de
                  programación para adaptarme rápidamente a cualquier proyecto y
                  desafío que se presente.
                </div>
              )}
            </div>

            {/* DIV DEL BOTON See All Projects----------------------- */}
            <div className="w-full flex pt-10 text-black ">
              <Link
                href={"/Projects"}
                onClick={() => {
                  setActive("projects");
                  toggle === false ? "" : setToggle(!toggle);
                }}
                className={
                  theme === false
                    ? "font-bold text-[14.5px] pl-7 pr-5 py-[14px] bg-[#0055ff] text-white rounded-md flex buttonShadow transitionButton"
                    : "font-bold text-[14.5px] pl-7 pr-5 py-[14px] bg-[#ff5100] text-white rounded-md flex buttonShadow transitionButton"
                }
              >
                {language ? (
                  <div className="pt-[1px]">See My Projects</div>
                ) : (
                  <div className="pt-[1px]">Ver Mis Proyectos</div>
                )}
                <div className="rotateIcon ml-1 mt-[0.5px]">
                  <MdOutlineTurnSlightLeft size={"25px"} />
                </div>
              </Link>
            </div>
          </div>

          <div className="lg:w-[50%] md:px-[46px] sm:pb-10 pb-2 lg:pt-0 pt-12">
            <div
              className={
                theme === false
                  ? "font-semibold sm:text-[40px] text-[32px] text-black text-center"
                  : "font-semibold sm:text-[40px] text-[32px] text-white text-center"
              }
            >
              {language ? (
                <div>Some of my Knowledge</div>
              ) : (
                <div>Algunos de mis Conocimientos</div>
              )}
            </div>

            <div className="sm:text-[19px] text-[17px]">
              <div className="flex flex-wrap gap-x-6 gap-y-4 mt-10 justify-center">
                <Languages theme={theme} name="HTML 5" />
                <Languages theme={theme} name="CSS" />
                <Languages theme={theme} name="JavaScript" />
                <Languages theme={theme} name="Shopify" />
                <Languages theme={theme} name="React JS" />
                <Languages theme={theme} name="TypeScript" />
                <Languages theme={theme} name="Tailwind CSS" />
                <Languages theme={theme} name="Node JS" />
                <Languages theme={theme} name="Firebase" />
                <Languages theme={theme} name="Next JS" />
                <Languages theme={theme} name="Three JS" />
                <Languages theme={theme} name="React Native" />
                <Languages theme={theme} name="Git" />
                <Languages theme={theme} name="Figma" />
                <Languages theme={theme} name="MySQL" />
              </div>
            </div>
          </div>
        </m.div>

        <div className="w-[86%] mx-auto sapce text-[#797979] pt-8 pb-8">
          <div className="grid xl:grid-cols-2 grid-cols-1">
            <div>
              <m.div
                initial={{ y: "35%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  type: "spring",
                  delay: 0.2,
                }}
              >
                <CardSkills
                  theme={theme}
                  name={language ? "Web Design 💻" : "Diseño Web 💻"}
                  image="web"
                  description={
                    language
                      ? "Creation of attractive and functional interfaces, using languages such as HTML, CSS and JavaScript, as well as modern frameworks. I am aware of the latest trends and committed to deliver high quality products."
                      : "Creación de interfaces atractivas y funcionales, utilizando lenguajes como HTML, CSS y JavaScript, así como frameworks modernos. Estoy al tanto de las últimas tendencias y me comprometo a entregar productos de alta calidad."
                  }
                  animation="containerFloat1"
                />
              </m.div>

              <m.div
                initial={{ y: "35%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  type: "spring",
                  delay: 0.4,
                }}
              >
                <CardSkills
                  theme={theme}
                  name={
                    language ? "App Design 📱" : "Diseño de Aplicaciones 📱"
                  }
                  image="app"
                  description={
                    language
                      ? "Design of attractive and functional interfaces, providing an excellent user experience on mobile devices. Using specialized tools to create scalable and high performance mobile applications."
                      : "Diseño de interfaces atractivas y funcionales, proporcionando una excelente experiencia de usuario en móviles. Utilizando herramientas especializadas para crear aplicaciones móviles escalables y de alto rendimiento."
                  }
                  animation="containerFloat3"
                />
              </m.div>
            </div>
            <div>
              <m.div
                initial={{ y: "35%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  type: "spring",
                  delay: 0.6,
                }}
              >
                <CardSkills
                  theme={theme}
                  name={
                    language
                      ? "Strategy & Plannig 📃"
                      : "Estrategia y Planificación 📃"
                  }
                  image="strategy"
                  description={
                    language
                      ? "I design and execute successful project strategies, managing resources and deadlines efficiently. I anticipate problems and adjust planning as needed, working effectively to achieve satisfactory results."
                      : "Diseño y ejecuto estrategias de proyecto exitosas, gestionando los recursos y los plazos con eficiencia. Anticipo los problemas y ajusto la planificación según sea necesario, trabajando con eficacia para lograr resultados satisfactorios."
                  }
                  animation="containerFloat2"
                />
              </m.div>

              <m.div
                initial={{ y: "35%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  type: "spring",
                  delay: 0.8,
                }}
              >
                <CardSkills
                  theme={theme}
                  name={
                    language
                      ? "Creative Solutions 🧩"
                      : "Soluciones Creativas 🧩"
                  }
                  image="brand"
                  description={
                    language
                      ? "I find original and innovative ideas to solve technical challenges. My creative approach improves the efficiency and quality of projects. I work in teams and contribute ideas that lead to successful results."
                      : "Encuentro ideas originales y innovadoras para resolver desafíos técnicos. Mi enfoque creativo mejora la eficiencia y la calidad de los proyectos. Trabajo en equipo y contribuyo con ideas que conducen a resultados exitosos."
                  }
                  animation="containerFloat4"
                />
              </m.div>
            </div>
          </div>
        </div>
      </div>

      <Footer theme={theme} language={language} setLanguage={setLanguage} />
    </div>
  );
};

export default Skills;
