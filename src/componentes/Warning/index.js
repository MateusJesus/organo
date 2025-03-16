import React, { useState } from "react";
import Botao from "../Botao";
import Modal from "../Modal";
import { IoIosWarning } from "react-icons/io";
import "./Warning.css";

const Warning = () => {
  const [isOpen, setIsOpen] = useState(true);

  const onClose = () => {
    setIsOpen(false); // Fecha o modal
  };

  return (
    isOpen && (
      <Modal close={onClose}>
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-icon">
                <IoIosWarning />
              </span>
            </div>
            <div className="modal-body">
              <p>
                Este site não armazena nenhuma informação inserida por você.
                Sinta-se à vontade para testar as funcionalidades com
                tranquilidade.
              </p>
              <div className="modal-footer">
                <button onClick={onClose} className="botao">
                  Entendi
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    )
  );
};

export default Warning;
