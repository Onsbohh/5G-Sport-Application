import React from "react";

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
            <button style={style} onClick={props.onClick}></button>
        </div>
    )
}
export default PlayerIcon