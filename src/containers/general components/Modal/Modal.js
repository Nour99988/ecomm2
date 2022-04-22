import React from "react";
import style from "./Modal.module.css";

const Modal = ({ content, closeModal }) => {
  return (
    <div>
      <div className={style.backdrop} onClick={() => closeModal(false)}></div>
      <div className={style.overlay}>
        <div className={style.header}>Header</div>
        <div className={style.content}>{content}</div>
        <div className={style.footer}>
          <button onClick={() => closeModal(false)}>ok</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
