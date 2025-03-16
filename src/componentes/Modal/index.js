import { useState } from "react";
import "./Modal.css";

const Modal = ({ children, close }) => {
  const [open, setOpen] = useState(true);

  function onClose() {
    setOpen(false);
  }

  if (!open) return null;

  return (
    <>
      <dialog className="Dialog" open={open}>
        {children}
      </dialog>
      <div className="Overlay" onClick={onClose}></div>
    </>
  );
};

export default Modal;
