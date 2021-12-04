import React from 'react';
import "./OptionSection.css";

const OptionSection = (props) => {
    return (
        <div className="optionSection">
            {props.options.map((option)=>{
                return <button className="optionButton">{option}</button>
            })}
        </div>
    )
}

export default OptionSection
