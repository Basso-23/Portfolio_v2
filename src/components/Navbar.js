import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MdExpandMore } from "react-icons/md";
import { TbSunFilled, TbMoonFilled } from "react-icons/tb";

const Navbar = ({
  setToggle,
  toggle,
  active,
  setActive,
  theme,
  setTheme,
  language,
  setLanguage,
}) => {
  const [toggleTheme, setToggleTheme] = useState(true);

  const [underlines, setUnderlines] = useState("");
  const [activeColor, setActiveColor] = useState("");

  useEffect(() => {
    if (theme === false) {
      setActiveColor("activeColor1");
      setUnderlines("underlines1");
    }
    if (theme === true) {
      setActiveColor("activeColor2");
      setUnderlines("underlines2");
    }
  }, [theme]);

  const changeBackground = () => {
    if (theme === false) {
      const style = document.documentElement.style;
      style.setProperty("--background", "#111111");
      style.setProperty("--btnColor", "#ff5100");
      style.setProperty("--modalBackground", "#111111");
    }
    if (theme === true) {
      const style = document.documentElement.style;
      style.setProperty("--background", "#f9f9f9");
      style.setProperty("--btnColor", "#0055ff");
      style.setProperty("--modalBackground", "#ffffff");
    }
  };

  return (
    <div
      className={
        theme === false
          ? "bg-[#f9f9f9] flex xl:pb-[48px] pb-[80px]"
          : "bg-[#111111] flex xl:pb-[48px] pb-[80px]"
      }
    >
      <div
        className={
          theme === false
            ? "w-[86%] mx-auto flex text-black space pt-7 font-semibold"
            : "w-[86%] mx-auto flex text-white space pt-7 font-semibold"
        }
      >
        {/* DIV DEL TITULO----------------------- */}
        <div className="my-auto text-[24px] font-bold absolute flex">
          <Link
            href={"/"}
            onClick={() => {
              setActive("home");
            }}
            className="flex"
          >
            {language ? (
              <div className=" tracking-wide flex">
                <div> Port </div>
                <div
                  className={
                    theme === false ? "text-[#0055ff]" : "text-[#ff5100]"
                  }
                >
                  folio
                </div>
              </div>
            ) : (
              <div className=" tracking-wide flex">
                <div> Porta </div>
                <div
                  className={
                    theme === false ? "text-[#0055ff]" : "text-[#ff5100]"
                  }
                >
                  folio
                </div>
              </div>
            )}
          </Link>
          <div
            onClick={() => {
              setTheme(!theme);
              setToggleTheme(!toggleTheme);
              changeBackground();
            }}
            className={
              theme === false
                ? "cursor-pointer hover:scale-110 transition-all ml-4 mt-[-5px] toggleSwitch1 w-[45px] h-[45px] z-20"
                : "cursor-pointer hover:scale-110 transition-all ml-4 mt-[-5px] toggleSwitch2 w-[45px] h-[45px] z-20"
            }
          >
            <div
              className={
                toggleTheme ? " mute-speaker-checked" : " mute-speaker"
              }
            >
              <TbMoonFilled size={21} />
            </div>

            <div className={toggleTheme ? "speaker-checked" : "speaker"}>
              <TbSunFilled size={20} />
            </div>
          </div>
        </div>

        {/* DIV DE LAS OPCIONES----------------------- */}
        <div className=" justify-center text-center gap-20 text-[16px] xl:flex hidden w-full">
          <Link
            href={"/"}
            onClick={() => {
              setActive("home");
            }}
            className={
              active === "home"
                ? `flex border-b-[2.3px] ${activeColor} transition-all`
                : `flex border-b-[2px] border-transparent ${underlines}`
            }
          >
            {language ? <div>Home</div> : <div>Inicio</div>}
            <div className="w-5 h-5 my-auto">
              <MdExpandMore size={"100%"} />
            </div>
          </Link>

          <Link
            href={"/About"}
            onClick={() => {
              setActive("about");
            }}
            className={
              active === "about"
                ? `flex border-b-[2.3px] ${activeColor} transition-all`
                : `flex border-b-[2px] border-transparent ${underlines}`
            }
          >
            {language ? <div>About</div> : <div>Sobre mí</div>}
            <div className="w-5 h-5 my-auto">
              <MdExpandMore size={"100%"} />
            </div>
          </Link>

          <Link
            href={"/Skills"}
            onClick={() => {
              setActive("skills");
            }}
            className={
              active === "skills"
                ? `flex border-b-[2.3px] ${activeColor} transition-all`
                : `flex border-b-[2px] border-transparent ${underlines}`
            }
          >
            {language ? <div>Skills</div> : <div>Habilidades</div>}
            <div className="w-5 h-5 my-auto ">
              <MdExpandMore size={"100%"} />
            </div>
          </Link>

          <Link
            href={"/Projects"}
            onClick={() => {
              setActive("projects");
            }}
            className={
              active === "projects"
                ? `flex border-b-[2.3px] ${activeColor} transition-all`
                : `flex border-b-[2px] border-transparent ${underlines}`
            }
          >
            {language ? <div>Projects</div> : <div>Proyectos</div>}
            <div className="w-5 h-5 my-auto">
              <MdExpandMore size={"100%"} />
            </div>
          </Link>
        </div>

        {/* DIV DEL BOTON DE CONTACT----------------------- */}
        <Link
          href={"/Contact"}
          onClick={() => {
            setActive("contact");
          }}
          className={
            theme === false
              ? "xl:flex text-[14.5px] buttonShadow hidden absolute right-[7%] mt-[-5px] py-3 px-6 text-black bg-white rounded-md cursor-pointer transition-all font-bold hover:bg-[#0055ff] hover:text-white"
              : "xl:flex text-[14.5px] buttonShadow hidden absolute right-[7%] mt-[-5px] py-3 px-6 text-black bg-white rounded-md cursor-pointer transition-all font-bold hover:bg-[#ff5100] hover:text-white"
          }
        >
          {language ? <div>Contact Me</div> : <div>Contáctame</div>}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
