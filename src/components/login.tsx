import "../styles/login.css";
import React, { ReactNode, useState, useEffect } from "react";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function Modal(props: ModalType) {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape" && props.isOpen) {
        props.toggle();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [props.isOpen, props.toggle]);

  return (
    <>
      {props.isOpen && (
        <div className="modalOverlay" onClick={props.toggle}>
          <div onClick={(e) => e.stopPropagation()} className="modalBox">
            {props.children}
            <div className="tabs">
              <h2>Sign-In</h2>
              <div className="xButton">
                <button className="x" onClick={props.toggle}>
                  <span className="close">&times;</span>
                </button>
              </div>
            </div>
            <div className="tabContent">
              <div className="loginForm">
                <form className="login">
                  <label htmlFor="eMail" className="loginLabel">Email</label><br />
                  <input type="email" id="eMail" name="eMail"/><br />
                  <label htmlFor="pass" className="loginLabel">Password</label><br />
                  <input type="password" id="pass" name="pass"/>
                  <input type="submit" value="Sign-In" className="signInButton"/>
                </form>
                <a href="#" className="registerLink">Not a member? Register here.</a>
              </div>
              <div className="googleContent">
                <h2>Or</h2>
                <button className="googleSignIn">Sign-In With Google</button>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </>
  );
}