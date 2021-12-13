import React from "react";
import "./FormElement.css";
// import { reference } from "../../firebase";
// import { ref, set } from "firebase/database";
import firebase from "../../firebase.js";

const db = firebase.ref();

const FormElement = (props) => {
  const emailChangeHandler = (e) => {
    props.setFormData((prev) => {
      return {
        ...prev,
        email: e.target.value,
      };
    });
  };
  const inputChangeHandler = (e) => {
    props.setFormData((prev) => {
      return {
        ...prev,
        input: e.target.value,
      };
    });
  };
  const textAreaChangeHandler = (e) => {
    props.setFormData((prev) => {
      return {
        ...prev,
        textAreaText: e.target.value,
      };
    });
  };
  const passwordChangeHandler = (e) => {
    props.setFormData((prev) => {
      return {
        ...prev,
        password: e.target.value,
      };
    });
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    db.child("/data").push({
      email: props.formData.email,
      input: props.formData.input,
      textAreaText: props.formData.textAreaText,
      password: props.formData.password
    })
    props.setFormData({
      email: "",
      input: "",
      textAreaText: "",
      password: ""
    })
  };

  if (props.statusCode === 1) {
    return (
      <input
        onChange={emailChangeHandler}
        id="formElement__email"
        type="email"
        className="formElement__email"
        placeholder="E-mail"
        value={props.formData.email}
      ></input>
    );
  } else if (props.statusCode === 2) {
    return (
      <input
        onChange={inputChangeHandler}
        id="formElement__singleLineInput"
        type="text"
        className="formElement__singleLineInput"
        placeholder="Enter Text"
        value={props.formData.input}
      ></input>
    );
  } else if (props.statusCode === 3) {
    return (
      <textarea
        onChange={textAreaChangeHandler}
        id="formElement__textArea"
        placeholder="Text Area"
        className="formElement__textArea"
        value={props.formData.textAreaText}
      ></textarea>
    );
  } else if (props.statusCode === 4) {
    return (
      <input
        onChange={passwordChangeHandler}
        id="formElement__password"
        type="password"
        className="formElement__password"
        placeholder="Enter Password"
        value={props.formData.password}
      ></input>
    );
  } else if (props.statusCode === 5) {
    return (
      <button
        onClick={handleButtonClick}
        type="submit"
        id="formElement__submitButton"
        className="formElement__submitButton"
      >
        Submit
      </button>
    );
  } else {
    return <></>;
  }
};

export default FormElement;
