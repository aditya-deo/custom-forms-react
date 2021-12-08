import React from "react";

const FormElement = (props) => {
  if (props.statusCode === 1) {
    return <input type="email" placeholder="E-mail"></input>;
  } 
  else if (props.statusCode === 2) {
    return <input type="text" placeholder="Enter Text"></input>;
  } 
  else if (props.statusCode === 3) {
    return <textarea></textarea>
  } 
  else if (props.statusCode === 4) {
    return <input type="password" placeholder="Enter Password"></input>;
  } 
  else if (props.statusCode === 5) {
    return <button type="submit">Submit</button>
  } 
  else {
    return <></>;
  }
};

export default FormElement;
