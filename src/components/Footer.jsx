import React, { useState } from "react";
const Footer = ({
  theme,
  language,
  setLanguage,
}) => {
  return (
    <div className={theme === false ? "bg-[#f9f9f9] " : "bg-[#111111] "}>
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

export default Footer;
