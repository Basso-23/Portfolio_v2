import React, { useState, useEffect } from "react";
import { projects } from "../components/IndexENG";
import { projects2 } from "../components/IndexESP";
import { MdOutlineTurnSlightLeft } from "react-icons/md";
import { AiOutlinePushpin } from "react-icons/ai";
import Footer from "@/components/Footer";
import Head from "next/head";
import { motion as m } from "framer-motion";

const ProjectCard = ({
  name,
  title,
  description,
  colorTxt,
  colorBg,
  theme,
  language,
  image,
  float,
  linkP,
  linkG,
}) => {
  return (
    <m.div
      initial={{ y: "35%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{
        duration: 1,
        ease: "easeOut",
        type: "spring",
        delay: 0.1,
      }}
      className={
        theme === false
          ? "lg:w-[50vh] w-[100%] bg-[#fff] mt-14 rounded-xl divShadow"
          : "lg:w-[50vh] w-[100%] bg-[#070707] mt-14 rounded-xl"
      }
    >
      {/* DIV DEL LA INFORMACION----------------------- */}
      <div className="lg:py-8 lg:px-[60px] p-8 md:mx-auto w-[100%]">
        <div
          className={`${colorTxt} font-semibold sm:text-[20px] text-[18px] lg:mt-0 flex`}
        >
          <div className="flex rounded-3xl">{name}</div>
        </div>
        <div
          className={
            theme === false
              ? "font-semibold sm:text-[38px] text-[28px] mt-4 mb-[-15px] text-black"
              : "font-semibold sm:text-[38px] text-[28px] mt-4 mb-[-15px] text-white"
          }
        >
          {title}
        </div>
        {/* DIV DEL LA IMAGEN----------------------- */}
        <div className="w-[100%] flex ">
          <div
            className={`flex sm:h-[255px] sm:w-[400px] h-[50vw] w-[70vw] ${image} ${float}  m-auto rounded-md sm:my-10 my-8`}
          ></div>{" "}
        </div>
        <div className="sm:text-[19px] text-[18px] text-[#797979]">
          <div
            className={
              theme === false ? "font-light " : "font-light  text-white"
            }
          >
            {description}
          </div>
        </div>

        {/* DIV DEL BOTON See Projects----------------------- */}
        <div className="w-full md:flex text-white md:pt-12 pt-4">
          <div
            className={
              theme === false
                ? "py-4 md:border-l-2 border-black text-black italic font-medium pt-6 flex md:hidden sm:pt-3"
                : "py-4 md:border-l-2 border-white italic font-medium pt-6 flex md:hidden sm:pt-3"
            }
          >
            {language ? (
              <a href={linkG} target="_blank" className="cursor-pointer">
                Source Code
              </a>
            ) : (
              <a href={linkG} target="_blank" className="cursor-pointer">
                Código fuente
              </a>
            )}
          </div>
          <a
            href={linkP}
            target="_blank"
            className={`${colorBg} justify-center text-[15px] pl-7 pr-5 py-[14px] rounded-md flex buttonShadow cursor-pointer transitionButton`}
          >
            {language ? (
              <div className="pt-[1px] ">See Project</div>
            ) : (
              <div className="pt-[1px] ">Ver Proyecto</div>
            )}
            <div className="rotateIcon ml-1 mt-[0.5px]">
              <MdOutlineTurnSlightLeft size={"25px"} />
            </div>
          </a>
          <div
            className={
              theme === false
                ? "md:flex hidden py-4 sm:ml-4 sm:pl-4 sm:border-l-2 border-black text-black italic font-medium pt-6 pl-2 sm:pt-3"
                : "md:flex hidden py-4 sm:ml-4 sm:pl-4 sm:border-l-2 border-white italic font-medium pt-6 pl-2 sm:pt-3"
            }
          >
            {language ? (
              <a href={linkG} target="_blank" className="cursor-pointer">
                Source Code
              </a>
            ) : (
              <a href={linkG} target="_blank" className="cursor-pointer">
                Código fuente
              </a>
            )}
          </div>
        </div>
      </div>
    </m.div>
  );
};

