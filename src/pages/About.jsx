import React from "react";
import Head from "next/head";
import Link from "next/link";
import { MdOutlineTurnSlightLeft } from "react-icons/md";
import Footer from "@/components/Footer";
import { motion as m } from "framer-motion";
import alien from "../assets/alien.png"

{
  /* ESTRUCTURA DEL CONTENEDOR DE LOS LENGUAJES----------------------- */
}
const Languages = ({ name, theme }) => {
  return (
    <div className="flex ">
      <div
        className={
          theme === false
            ? "bg-[#000000] text-[#ffffff] mt-0 py-2 px-8 rounded-full font-semibold font-sans text-[14px] inter"
            : "bg-[#ffffff] text-[#111111] mt-0 py-2 px-8 rounded-full font-semibold font-sans text-[14px] inter"
        }
      >
        {name}
      </div>
    </div>
  );
};

{
  /* ESTRUCTURA DEL CONTENEDOR DE LAS EXPERIENCIA----------------------- */
}
const CardExperience = ({
  company,
  title,
  description,
  date,
  language,
  language1,
  language2,
  language3,
  language4,
  theme,
  link,
}) => {
  return (
    <div className="lg:flex lg:flex-row flex-col lg:ml-[50px] md:ml-[15px] lg:flex-wrap mt-10">
      <div className="font-bold ml-1 mb-4 text-[18px]">{date}</div>

      <div className="flex">
        <div className="bg-[#bd171700] ml-0">⚪</div>
        <div
          className={
            theme === false
              ? "bg-[#bd171700] ml-10 text-black font-semibold text-[20px] mt-[-4px] mr-[15px]"
              : "bg-[#bd171700] ml-10 text-white font-semibold text-[20px] mt-[-4px] mr-[15px]"
          }
        >
          <div className="flex flex-wrap">
            <div className="ml-[-20px] flex">
              {title} @ {company}
            </div>
          </div>

          <div className="ml-[-51.5px] text-[#797979] font-normal">
            <div className=" border-l-2 border-[#565656] sm:text-[16px] text-[15px]">
              <div className="ml-[30px] pt-2 pb-12">
                <div className="text-[17px]">{description}</div>
                <div className="flex flex-wrap gap-x-6 gap-y-4 mt-6">
                  <Languages name={language1} theme={theme} />
                  <Languages name={language2} theme={theme} />
                  <Languages name={language3} theme={theme} />
                </div>
              </div>
              <div className="ml-[30px] flex mt-[-15px] text-[17px]">
                {language ? <div>Company:</div> : <div>Compañia:</div>}
                <a
                  href={link}
                  target="_blank"
                  className={
                    theme === false
                      ? "pl-2 cursor-pointer text-[#ff007b] underline"
                      : "pl-2 cursor-pointer text-[#06ff93] underline"
                  }
                >
                  {link}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const About = ({
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
          <title>CarlosBaso/About</title>
        ) : (
          <title>CarlosBaso/Sobre mí</title>
        )}
      </Head>
      <div
        className={
          theme === false
            ? "w-full bg-[#f9f9f9] pb-1"
            : "w-full bg-[#111111] pb-1"
        }
      >
        <div className="w-[86%] flex mx-auto pt-0 flex-col space">
          {/* DIV DE LA MITAD DE ARRIBA----------------------- */}
          <m.div
            initial={{ y: "35%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              type: "spring",
              delay: 0,
            }}
            className="grid lg:grid-cols-2 grid-cols-1 text-[#797979]"
          >
            {/* DIV DE LA IZQUIERDA ARRIBA----------------------- */}
            <div className="w-[100%] flex py-10 pr-0">
              <div
                className={
                  theme === false
                    ? "m-auto faceBorder1 sm:h-[50vh] sm:w-[50vh] h-[43vh] w-[50vh] flex"
                    : "m-auto faceBorder2 sm:h-[50vh] sm:w-[50vh] h-[43vh] w-[50vh] flex"
                }
              >
                <div className="flex h-[30vh] w-[30vh] face containerFloat1 m-auto"></div>{" "}
              </div>
            </div>

            {/* DIV DE LA DERECHA ARRIBA----------------------- */}
            <div className="w-[100%] flex">
              <div className="md:px-4 md:my-auto my-auto lg:ml-12 lg:w-[550px] w-[100%]">
                <div
                  className={
                    theme === false
                      ? "font-semibold sm:text-[48px] text-[32px] text-black lg:pt-0 pt-6"
                      : "font-semibold sm:text-[48px] text-[32px] text-white lg:pt-0 pt-6"
                  }
                >
                  {language ? (
                    <div>More about me</div>
                  ) : (
                    <div>Más sobre mí</div>
                  )}
                </div>

                <div className="sm:text-[19px] text-[18px]">
                  <div className="pt-2">
                    {language ? (
                      <div>
                        👋Hello! I&apos;m Carlos Baso, a multidisciplinary 🐻
                        software engineer based in Panama City 🚕. I&apos;m very
                        passionate about the work 💖 that i do.
                      </div>
                    ) : (
                      <div>
                        ¡Hola! Soy Carlos Baso, un 🐻 ingeniero de software
                        multidisciplinario viviendo en la ciudad de Panamá 🚕.
                        Me apasiona mucho el trabajo 💖 que hago.
                      </div>
                    )}
                  </div>
                  <div className="pt-4 sm:text-[17px] text-[16px]">
                    {language ? (
                      <div>
                        I feel more than comfortable learning from my teammates
                        and using their experience to improve my skills.
                        Adaptability is my strength to face any situation.
                      </div>
                    ) : (
                      <div>
                        Me siento mas que cómodo al aprender de mis compañeros
                        de equipo y aprovechar su experiencia para mejorar mis
                        habilidades. La adaptabilidad es mi fortaleza para
                        enfrentar cualquier situación.
                      </div>
                    )}
                  </div>
                </div>

                {/* DIV DEL BOTON See All Projects----------------------- */}
                <div className="w-full flex pt-10 text-black">
                  <Link
                    href={"/Skills"}
                    onClick={() => {
                      setActive("skills");
                      toggle === false ? "" : setToggle(!toggle);
                    }}
                    className={
                      theme === false
                        ? "font-bold text-[14.5px] pl-7 pr-5 py-[14px] bg-[#0055ff] text-white rounded-md flex buttonShadow transitionButton"
                        : "font-bold text-[14.5px] pl-7 pr-5 py-[14px] bg-[#ff651e] text-white rounded-md flex buttonShadow transitionButton"
                    }
                  >
                    {language ? (
                      <div className="pt-[1px]">Check My Skills</div>
                    ) : (
                      <div className="pt-[1px]">Mis Habilidades</div>
                    )}
                    <div className="rotateIcon ml-1 mt-[0.5px]">
                      <MdOutlineTurnSlightLeft size={"25px"} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </m.div>

          {/* DIV DE LA MITAD DE ABAJO----------------------- */}
          <m.div
            initial={{ y: "35%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              type: "spring",
              delay: 0.2,
            }}
            className="grid lg:grid-cols-2 grid-cols-1 pt-20 pb-16 text-[#797979]"
          >
            {/* DIV DE ABAJO A LA IZQUIERDA----------------------- */}
            <div className="w-[100%]">
              <div className="w-[100%] flex">
                <div className="md:px-4 md:my-auto m-auto lg:w-[500px] w-[100%]">
                  <div
                    className={
                      theme === false
                        ? "font-semibold sm:text-[48px] text-[32px] text-black"
                        : "font-semibold sm:text-[48px] text-[32px] text-white"
                    }
                  >
                    {language ? (
                      <div>My experience</div>
                    ) : (
                      <div>Mi experiencia</div>
                    )}
                  </div>

                  <div className="sm:text-[19px] text-[18px]">
                    <div className="pt-2">
                      {language ? (
                        <div>
                          I like the pleasure to work with 🏢 companies across a
                          variety of industries. I&apos;m always interested in new ✨
                          and exciting adventures 🧨.
                        </div>
                      ) : (
                        <div>
                          Me gusta tener el placer de trabajar con 🏢 empresas
                          dentro de distintos sectores. Siempre me interesan las
                          nuevas ✨ y emocionantes aventuras 🧨.
                        </div>
                      )}
                    </div>
                  </div>

                  {/* DIV DEL BOTON See All Projects----------------------- */}
                  <div className="w-full flex pt-10 text-black ">
                    <a
                      href="https://drive.google.com/file/d/1xobka4RYzF2uOQ88NAwLD58Jg8_CVkHb/view?usp=sharing"
                      target="_blank"
                      className={
                        theme === false
                          ? "font-bold text-[14.5px] pl-7 pr-5 py-[14px] bg-[#0055ff]  text-white rounded-md flex buttonShadow transitionButton cursor-pointer"
                          : "font-bold text-[14.5px] pl-7 pr-5 py-[14px] bg-[#ff651e] text-white rounded-md flex buttonShadow transitionButton cursor-pointer"
                      }
                    >
                      {language ? (
                        <div className="pt-[1px]">Download Resume</div>
                      ) : (
                        <div className="pt-[1px]">Descargar Currículum</div>
                      )}
                      <div className="rotateIcon ml-1 mt-[0.5px]">
                        <MdOutlineTurnSlightLeft size={"25px"} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* DIV DE LA DERECHA ABAJO----------------------- */}
            <div className="w-[100%] bg-[#98147b00] space lg:mt-[-40px] mt-[60px]">
              <CardExperience
                theme={theme}
                language={language}
                date={language ? "JUL 2022 - DEC 2022" : "JUL 2022 - DEC 2022"}
                title="Front End Developer"
                company="PaYa"
                link="https://pidepaya.com/"
                description={
                  language
                    ? "Developing the functionality and the front-end for a delivery app using JavaScript, Firebase for authentication, and frameworks such as React Native."
                    : "Desarrollando las funcionalidades y el front-end para un delivery app usando JavaScript, Firebase para autenticación y frameworks como React Native."
                }
                language1="React Native"
                language2="Javascript"
                language3="Firebase"
              />
            </div>
          </m.div>
        </div>
      </div>

      <Footer theme={theme} language={language} setLanguage={setLanguage} />
    </div>
  );
};

export default About;
