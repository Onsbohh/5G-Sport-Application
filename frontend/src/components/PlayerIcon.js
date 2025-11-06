import React from "react";

function PlayerIcon(props) {
    const style = {
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        backgroundColor: "red",
        position: "absolute",
        top: props.top,
        left: props.left
    }
    return (
        <div style={style}>
        </div>
    )
}
export default PlayerIcon