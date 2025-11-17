import React from "react";

// A popup window, where the selected players heart rate is shown.
// TODO: Need to fetch the selected player's heart rate from the database.
const HeartRatePopup = ({player}) => {
    const style = {
        display: "flex",
        alignItems: "stretch",
        height: "150px",
        width: "150px",
        border: "2px solid #000",
        backgroundColor: "white"
    }
    if(!player){
        return null
    }
    return (
        <div style={style}>
            {player.name}'s heart rate is {player.heart_rate}
        </div>
    )
}
export default HeartRatePopup