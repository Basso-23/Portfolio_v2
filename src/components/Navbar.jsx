import React, { useState, useEffect, useRef } from "react";
import { BsChevronDown } from "react-icons/bs";
import { TbLanguage } from "react-icons/tb";
import { Pivot as Hamburger } from "hamburger-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion as m } from "framer-motion";

const Navbar = ({ setLanguage, language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
      {/* NAVBAR-------------------------------------------------------------------------------------------------------- */}
      <div className=" w-full h-20 flex relative z-50">
        {/* LANGUAGES CONTAINER-------------------------------------------------------------------------------------------------------- */}
        <div className=" absolute top-0 left-0 flex gap-2 fixedCenterY ml-4 text-[min(4vw,15.5px)]">
          <TbLanguage className=" my-auto text-[min(5.5vw,25px)]" />
          <div
            onClick={() => {
              setLanguage(true);
            }}
            className={language ? "active" : "inactive"}
          >
            ENG
          </div>
          <div>/</div>
          <div
            onClick={() => {
              setLanguage(false);
            }}
            className={language ? "inactive" : "active"}
          >
            ESP
          </div>
        </div>

        {/* MENU ICON-------------------------------------------------------------------------------------------------------- */}
        <div className=" absolute top-0 right-0 fixedCenterY mr-4 xl:hidden flex">
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={25} />
        </div>

        <div className=" xl:flex w-full justify-center m-auto gap-24 hidden text-[min(4vw,15.5px)]">
          <Link
            href={"/"}
            className={
              pathname === "/"
                ? " flex active cursor-pointer"
                : " flex inactive cursor-pointer "
            }
          >
            {language ? <div>Home</div> : <div>Inicio</div>}{" "}
          </Link>
          <Link
            href={"/about"}
            className={
              pathname === "/about"
                ? " flex active cursor-pointer"
                : " flex inactive cursor-pointer"
            }
          >
            {language ? <div>About</div> : <div>Sobre mí</div>}{" "}
          </Link>
          <Link
            href={"/projects"}
            className={
              pathname === "/projects"
                ? " flex active cursor-pointer"
                : " flex inactive cursor-pointer"
            }
          >
            {language ? <div>Projects</div> : <div>Proyectos</div>}{" "}
          </Link>
          <Link
            href={"/contact"}
            className={
              pathname === "/contact"
                ? " flex active cursor-pointer"
                : " flex inactive cursor-pointer"
            }
          >
            {language ? <div>Contact</div> : <div>Contacto</div>}{" "}
          </Link>
        </div>
        {/* BOTTOM BORDER HIGHLIGHT-------------------------------------------------------------------------------------------------------- */}
        <div className="xl:w-[450px] w-full fixedCenterX mb-[-1px] transition-all bottom-0 absolute flex">
          <m.div
            initial={{ width: "0%", opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{
              duration: 0.65,
              ease: "easeOut",

              delay: 0,
            }}
            className="light fixedCenterX absolute bottom-0 "
          ></m.div>
        </div>

        {/* MENU CONTAINER-------------------------------------------------------------------------------------------------------- */}
        {isOpen ? (
          <div className=" w-52 absolute bg-[#07080b] right-0 mr-6 mt-20 z-50 rounded-sm xl:hidden flex">
            <div className=" menuBg w-full h-full flex flex-col justify-center gap-1 pb-8 pt-4 px-2 text-[min(4vw,15.5px)] ">
              <Link
                href={"/"}
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className={
                  pathname === "/"
                    ? " flex active cursor-pointer borderOption w-full justify-center py-4"
                    : " flex inactive cursor-pointer borderOption w-full justify-center py-4"
                }
              >
                <m.div
                  initial={{ y: "-10px", opacity: 0 }}
                  animate={{ y: "0px", opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                    delay: 0,
                  }}
                  className=" flex"
                >
                  <div className=" ml-2">
                    {language ? <div>Home</div> : <div>Incio</div>}{" "}
                  </div>{" "}
                </m.div>
              </Link>
              <Link
                href={"/about"}
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className={
                  pathname === "/about"
                    ? " flex active cursor-pointer borderOption w-full justify-center py-4"
                    : " flex inactive cursor-pointer borderOption w-full justify-center py-4"
                }
              >
                <m.div
                  initial={{ y: "-10px", opacity: 0 }}
                  animate={{ y: "0px", opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                    delay: 0.1,
                  }}
                  className=" flex"
                >
                  <div className=" ml-2">
                    {language ? <div>About</div> : <div>Sobre mí</div>}{" "}
                  </div>{" "}
                </m.div>
              </Link>
              <Link
                href={"/projects"}
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className={
                  pathname === "/projects"
                    ? " flex active cursor-pointer borderOption w-full justify-center py-4"
                    : " flex inactive cursor-pointer borderOption w-full justify-center py-4"
                }
              >
                <m.div
                  initial={{ y: "-10px", opacity: 0 }}
                  animate={{ y: "0px", opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                    delay: 0.2,
                  }}
                  className=" flex"
                >
                  <div className=" ml-2">
                    {language ? <div>Projects</div> : <div>Proyectos</div>}{" "}
                  </div>{" "}
                </m.div>
              </Link>
              <Link
                href={"/contact"}
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className={
                  pathname === "/contact"
                    ? " flex active cursor-pointer borderOption w-full justify-center py-4"
                    : " flex inactive cursor-pointer borderOption w-full justify-center py-4"
                }
              >
                <m.div
                  initial={{ y: "-10px", opacity: 0 }}
                  animate={{ y: "0px", opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                    delay: 0.25,
                  }}
                  className=" flex"
                >
                  <div className=" ml-2">
                    {language ? <div>Contact</div> : <div>Contacto</div>}{" "}
                  </div>{" "}
                </m.div>
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};
export default Navbar;
