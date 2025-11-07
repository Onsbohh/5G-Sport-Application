import React from "react";

const HeartRatePopup = (props) => {
    const style = {
        height: "150px",
        width: "150px",
        border: "2px solid #000"
    }
    return (
        <div style={style}>
            Show selected players heart rate here
            <button onClick={props.onClose}>Close</button>
        </div>
    )
}
export default HeartRatePopup