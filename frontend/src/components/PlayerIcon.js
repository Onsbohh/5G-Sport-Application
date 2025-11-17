import React, {useState} from "react";
import Menu from "./Menu";

// Creates a dot that represents a player on the field.
// TODO: Need to fetch the location of the player from the database and set is as the coordinates.
const PlayerIcon = (props) => {

    const [hover, setHover] = useState(false)
    const style = {
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        backgroundColor: hover ? "grey" : props.color,
        position: "absolute",
        top: props.top,
        left: props.left
    }
    return (
        <div>
            <button
                style={style}
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
                {props.id}
            </button>
        </div>
    )
}
export default PlayerIcon