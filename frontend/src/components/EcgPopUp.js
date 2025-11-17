import React from "react";

// A popup window where the selected players Ecg graph should be shown.
const EcgPopup = ({player}) => {
    const style = {
        height: "150px",
        width: "150px",
        border: "2px solid #000",
        backgroundColor: "white"
    }
    return (
        <div style={style}>
            Show {player.name}'s Ecg graph here.
        </div>
    )
}
export default EcgPopup