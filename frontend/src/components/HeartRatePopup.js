import React from "react";

// A popup window, where the selected players heart rate is shown.
// TODO: Need to fetch the selected player's heart rate from the database. There should be options for current, average and max heart rate.
const HeartRatePopup = ({player}) => {
    const style = {
        height: "150px",
        border: "2px solid #000",
        backgroundColor: "white",
        marginLeft: "15px",
        marginTop: "5px"
    }
    if(!player.heart_rate){
        console.log('no player is selected')
        return (
            <div style={style}>
                <p>Error fetching player data</p>
            </div>
        )
    }
    return (
        <div style={style}>
            <b>Average:</b>
            {player.heart_rate} bpm <br/>
        </div>
    )

}
export default HeartRatePopup