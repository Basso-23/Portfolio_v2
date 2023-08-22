import React, { useState, useEffect, useRef } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion as m } from "framer-motion";
import { Modal } from "react-responsive-modal";

{
  /* ESTRUCTURA DEL CONTENEDOR DE LOS LENGUAJES----------------------- */
}
const Languages = ({ theme, language }) => {
  return (
    <div className="flex cursor-default pt-2">
      <div
        className={
          theme === false
            ? "text-white bg-black py-[6px] px-6 rounded-full inter text-[min(3.5vw,14px)] font-semibold"
            : "text-black bg-white py-[6px] px-6 rounded-full inter text-[min(3.5vw,14px)] font-semibold"
        }
      >
        {language}
      </div>
    </div>
  );
};

const ModalScreen = ({
  creation,
  status,
  colorStatus,
  title,
  description,
  theme,
  language,
  image,
  linkP,
  linkG,
  modal,
  setModal,
}) => {
  const closeIcon = (
    <IoIosClose
      className={
        theme === false
          ? "text-[50px] text-[#b2b2b2] cursor-pointer hover:scale-110 transition-all hover:text-[#dbdbdb]"
          : "text-[50px] text-[#bbbbbb] cursor-pointer hover:scale-110 transition-all hover:text-[#363636]"
      }
    />
  );

  const [open, setOpen] = useState(true);

  const onOpenModal = () => setOpen(true);

  const onCloseModal = () => {
    setOpen(false);
    setModal(!modal);
  };

  return (
    <div>
      <div>
        <Modal open={open} onClose={onCloseModal} center closeIcon={closeIcon}>
          <div
            className={
              theme === false
                ? "bg-white w-[100%] m-auto rounded-xl md:px-10 px-4 md:py-6 py-4 text-black"
                : "bg-[#111111] w-[100%] m-auto rounded-xl md:px-10 px-4 md:py-6 py-4 text-white"
            }
          >
            {/* HEADER--------------------------------------------------------------- */}

            {/* DIV DEL CONTENIDO--------------------------------------------------------------- */}
            <div className="flex xl:flex-row flex-col w-full h-full xl:px-4 xl:pb-6 pb-10">
              {/* DIV DE LA IZQUIERDA--------------------------------------------------------------- */}
              <div className="xl:w-[45%] w-full h-full mt-4">
                <div
                  className={
                    theme === false
                      ? "font-semibold text-[min(8vw,38px)] uppercase text-black mb-4 inter"
                      : "font-semibold text-[min(8vw,38px)] uppercase text-white mb-4 inter"
                  }
                >
                  <div className="flex xl:mt-0 mt-6">{title}</div>
                </div>
                {/* DIV DE LA IMAGEN--------------------------------------------------------------- */}
                <div className="pt-2">
                  <a
                    href={linkP}
                    target="_blank"
                    className={`mx-auto flex sm:h-[260px] sm:w-[450px] h-[55vw] w-[87vw] ${image} rounded-md sm:mb-6 mb-8`}
                  ></a>{" "}
                </div>
                <div className="flex justify-between">
                  <div className="flex">
                    <AiOutlineGithub size={"40px"} />
                    <div className="my-auto ml-2 italic w-full flex text-[min(4vw,16px)]">
                      {language ? (
                        <a
                          href={linkG}
                          target="_blank"
                          className="cursor-pointer my-auto"
                        >
                          View Source Code
                        </a>
                      ) : (
                        <a
                          href={linkG}
                          target="_blank"
                          className="cursor-pointer my-auto"
                        >
                          Ver Código Fuente
                        </a>
                      )}
                    </div>
                  </div>
                  {/* STATUS----------------------- */}
                  <div className="text-[16px] inter flex xl:hidden mr-[14px]">
                    <div className="w-full flex justify-end">
                      <div
                        className={`sm:w-[14px] sm:h-[14px] w-3 h-3 rounded-full ${colorStatus} flex my-auto mr-2`}
                      ></div>
                      <div
                        className={
                          theme === false
                            ? " text-black flex "
                            : " text-white flex "
                        }
                      >
                        <div className="my-auto font-light text-[min(4vw,16px)] space">
                          {status}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* DIV DE LA DERECHA--------------------------------------------------------------- */}
              <div className="xl:w-[60%] w-full h-full xl:ml-[80px] xl:mr-3 inter flex flex-col xl:mt-[98px] mt-9 text-[min(4vw,16px)]">
                {language ? (
                  <div className="font-bold">Description</div>
                ) : (
                  <div className="font-bold">Descripción</div>
                )}
                <div className="mt-2 font-light">{description}</div>

                <div className="flex mt-6 flex-wrap">
                  {/* STATUS----------------------- */}
                  <div className="xl:flex xl:flex-col hidden">
                    {language ? (
                      <div className="font-bold">Status</div>
                    ) : (
                      <div className="font-bold">Estado</div>
                    )}
                    <div className="w-full flex justify-end pt-2">
                      <div
                        className={`sm:w-[14px] sm:h-[14px] w-3 h-3 rounded-full ${colorStatus} flex my-auto mr-2`}
                      ></div>
                      <div
                        className={
                          theme === false
                            ? " text-black flex "
                            : " text-white flex "
                        }
                      >
                        <div className="my-auto font-light">{status}</div>
                      </div>
                    </div>
                  </div>

                  <div className="xl:ml-12 xl:mt-0 mt-2">
                    {language ? (
                      <div className="font-bold">Link</div>
                    ) : (
                      <div className="font-bold">Enlace</div>
                    )}
                    <div className=" font-medium flex">
                      <a
                        href={linkP}
                        target="_blank"
                        className="py-2 hover:underline cursor-pointer flex"
                      >
                        {linkP}
                        <FaExternalLinkAlt className="text-[14px] self-center ml-2" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 font-bold">
                  {language ? <div>Created with</div> : <div>Creado con</div>}
                  <div className="flex flex-wrap space-x-2">
                    {creation.map((item) => (
                      <Languages key={item.key} {...item} theme={theme} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ModalScreen;
