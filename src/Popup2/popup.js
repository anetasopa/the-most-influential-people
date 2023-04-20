import React from "react";
import "./popup.css";

export const Popup2 = ({ onClose, modalState, component }) => {
  const classPopup = modalState
    ? "popup popup-displayed"
    : "popup popup-closed";

  return (
    <div className={`${classPopup}`} id="popup">
      <div className="popup-content">
        <div onClick={onClose} className="close" align="right" title="Close">
          X
        </div>
        {component}
      </div>
    </div>
  );
};
