import { createContext, useState } from "react";

export const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({ title: "", content: "" });
  const handleOpenModal = ({ title, content }) => {
    setModalInfo({ title, content });
    setOpen(true);
  };
  const handleCloseModal = () => {
    setModalInfo({ title: "", content: "" });
    setOpen(false);
  };
  return (
    <ModalContext.Provider value={{ open, handleOpenModal, handleCloseModal }}>
      {children}
      {open && (
        <ModalWrapper
          handleCloseModal={handleCloseModal}
          title={modalInfo.title}
        >
          {modalInfo.content}
        </ModalWrapper>
      )}
    </ModalContext.Provider>
  );
};

const ModalWrapper = ({ handleCloseModal, title, children }) => {
  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <a
              href="#"
              className="pop-new-card__close"
              onClick={handleCloseModal}
            >
              ✖
            </a>
            <h3 className="pop-new-card__ttl">{title}</h3>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
