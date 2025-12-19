import React from "react";

// A popup window where the selected players Ecg graph should be shown.
const EcgPopup = ({player}) => {
    const style = {
        height: "150px",
        width: "150px",
        border: "2px solid #000",
        backgroundColor: "white",
        marginLeft: "15px"
    }
    return (
        <div style={style}>
            {player.ecg}
        </div>
    )
}
export default EcgPopup