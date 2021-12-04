
import React from 'react'
import "./LeftSection.css"
import ButtonSection from '../ButtonSection/ButtonSection'
import OptionSection from '../OptionSection/OptionSection'
import BottomSection from '../BottomSection/BottomSection'
const LeftSection = (props) => {
    const [options,setOptions] = React.useState([]);
    return (
        <div className="leftSection">
            <ButtonSection changeOptionsArray = {setOptions}/>
            <OptionSection options={options}/>
            <BottomSection />
        </div>
    )
}

export default LeftSection
