import React from "react";
import hockey_rink from './hockey_rink.svg'
import PlayerIcon from "./PlayerIcon";
function Rectangle () {
    const style = {
        width: "600px",
        height: "400px",
        border: "2px solid #000",
        marginTop: "50px",
        position: "relative"
    }
    return <div style={style}>
        <img
            src={hockey_rink}
            alt={"hockey rink"}
            style={{
                height:"100%",
                width:"100%",
                objectFit: "cover"
        }}
        />
        <PlayerIcon top={"20px"} left={"50px"}/>
        <PlayerIcon top={"70px"} left={"90px"}/>
        <PlayerIcon top={"150px"} left={"200px"}/>
    </div>
}
export default Rectangle