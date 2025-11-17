import React, {use, useState} from "react";
import {hover} from "@testing-library/user-event/dist/hover";

// A simple component for each player shown on the player list.
const Player = (props) => {
    const isHovered = props.hoveredPlayer === props.id
    const isSelected = props.selectedPlayer === props.id
    return (
        <div style={{
            height: "100%",
            width: "100%"
        }}>
            <button
                style={{
                    backgroundColor: isSelected || isHovered ? "grey" : "white",
                    fontSize: "20px",
                    height: "100%",
                    width: "100%",
                    border: "white"
                }}
                onClick={props.onClick}
                onMouseEnter={props.onHover}
                onMouseLeave={props.onLeave}
            >
                {props.id}.{props.name} {props.isSelected}
            </button>
        </div>
    )
}
export default Player