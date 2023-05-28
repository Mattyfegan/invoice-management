import "../styles/login.css";
import React, { ReactNode, useState } from "react";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function Modal(props: ModalType) {
  const [activeTab, setActiveTab] = useState("signIn");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      {props.isOpen && (
        <div className="modal-overlay" onClick={props.toggle}>
          <div onClick={(e) => e.stopPropagation()} className="modal-box">
            {props.children}
            <div className="tabs">
              <button className={`tabLinks ${activeTab === "signIn" ? "active" : ""}`} onClick={() => handleTabClick("signIn")} id="left"> Sign-in </button>
              <button className={`tabLinks ${activeTab === "register" ? "active" : ""}`} onClick={() => handleTabClick("register")} > Register </button>
              <div className="xButton">
                <button className="x" onClick={props.toggle}>
                  <span className="close">&times;</span>
                </button>
              </div>
            </div>
            <div className="tab-content">
              {activeTab === "signIn" && 
                <div className="signInContent">
                  Content for Tab 1                  
                </div>
              }
              {activeTab === "register" && 
                <div className="registerContent">
                  Content for Tab 2
                </div>
              }
            </div>
          </div>
        </div>
      )}
    </>
  );
}