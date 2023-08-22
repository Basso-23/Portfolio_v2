import React, { useState, useEffect } from "react";
import Link from "next/link";
import { projects } from "../components/IndexENG";
import { projects2 } from "../components/IndexESP";
import Footer from "@/components/Footer";
import Head from "next/head";
import { motion as m } from "framer-motion";
import ModalScreen from "@/components/Modal";

const ProjectCard = ({
  colorStatus,
  status,
  info,
  modalKey,
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
  modal,
  setModal,
  setItemsModal,
}) => {
  const filterItemModal = (keyItems) => {
    const updatedItems = info.filter((item) => {
      return item.modalKey === keyItems;
    });
    setItemsModal(updatedItems);
  };
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
          ? "sm:w-[500px] w-[100%] bg-[#fff] mt-14 rounded-xl divShadow"
          : "sm:w-[500px] w-[100%] bg-[#070707] mt-14 rounded-xl border-[1px] border-[#212121]"
      }
    >
      {/* DIV DEL LA INFORMACION----------------------- */}
      <div className="sm:p-8 sm:pb-0 p-5 pt-4 pb-0 md:mx-auto w-[100%]">
        <div
          className={`${colorTxt} font-semibold text-[min(4.5vw,20px)] lg:mt-0 flex`}
        >
          <div className="flex rounded-3xl w-full">{name}</div>
        </div>
        <div className="flex">
          <div
            className={
              theme === false
                ? "font-semibold text-[min(6.8vw,38px)] mt-4 mb-[-15px] text-black w-full"
                : "font-semibold text-[min(6.8vw,38px)] mt-4 mb-[-15px] text-white w-full"
            }
          >
            {title}
          </div>
        </div>
        {/* DIV DEL LA IMAGEN----------------------- */}
        <div className="w-[100%]">
          <div
            onClick={() => {
              setModal(!modal);
              filterItemModal(modalKey);
            }}
            className={`flex sm:h-[260px] sm:w-[435px] h-[50vw] w-[82vw] ${image} ${float} m-auto rounded-md sm:my-8 mt-8 mb-4`}
          ></div>{" "}
        </div>
      </div>
    </m.div>
  );
};

const ProjectCard2 = ({
  colorStatus,
  status,
  info,
  modalKey,
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
  modal,
  setModal,
  setItemsModal,
}) => {
  const filterItemModal = (keyItems) => {
    const updatedItems = info.filter((item) => {
      return item.modalKey === keyItems;
    });
    setItemsModal(updatedItems);
  };
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
          ? "sm:w-[500px] w-[100%] bg-[#fff] mt-14 rounded-xl divShadow"
          : "sm:w-[500px] w-[100%] bg-[#070707] mt-14 rounded-xl border-[1px] border-[#212121]"
      }
    >
      {/* DIV DEL LA INFORMACION----------------------- */}
      <div className="sm:p-8 sm:pb-0 p-5 pt-4 pb-0 md:mx-auto w-[100%]">
        <div
          className={`${colorTxt} font-semibold text-[min(4.5vw,20px)] lg:mt-0 flex`}
        >
          <div className="flex rounded-3xl w-full">{name}</div>
        </div>
        <div className="flex">
          <div
            className={
              theme === false
                ? "font-semibold text-[min(6.8vw,38px)] mt-4 mb-[-15px] text-black w-full"
                : "font-semibold text-[min(6.8vw,38px)] mt-4 mb-[-15px] text-white w-full"
            }
          >
            {title}
          </div>
        </div>
        {/* DIV DEL LA IMAGEN----------------------- */}
        <div className="w-[100%] ">
          <div
            onClick={() => {
              setModal(!modal);
              filterItemModal(modalKey);
            }}
            className={`flex sm:h-[260px] sm:w-[435px] h-[50vw] w-[82vw] ${image} ${float} m-auto rounded-md sm:my-8 mt-8 mb-4`}
          ></div>{" "}
        </div>
      </div>
    </m.div>
  );
};

const FilterButtons = ({ label, icon }) => {
  return (
    <>
      <div className="pt-[1px] text-[14.5px]">{label}</div>
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
  itemsModal,
  setItemsModal,
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
  const [modal, setModal] = useState(false);
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

      {modal ? (
        <div className="flex z-50">
          <div className="flex">
            {itemsModal.map((item) => (
              <ModalScreen
                key={item.key}
                {...item}
                theme={theme}
                language={language}
                modal={modal}
                setModal={setModal}
              />
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}

      <div
        className={
          theme === false
            ? "w-full bg-[#f9f9f9] pb-20"
            : "w-full bg-[#111111] pb-20"
        }
      >
        <div className="w-[100%] mx-auto flex flex-col space">
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
                  ? "font-semibold text-[min(8vw,48px)] text-black justify-center flex text-center"
                  : "font-semibold text-[min(8vw,48px)] text-white justify-center flex text-center"
              }
            >
              {language ? (
                <div>Check out some of my latest projects.</div>
              ) : (
                <div>Mira algunos de mis últimos proyectos.</div>
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
            <div className=" w-full flex flex-wrap gap-x-16 justify-center px-4">
              {items.map((item) => (
                <ProjectCard
                  key={item.key}
                  {...item}
                  theme={theme}
                  language={language}
                  modal={modal}
                  setModal={setModal}
                  setItemsModal={setItemsModal}
                  info={info}
                />
              ))}
            </div>
          ) : (
            <div className=" w-full flex flex-wrap gap-x-16 justify-center px-4">
              {items.map((item) => (
                <ProjectCard2
                  key={item.key}
                  {...item}
                  theme={theme}
                  language={language}
                  modal={modal}
                  setModal={setModal}
                  setItemsModal={setItemsModal}
                  info={info}
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
