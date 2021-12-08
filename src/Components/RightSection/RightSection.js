import React from "react";
import "./RightSection.css";
import FormElement from "../FormElement/FormElement";

const RightSection = (props) => {
  const [formName, setFormName] = React.useState("Form Name Appears Here");
  const handleFormNameChange = (e) => {
    const name = prompt("What should be the name of the form?");
    if (name.trim().length > 0) {
      setFormName(name);
    } else {
      alert("Form Name can't be empty.");
    }
  };

  return (
    <div className="rightSection">
      <div className="rightSectionSubdiv" id="rightSectionSubdiv1">
        <h3 className="formName" onClick={handleFormNameChange}>
          {formName}
        </h3>
      </div>
      <div className="rightSectionSubdiv" id="rightSectionSubdiv2" key="2"><FormElement statusCode={props.statuses[0]}/></div>
      <div className="rightSectionSubdiv" id="rightSectionSubdiv3" key="3"><FormElement statusCode={props.statuses[1]}/></div>
      <div className="rightSectionSubdiv" id="rightSectionSubdiv4" key="4"><FormElement statusCode={props.statuses[2]}/></div>
      <div className="rightSectionSubdiv" id="rightSectionSubdiv5" key="5"><FormElement statusCode={props.statuses[3]}/></div>
      <div className="rightSectionSubdiv" id="rightSectionSubdiv6" key="6"><FormElement statusCode={props.statuses[4]}/></div>
      <div className="rightSectionSubdiv" id="rightSectionSubdiv7" key="7"><FormElement statusCode={props.statuses[5]}/></div>
      <div className="rightSectionSubdiv" id="rightSectionSubdiv8" key="8"><FormElement statusCode={props.statuses[6]}/></div>
      <div className="rightSectionSubdiv" id="rightSectionSubdiv9" key="9"><FormElement statusCode={props.statuses[7]}/></div>
      <div className="rightSectionSubdiv" id="rightSectionSubdiv10" key="10"><FormElement statusCode={props.statuses[8]}/></div>
    </div>
  );
};

export default RightSection;
