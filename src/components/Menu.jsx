import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { FaUserCircle, FaCode } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IoIosShare } from "react-icons/io";
import { motion as m } from "framer-motion";

const Menu = ({
  setToggle,
  toggle,
  active,
  setActive,
  theme,
  setTheme,
  language,
  setLanguage,
}) => {
  const [selected, setSelected] = useState("");
  const [selectedHover, setSelectedHover] = useState("");

  const [bars1, setBars1] = useState("");
  const [bars2, setBars2] = useState("");
  const [bars3, setBars3] = useState("");
  const [bars1Checked, setBars1Checked] = useState("");
  const [bars2Checked, setBars2Checked] = useState("");
  const [bars3Checked, setBars3Checked] = useState("");

  useEffect(() => {
    if (theme === true) {
      setSelected("selected2");
      setSelectedHover("selectedHover2");
      setBars1("bars1");
      setBars2("bars2");
      setBars3("bars3");
      setBars1Checked("bars1-checked");
      setBars2Checked("bars2-checked");
      setBars3Checked("bars3-checked");
    }
    if (theme === false) {
      setSelected("selected1");
      setSelectedHover("selectedHover1");
      setBars1("bars1W");
      setBars2("bars2W");
      setBars3("bars3W");
      setBars1Checked("bars1W-checked");
      setBars2Checked("bars2W-checked");
      setBars3Checked("bars3W-checked");
    }
  }, [theme]);

  return (
    <div>
      <div
        className={
          "xl:hidden absolute right-[7%] mt-[-2.1vh] z-50 pt-[53px] gap-28 text-[17.5px]"
        }
      >
        <div className="w-full flex justify-end">
          <button
            className={toggle ? "toggle-checked" : "toggle"}
            onClick={() => setToggle(!toggle)}
          >
            <div className={toggle ? `${bars1Checked}` : `${bars1}`}></div>
            <div className={toggle ? `${bars2Checked}` : `${bars2}`}></div>
            <div className={toggle ? `${bars3Checked}` : `${bars3}`}></div>
          </button>
        </div>

        <div className="text-white pt-4">
          {toggle ? (
            <div
              className={
                theme === false
                  ? "menuLight gap-y-[2.5vh] font-medium divShadow"
                  : "menuDark gap-y-[2.5vh] font-medium"
              }
            >
              <m.div
                initial={{ y: "35%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  type: "spring",
                  delay: 0.1,
                }}
              >
                <Link
                  href={"/"}
                  onClick={() => {
                    setActive("home");
                    setToggle(!toggle);
                  }}
                  className={
                    active === "home"
                      ? `${selected} flex transition-all space`
                      : `${selectedHover} flex transition-all space`
                  }
                >
                  <div className="w-5 h-5 my-auto mr-[1.5vh]">
                    <AiFillHome size={"100%"} />
                  </div>
                  {language ? <div>Home</div> : <div>Inicio</div>}
                </Link>
              </m.div>

              <m.div
                initial={{ y: "35%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  type: "spring",
                  delay: 0.15,
                }}
              >
                <Link
                  href={"/About"}
                  onClick={() => {
                    setActive("about");
                    setToggle(!toggle);
                  }}
                  className={
                    active === "about"
                      ? `${selected} flex transition-all space`
                      : `${selectedHover} flex transition-all space`
                  }
                >
                  <div className="w-5 h-5 my-auto mr-[1.5vh]">
                    <FaUserCircle size={"100%"} />
                  </div>
                  {language ? <div>About</div> : <div>Sobre mí</div>}
                </Link>
              </m.div>

              <m.div
                initial={{ y: "35%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  type: "spring",
                  delay: 0.2,
                }}
              >
                <Link
                  href={"/Skills"}
                  onClick={() => {
                    setActive("skills");
                    setToggle(!toggle);
                  }}
                  className={
                    active === "skills"
                      ? `${selected} flex transition-all space`
                      : `${selectedHover} flex transition-all space`
                  }
                >
                  <div className="w-5 h-5 my-auto mr-[1.5vh]">
                    <FaCode size={"100%"} />
                  </div>
                  {language ? <div>Skills</div> : <div>Habilidades</div>}
                </Link>
              </m.div>

              <m.div
                initial={{ y: "35%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  type: "spring",
                  delay: 0.25,
                }}
              >
                <Link
                  href={"/Projects"}
                  onClick={() => {
                    setActive("projects");
                    setToggle(!toggle);
                  }}
                  className={
                    active === "projects"
                      ? `${selected} flex transition-all space`
                      : `${selectedHover} flex transition-all space`
                  }
                >
                  <div className="w-5 h-5 my-auto mr-[1.5vh]">
                    <MdWork size={"100%"} />
                  </div>
                  {language ? <div>Projects</div> : <div>Proyectos</div>}
                </Link>
              </m.div>

              <m.div
                initial={{ y: "35%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  type: "spring",
                  delay: 0.3,
                }}
              >
                <Link
                  href={"/Contact"}
                  onClick={() => {
                    setActive("contact");
                    setToggle(!toggle);
                  }}
                  className={
                    active === "contact"
                      ? `${selected} flex transition-all space`
                      : `${selectedHover} flex transition-all space`
                  }
                >
                  <div className="w-5 h-5 my-auto mr-[1.5vh]">
                    <MdWork size={"100%"} />
                  </div>
                  {language ? (
                    <div className="pr-4">Contact Me</div>
                  ) : (
                    <div className="pr-4">Contáctame</div>
                  )}
                </Link>
              </m.div>

              <m.div
                initial={{ y: "35%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  type: "spring",
                  delay: 0.35,
                }}
                className={
                  theme === false
                    ? "flex w-full justify-center border-t-2 gap-4"
                    : "flex w-full justify-center border-t-2 gap-4 border-[#707070]"
                }
              >
                <div
                  onClick={() => {
                    setLanguage(true);
                    setToggle(!toggle);
                  }}
                  className=" w-[35px] h-[23px] click transition-all cursor-pointer eng rounded-sm mt-4"
                ></div>
                <div
                  onClick={() => {
                    setLanguage(false);
                    setToggle(!toggle);
                  }}
                  className="ml-3 w-[36px] h-[24px] click transition-all cursor-pointer esp  rounded-sm mt-4"
                ></div>
              </m.div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
