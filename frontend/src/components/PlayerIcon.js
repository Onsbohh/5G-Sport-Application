import React, {useState} from "react";
import Menu from "./Menu";

// Creates a dot that represents a player on the field.
const PlayerIcon = (props) => {
    const style = {
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        backgroundColor: props.color,
        position: "absolute",
        top: props.top,
        left: props.left
    }
    return (
        <div>
            <button style={style} onClick={props.onClick}>{props.id}</button>
        </div>
    )
}
export default PlayerIcon