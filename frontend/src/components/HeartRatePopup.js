import React from "react";

const HeartRatePopup = ({player}) => {
    console.log('player whos heart rate to show ' + player.name)
    const style = {
        height: "150px",
        width: "150px",
        border: "2px solid #000"
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