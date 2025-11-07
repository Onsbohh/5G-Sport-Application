import React from "react";

const EcgPopup = (props) => {
    const style = {
        height: "150px",
        width: "150px",
        border: "2px solid #000"
    }
    return (
        <div style={style}>
            Show selected player's ecg graph here
            <button onClick={props.onClose}>Close</button>
        </div>
    )
}
export default EcgPopup