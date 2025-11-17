import React, {use, useState} from "react";
import {hover} from "@testing-library/user-event/dist/hover";

// A simple component for each player shown on the player list.
const Player = (props) => {
    const [hover, setHover] = useState(false)
    return (
        <div style={{
            height: "100%",
            width: "100%"
        }}>
            <button
                style={{
                    backgroundColor: hover ? "grey" : "white",
                    fontSize: "20px",
                    height: "100%",
                    width: "100%",
                }}
                onClick={props.onClick}
                onMouseOver={(e) => {
                    e.preventDefault()
                    setHover(true)
                }}
                onMouseLeave={(e) => {
                    e.preventDefault()
                    setHover(false)
                }}

            >
                {props.id}.{props.name} {props.isSelected}
            </button>
        </div>
    )
}
export default Player