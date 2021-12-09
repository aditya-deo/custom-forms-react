import React from "react";
import "./FormElement.css";

const FormElement = (props) => {
  if (props.statusCode === 1) {
    return <input id = "formElement__email" type="email" className="formElement__email" placeholder="E-mail"></input>;
  } 
  else if (props.statusCode === 2) {
    return <input id = "formElement__singleLineInput" type="text" className="formElement__singleLineInput" placeholder="Enter Text"></input>;
  } 
  else if (props.statusCode === 3) {
    return <textarea id = "formElement__textArea" placeholder="Text Area" className="formElement__textArea"></textarea>
  } 
  else if (props.statusCode === 4) {
    return <input id = "formElement__password" type="password" className="formElement__password" placeholder="Enter Password"></input>;
  } 
  else if (props.statusCode === 5) {
    return <button type="submit" id = "formElement__submitButton" className="formElement__submitButton">Submit</button>
  } 
  else {
    return <></>;
  }
};

export default FormElement;