const ProjectCard2 = ({
  name,
  title,
  description,
  colorTxt,
  colorBg,
  theme,
  language,
  image,
  float,
  linkP,
  linkG,
}) => {
  return (
    <m.div
      initial={{ y: "35%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{
        duration: 1,
        ease: "easeOut",
        type: "spring",
        delay: 0.1,
      }}
      className={
        theme === false
          ? "lg:w-[50vh] w-[100%] bg-[#fff] mt-14 rounded-xl divShadow"
          : "lg:w-[50vh] w-[100%] bg-[#070707] mt-14 rounded-xl"
      }
    >
      {/* DIV DEL LA INFORMACION----------------------- */}
      <div className="lg:py-8 lg:px-[60px] p-8 md:mx-auto w-[100%]">
        <div
          className={`${colorTxt} font-semibold sm:text-[20px] text-[18px] lg:mt-0 flex`}
        >
          <div className="flex rounded-3xl">{name}</div>
        </div>
        <div
          className={
            theme === false
              ? "font-semibold sm:text-[38px] text-[28px] mt-4 mb-[-15px] text-black"
              : "font-semibold sm:text-[38px] text-[28px] mt-4 mb-[-15px] text-white"
          }
        >
          {title}
        </div>
        {/* DIV DEL LA IMAGEN----------------------- */}
        <div className="w-[100%] flex ">
          <div
            className={`flex sm:h-[255px] sm:w-[400px] h-[50vw] w-[70vw] ${image} ${float}  m-auto rounded-md sm:my-10 my-8`}
          ></div>{" "}
        </div>
        <div className="sm:text-[19px] text-[18px] text-[#797979]">
          <div
            className={
              theme === false ? "font-light " : "font-light  text-white"
            }
          >
            {description}
          </div>
        </div>

        {/* DIV DEL BOTON See Projects----------------------- */}
        <div className="w-full md:flex text-white md:pt-12 pt-4">
          <div
            className={
              theme === false
                ? "py-4 md:border-l-2 border-black text-black italic font-medium pt-6 flex md:hidden sm:pt-3"
                : "py-4 md:border-l-2 border-white italic font-medium pt-6 flex md:hidden sm:pt-3"
            }
          >
            {language ? (
              <a href={linkG} target="_blank" className="cursor-pointer">
                Source Code
              </a>
            ) : (
              <a href={linkG} target="_blank" className="cursor-pointer">
                Código fuente
              </a>
            )}
          </div>
          <a
            href={linkP}
            target="_blank"
            className={`${colorBg} justify-center text-[15px] pl-7 pr-5 py-[14px] rounded-md flex buttonShadow cursor-pointer transitionButton`}
          >
            {language ? (
              <div className="pt-[1px] ">See Project</div>
            ) : (
              <div className="pt-[1px] ">Ver Proyecto</div>
            )}
            <div className="rotateIcon ml-1 mt-[0.5px]">
              <MdOutlineTurnSlightLeft size={"25px"} />
            </div>
          </a>
          <div
            className={
              theme === false
                ? "md:flex hidden py-4 sm:ml-4 sm:pl-4 sm:border-l-2 border-black text-black italic font-medium pt-6 pl-2 sm:pt-3"
                : "md:flex hidden py-4 sm:ml-4 sm:pl-4 sm:border-l-2 border-white italic font-medium pt-6 pl-2 sm:pt-3"
            }
          >
            {language ? (
              <a href={linkG} target="_blank" className="cursor-pointer">
                Source Code
              </a>
            ) : (
              <a href={linkG} target="_blank" className="cursor-pointer">
                Código fuente
              </a>
            )}
          </div>
        </div>
      </div>
    </m.div>
  );
};

const FilterButtons = ({ label, icon }) => {
  return (
    <>
      <div className="pt-[1px] text-[14.5px]">{label}</div>
      <div className=" ml-2 mt-[1px]">
        <AiOutlinePushpin size={"20px"} />
      </div>
    </>
  );
};

