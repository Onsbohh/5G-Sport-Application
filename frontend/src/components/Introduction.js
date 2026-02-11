import {React, useState} from "react";
import x_icon from "../images/x_icon.svg"
import "../App.css"
const Introduction = () => {
    const [visible, setVisible] = useState(true)
    const toggleIntro = (event) => {
        event.preventDefault()
        setVisible(false)
    }
    if(!visible){return null}
    return (
        <div className="intro">
            <p>
                Welcome. Please select a date from the calendar that <br/>
                includes data, to show past games streams.
            </p>
            <button id="close-button" onClick={toggleIntro}>
                <img
                    src={x_icon}
                    alt="X icon"
                    style={{
                        height:"25px",
                        width:"25px"
                    }}
                />
            </button>
        </div>
    )
}
export default Introduction