import React from "react";
import "./ButtonSection.css"
const ButtonSection = (props) => {

  const textBoxChosen = (e)=>{
    e.preventDefault();
    props.changeOptionsArray(["E-Mail","Single Line Input", "Text-Box"]);
  }

  const passwordButtonChosen = (e)=>{
    e.preventDefault();
    props.changeOptionsArray(["Password Input"]);
  }

  const submitButtonChosen = (e) =>{
    e.preventDefault();
    props.changeOptionsArray(["Submit Button"]);
  }

  return (
    <>
      <div className="buttonSection">
        <form className="buttonForm">
          <button  className="buttonSection__button" onClick={textBoxChosen}>TextBox</button><br></br>
          <button  className="buttonSection__button" onClick={passwordButtonChosen}>Password</button><br></br>
          <button  className="buttonSection__button" onClick={submitButtonChosen}>Submit Button</button><br></br>
        </form>
      </div>
    </>
  );
};

export default ButtonSection;
