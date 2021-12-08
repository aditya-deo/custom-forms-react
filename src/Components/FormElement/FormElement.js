import React from "react";
import "./FormElement.css";

const FormElement = (props) => {
  if (props.statusCode === 1) {
    return <input type="email" className="formElement__email" placeholder="E-mail"></input>;
  } 
  else if (props.statusCode === 2) {
    return <input type="text" className="formElement__singleLineInput" placeholder="Enter Text"></input>;
  } 
  else if (props.statusCode === 3) {
    return <textarea placeholder="Text Area" className="formElement__textArea"></textarea>
  } 
  else if (props.statusCode === 4) {
    return <input type="password" className="formElement__password" placeholder="Enter Password"></input>;
  } 
  else if (props.statusCode === 5) {
    return <button type="submit" className="formElement__submitButton">Submit</button>
  } 
  else {
    return <></>;
  }
};

export default FormElement;
