import React from "react";

// A popup window where the selected players Ecg graph should be shown.
const EcgPopup = (props) => {
    const style = {
        height: "150px",
        width: "150px",
        border: "2px solid #000"
    }
    return (
        <div style={style}>
            Show selected player's ecg graph here
        </div>
    )
}
export default EcgPopup