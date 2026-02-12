import React, {useState} from "react";
import Menu from "./Menu";

// Creates a dot that represents a player on the field.
// TODO: Need to fetch the location of the player from the database and set is as the coordinates.
const PlayerIcon = (props) => {
    const isHovered = props.hoveredPlayer === props.id
    const isSelected = props.selectedPlayer === props.player
    const isClicked = props.playerIsClicked === props.id
    const style = {
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        backgroundColor: isClicked || isHovered ? "grey" : props.color,
        color: "ghostwhite",
        position: "absolute",
        top: props.top,
        left: props.left
    }
    return (
        <div>
            <button
                style={style}
                onClick={props.onClick}
                onMouseEnter={props.onHover}
                onMouseLeave={props.onLeave}
            >
                {props.id}
            </button>
        </div>
    )
}
export default PlayerIcon