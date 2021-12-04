import React from "react";
import "./BottomSection.css"

const BottomSection = () => {
  return (
    <div>
      <form className="bottomForm">
        <button className="colorChange">
        <i className="fa fa-circle" style={{"fontSize":"36px","color":"blue"}}></i>
        </button>
        <button className="fireBase">FireBase</button>
      </form>
    </div>
  );
};

export default BottomSection;
