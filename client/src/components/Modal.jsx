// components/Modal.js
import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-white p-4 rounded shadow-lg relative">
        <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>
          &times;
        </button>
        <img src={imageSrc} alt="Large view" className="max-w-full max-h-screen" />
      </div>
    </div>,
    document.body
  );
};

export default Modal;
