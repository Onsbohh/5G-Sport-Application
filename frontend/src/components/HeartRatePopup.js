import React from "react";

// A popup window, where the selected players heart rate is shown.
// TODO: Need to fetch the selected player's heart rate from the database. There should be options for current, average and max heart rate.
const HeartRatePopup = ({player}) => {
    const style = {
        height: "150px",
        width: "150px",
        border: "2px solid #000",
        backgroundColor: "white",
        marginLeft: "15px",
        fontSize: "20px",
    }
    console.log('heart rate popup')
    if(!player){
        console.log('no player is selected')
        return null
    }
    return (
        <div style={style}>
            <b>Average:</b>
            {player.heart_rate} bpm <br/>
        </div>
    )
}
export default HeartRatePopup