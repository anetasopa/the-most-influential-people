import React from "react";
import "/src/Popup/popup.js";
import "./popup.css";

export const Popup = ({ text, closePopup, img, name, link, born }) => {
  return (
    <div className="popupContainer">
      <div className="popup">
        <div className="close" onClick={closePopup}>
          X
        </div>
        <h1 className="h1popup">{name}</h1>
        <div className="bornPopup">{born}</div>
        <div className="containerPopup">
          <img alt="img" className="popupImg" src={img}></img>
          <div className="display">
            <span className="textPopup">{text}</span>
            <div className="linkPopup">{link}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