const Projects = ({
  setToggle,
  toggle,
  active,
  setActive,
  theme,
  setTheme,
  language,
  setLanguage,
}) => {
  const [filterActive, setFilterActive] = useState("");
  const [filterButtons, setFilterButtons] = useState("");
  const [actualizar, setActualizar] = useState(true);

  useEffect(() => {
    if (theme === false) {
      setFilterActive("filterActive2");
      setFilterButtons("filterButtons2");
    }
    if (theme === true) {
      setFilterActive("filterActive1");
      setFilterButtons("filterButtons1");
    }
  }, [theme]);

  const [info, setInfo] = useState(projects);
  const [items, setItems] = useState(projects);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    if (language === true) {
      setItems(projects);
      setInfo(projects);
    }
    if (language === false) {
      setItems(projects2);
      setInfo(projects2);
    }
  }, [language]);

  useEffect(() => {
    setActiveFilter("All");
  }, [language]);

  const filterItem = (idItems) => {
    const updatedItems = info.filter((item) => {
      return item.id === idItems;
    });
    setItems(updatedItems);
  };
  return (
    <div>
      <Head>
        {language ? (
          <title>CarlosBaso/Projects</title>
        ) : (
          <title>CarlosBaso/Proyectos</title>
        )}
      </Head>
      <div
        className={
          theme === false
            ? "w-full bg-[#f9f9f9] pb-20"
            : "w-full bg-[#111111] pb-20"
        }
      >
        <div className="w-[85%] mx-auto flex flex-col space">
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
            className="mx-auto w-[100%] md:pt-10 pt-2 sm:mb-12 mb-6"
          >
            <div
              className={
                theme === false
                  ? "font-semibold sm:text-[49px] text-[32px] text-black justify-center flex text-center"
                  : "font-semibold sm:text-[49px] text-[32px] text-white justify-center flex text-center"
              }
            >
              {language ? (
                <div>Check out some of my latest projects.</div>
              ) : (
                <div>Echa un vistazo a algunos de mis últimos proyectos.</div>
              )}
            </div>

            {/* DIV DE LOS BOTONES----------------------- */}
            <div className="mt-10 self-end w-full justify-center flex mb-4">
              <div className="flex md:flex-row text-black md:gap-10 gap-6 justify-center flex-wrap flex-col">
                <div
                  onClick={() => {
                    setItems(info);
                    setActiveFilter("All");
                    setActualizar(!actualizar);
                  }}
                  className={
                    activeFilter === "All"
                      ? `${filterActive}`
                      : `${filterButtons}`
                  }
                >
                  <FilterButtons label={language ? "All" : "Todos"} />
                </div>
                <div
                  onClick={() => {
                    filterItem(10);
                    setActiveFilter("Web");
                    setActualizar(!actualizar);
                  }}
                  className={
                    activeFilter === "Web"
                      ? `${filterActive}`
                      : `${filterButtons} `
                  }
                >
                  <FilterButtons
                    label={language ? "Web Design" : "Diseño Web"}
                  />
                </div>

                <div
                  onClick={() => {
                    filterItem(20);
                    setActiveFilter("Backend");
                    setActualizar(!actualizar);
                  }}
                  className={
                    activeFilter === "Backend"
                      ? `${filterActive}`
                      : `${filterButtons}`
                  }
                >
                  <FilterButtons label={language ? "Software" : "Software"} />
                </div>

                <div
                  onClick={() => {
                    filterItem(30);
                    setActiveFilter("App");
                    setActualizar(!actualizar);
                  }}
                  className={
                    activeFilter === "App"
                      ? `${filterActive}`
                      : `${filterButtons}`
                  }
                >
                  <FilterButtons label={language ? "Others" : "Otros"} />
                </div>
              </div>
            </div>
          </m.div>

          {/* CARTAS DE LOS PROYECTOS----------------------- */}
          {actualizar ? (
            <div className=" w-full flex flex-wrap gap-x-16 justify-center">
              {items.map((item) => (
                <ProjectCard
                  key={item.key}
                  {...item}
                  theme={theme}
                  language={language}
                />
              ))}
            </div>
          ) : (
            <div className=" w-full flex flex-wrap gap-x-16 justify-center">
              {items.map((item) => (
                <ProjectCard2
                  key={item.key}
                  {...item}
                  theme={theme}
                  language={language}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer theme={theme} language={language} setLanguage={setLanguage} />
    </div>
  );
};

export default Projects;
