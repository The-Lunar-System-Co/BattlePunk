import React from "react";

interface IModalProps {
  isOpen: boolean;
  openModalHandler: () => {};
  closeModalHandler: () => {};
}

const Modal: React.FC<IModalProps> = ({
  isOpen,
  openModalHandler,
  closeModalHandler,
  children
}) => {
  return (
    <div className="component-modal">
      <div className="component-modal__modal">{children}</div>
    </div>
  );
};

export default Modal;
