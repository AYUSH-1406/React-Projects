import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import {createPortal} from "react-dom"


const Modal = ({ onClose, isOpen, children }) => {
  return (
    <>
      {isOpen && (
     <div className="h-screen grid place-items-center backdrop-blur w-screen top-0 absolute z-40">
     <div className="min-h-[200px] min-w-[80%] bg-white p-4 z-50 relative m-auto">
          <div className="flex justify-end ">
            <AiOutlineClose onClick={onClose} className="self-end text-2xl" />
          </div>
          {children}
        </div>

     </div>
      )}
    </>
  );
};

export default Modal;
