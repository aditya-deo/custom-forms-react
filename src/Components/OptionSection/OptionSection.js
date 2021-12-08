import React from 'react';
import "./OptionSection.css";

const OptionSection = (props) => {
    const handleOptionButtonClick=(e)=>{
        if(e.target.name==="E-Mail"){
            props.onOptionSelect(1);
        }
        else if(e.target.name==="Single_Line_Input"){
            props.onOptionSelect(2);
        }
        else if(e.target.name==="Text-Box"){
            props.onOptionSelect(3);
        }
        else if(e.target.name==="Password_Input"){
            props.onOptionSelect(4);
        }
        else if(e.target.name==="Submit_Button"){
            props.onOptionSelect(5);
        }
    }
    return (
        <div className="optionSection">
            {props.options.map((option,index)=>{
                return <button className="optionButton" name = {option.split(" ").join("_")} key={index} onClick={handleOptionButtonClick}>{option}</button>
            })}
        </div>
    )
}

export default OptionSection
