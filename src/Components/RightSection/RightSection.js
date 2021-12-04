import React from "react";
import "./RightSection.css";

const RightSection = () => {
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
      <div className="rightSectionSubdiv" id="rightSectionSubdiv2"></div>
      <div className="rightSectionSubdiv" id="rightSectionSubdiv3"></div>
      <div className="rightSectionSubdiv" id="rightSectionSubdiv4"></div>
      <div className="rightSectionSubdiv" id="rightSectionSubdiv5"></div>
      <div className="rightSectionSubdiv" id="rightSectionSubdiv6"></div>
      <div className="rightSectionSubdiv" id="rightSectionSubdiv7"></div>
      <div className="rightSectionSubdiv" id="rightSectionSubdiv8"></div>
      <div className="rightSectionSubdiv" id="rightSectionSubdiv9"></div>
      <div className="rightSectionSubdiv" id="rightSectionSubdiv10"></div>
    </div>
  );
};

export default RightSection;
