import React, { ReactNode } from "react";
import "../styles/login.css"


interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function Login(props: ModalType) {
  return (
    <>
        <div className="modal-overlay" >
          <div  className="modal-box">
            {props.children}
          </div>
        </div>
    </>
  );
}
