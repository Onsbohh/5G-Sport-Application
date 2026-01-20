import React from "react";

// A popup window where the selected players Ecg graph should be shown.
const EcgPopup = ({player}) => {
    const style = {
        height: "150px",
        border: "2px solid #000",
        backgroundColor: "white",
        marginLeft: "15px",
        marginTop: "5px"
    }
    if(!player.ecg){
        return (
            <div style={style}>
                <p>Error fetching player data</p>
            </div>
        )
    }
    return (
        <div style={style}>
            {player.ecg}
        </div>
    )
}
export default EcgPopup