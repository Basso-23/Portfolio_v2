import React, { useState, useEffect } from "react";
import { motion as m } from "framer-motion";
import { AiOutlineGithub } from "react-icons/ai";
import { GrMail, GrLinkedin } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";

import Link from "next/link";

const Contact = ({ language }) => {
  const [resume, setResume] = useState(
    "https://drive.google.com/file/d/1O2gmqslUaGKqcvuj-d_cBgdJP1XEpCw4/view?usp=drive_link"
  );

  useEffect(() => {
    {
      /* INGLES ---------------------------------*/
    }
    if (language === true) {
      setResume(
        "https://drive.google.com/file/d/1O2gmqslUaGKqcvuj-d_cBgdJP1XEpCw4/view?usp=drive_link"
      );
    }
    {
      /* ESPAÑOL ---------------------------------*/
    }
    if (language === false) {
      setResume(
        "https://drive.google.com/file/d/1xK_8f4Jdlcjvw8a87wCpgfKEqfCBmR3O/view?usp=drive_link"
      );
    }
  }, [language]);
  return (
    <div className="min-h-screen w-full radial2 flex flex-col pb-40 xl:mt-[-80px] relative">
      {/* TRANSPARENT TITLE-------------------------------------------------------------------------------------------------------- */}
      <div className=" font-bold absolute fixedCenterXnY text-[min(20vw,400px)] z-10 text-[#95959507] xl:flex hidden mt-[-100px]">
        CONTACT
      </div>

      {/* MAIN CONTAINER-------------------------------------------------------------------------------------------------------- */}
      <div className=" m-auto flex flex-col text-center px-3 py-20">
        <div className=" flex flex-col sm:pt-14 ">
          {/* TITLE CONTAINER-------------------------------------------------------------------------------------------------------- */}
          <div className="font-extrabold text-[min(13vw,90px)] flex flex-col relative pt-10 xl:px-28 sm:px-10 px-2 z-40">
            <m.div
              initial={{ scale: 0.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",

                delay: 0,
              }}
              className=" w-10 h-10 absolute top-0 left-0 border border-r-0 border-b-0"
            ></m.div>
            <m.div
              initial={{ scale: 0.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",

                delay: 0,
              }}
              className=" w-10 h-10 absolute top-0 right-0 border border-l-0 border-b-0"
            ></m.div>

            <m.div
              initial={{ y: "25px", opacity: 0 }}
              animate={{ y: "0px", opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.3,
              }}
              className=" flex flex-col"
            >
              <div className=" flex flex-wrap mx-auto justify-center">
                {" "}
                {language ? <div>You have a </div> : <div>¿Tienes un</div>}{" "}
                {language ? (
                  <div className="neon mx-5">project</div>
                ) : (
                  <div className=" neon mx-5">proyecto</div>
                )}
                {language ? <div>in mind? </div> : <div>en mente?</div>}{" "}
              </div>
            </m.div>

            {/* SUBTITLE CONTAINER-------------------------------------------------------------------------------------------------------- */}
            <m.div
              initial={{ y: "25px", opacity: 0 }}
              animate={{ y: "0px", opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.4,
              }}
              className="text-[min(4vw,18px)] text-[#b8b8b8] mt-6 px-4 font-normal"
            >
              {language ? (
                <div>Reach out to me and I will get back to you shortly.</div>
              ) : (
                <div>Ponte en contacto conmigo y te responderé en breve.</div>
              )}
            </m.div>

            {/* SOCIALS CONTAINER-------------------------------------------------------------------------------------------------------- */}
            <m.div
              initial={{ y: "25px", opacity: 0 }}
              animate={{ y: "0px", opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.5,
              }}
              className=" flex gap-14 justify-center z-50 mt-12 text-[#7bd900]"
            >
              {/* GMAIL CONTAINER-------------------------------------------------------------------------------------------------------- */}

              <a
                href="mailto:carlos.baso23@gmail.com"
                target="_blank"
                className="my-auto h-[min(9vw,40px)] w-[min(9vw,40px)] flex justify-center items-center hover:scale-110 transition-transform hover:text-white "
              >
                <GrMail className=" w-full h-full button6" />
              </a>

              {/* Linkedin CONTAINER-------------------------------------------------------------------------------------------------------- */}

              <a
                href="https://www.linkedin.com/in/carlos-baso-4b90b7270/"
                target="_blank"
                className="my-auto h-[min(9vw,30px)] w-[min(9vw,30px)] flex justify-center items-center hover:scale-110 transition-transform hover:text-white"
              >
                <GrLinkedin className=" w-full h-full button6" />
              </a>

              {/* Github CONTAINER-------------------------------------------------------------------------------------------------------- */}

              <a
                href="https://github.com/Basso-23"
                target="_blank"
                className="my-auto h-[min(9vw,40px)] w-[min(9vw,40px)] flex justify-center items-center hover:scale-110 transition-transform hover:text-white"
              >
                <AiOutlineGithub className=" w-full h-full button6" />
              </a>
            </m.div>
            {/* RESUME BUTTON-------------------------------------------------------------------------------------------------------- */}
            <m.div
              initial={{ y: "25px", opacity: 0 }}
              animate={{ y: "0px", opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.6,
              }}
              className="flex lg:mx-0 mx-auto z-50 font-normal"
            >
              <a
                href={resume}
                target="_blank"
                className="flex py-3 px-8 text-[min(3.8vw,15.5px)] mt-20 button mx-auto"
              >
                {language ? (
                  <div>Download Resume</div>
                ) : (
                  <div>Descargar Currículum</div>
                )}
              </a>
            </m.div>
          </div>
        </div>
      </div>

      {/* FOOTER CONTAINER-------------------------------------------------------------------------------------------------------- */}
      <div className="absolute bottom-0 fixedCenterX w-full transition-all border-t-[1px] flex border-[#ffffff16] justify-center py-5 footerBg">
        <div className=" text-[min(3vw,13.5px)] my-auto text-center">
          {language ? (
            <div>©2023 CarlosBaso. All rights reserved.</div>
          ) : (
            <div>©2023 CarlosBaso. Todos los derechos reservados.</div>
          )}
        </div>
        {/* BOTTOM BORDER HIGHLIGHT-------------------------------------------------------------------------------------------------------- */}
        <div className="xl:w-[450px] w-full fixedCenterX transition-all top-0 absolute flex">
          <m.div
            initial={{ width: "0%", opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{
              duration: 0.65,
              ease: "easeOut",
              delay: 0,
            }}
            className="light fixedCenterX absolute top-0 animationBorder mt-[-0.5px]"
          ></m.div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
