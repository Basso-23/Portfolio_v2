import React, { useState } from "react";
import {
  AiFillLinkedin,
  AiFillGoogleCircle,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

const Footer = ({
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
    <div className={theme === false ? "bg-[#f9f9f9] " : "bg-[#111111] "}>
      {/* DIV DEL FOOTER----------------------- */}
      <div
        className={
          theme === false
            ? "w-[86%] text-[#000000] mx-auto space lg:flex pt-[5vh] pb-[2vh]"
            : "w-[86%] text-[#bcbcbc] mx-auto space lg:flex pt-[5vh] pb-[2vh]"
        }
      >
        <div>
          <div className="gap-4 flex lg:hidden pb-4 pt-6">
            <a href="mailto:carlos.baso23@gmail.com" target="_blank">
              <AiFillGoogleCircle className="cursor-pointer sm:text-[30px] text-[40px] click transition-all" />
            </a>
            <a
              href="https://www.linkedin.com/in/carlos-baso-4b90b7270/"
              target="_blank"
            >
              <AiFillLinkedin className="cursor-pointer sm:text-[30px] text-[40px] click transition-all" />
            </a>
            <a href="https://github.com/Basso-23" target="_blank">
              <AiOutlineGithub className="cursor-pointer  sm:text-[30px] text-[40px] click transition-all" />
            </a>
            <a href="https://www.instagram.com/carlos.basso_/" target="_blank">
              <AiOutlineInstagram className="cursor-pointer sm:text-[30px] text-[40px] click transition-all" />
            </a>
          </div>
        </div>

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

        <div className="gap-4 hidden lg:flex">
          <a href="mailto:carlos.baso23@gmail.com" target="_blank">
            <AiFillGoogleCircle className="cursor-pointer text-[30px] click transition-all" />
          </a>
          <a
            href="https://www.linkedin.com/in/carlos-baso-4b90b7270/"
            target="_blank"
          >
            <AiFillLinkedin className="cursor-pointer text-[30px] click transition-all" />
          </a>
          <a href="https://github.com/Basso-23" target="_blank">
            <AiOutlineGithub className="cursor-pointer  text-[30px] click transition-all" />
          </a>
          <a href="https://www.instagram.com/carlos.basso_/" target="_blank">
            <AiOutlineInstagram className="cursor-pointer text-[30px] click transition-all" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
