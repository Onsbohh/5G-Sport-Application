import React, {useState} from "react";

// A simple component for each player shown on the player list.
const Player = (props) => {
    return (
        <div>
            <button onClick={props.onClick}>{props.id}.{props.name} {props.isSelected}</button>
        </div>
    )
}
export default Player