import React, {useState} from "react";

const Player = (props) => {
    return (
        <div>
            <button onClick={props.onClick}>{props.id}.{props.name}</button>
        </div>
    )
}
export default Player