import React from "react";
import "./BottomSection.css";

var color = "#F6F7FF";

const BottomSection = (props) => {
  // const [color, setColor] = React.useState("#F6F7FF");
  const colorChange = (e) => {
    e.preventDefault();
    // console.log("Find..");
    // var colors = ["#FFAFAF", "white", "#F6F7FF"];
    var view = document.getElementById("rightsection");
    var email = document.getElementById("formElement__email");
    var inp = document.getElementById("formElement__singleLineInput");
    var textArea = document.getElementById("formElement__textArea");
    var pass = document.getElementById("formElement__password");
    var but = document.getElementById("formElement__submitButton");
    // var randomColor = colors[Math.floor(Math.random() * colors.length)];

    if (color === "#F6F7FF") {
      color = "#fadcd9";
    } else if (color === "#fadcd9") {
      color = "#ffffff";
    } else {
      color = "#F6F7FF";
    }
    view.style.background = color;
    if (email != null) {
      email.style.background = color;
    }
    if (inp != null) {
      inp.style.background = color;
    }
    if (textArea != null) {
      textArea.style.background = color;
    }
    if (pass != null) {
      pass.style.background = color;
    }
    if (but != null) {
      but.style.background = color;
    }
  };
  return (
    <div>
      <form className="bottomForm">
        <button id="colorchange" className="colorChange" onClick={colorChange}>
          Change Background Color
        </button>
        <button className="fireBase">FireBase</button>
      </form>
    </div>
  );
};

export default BottomSection;
