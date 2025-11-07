import React from "react";
import hockey_rink from '../images/hockey_rink.svg'
import PlayerIcon from "./PlayerIcon";

const Rectangle = () => {
    const style = {
        width: "600px",
        height: "410px",
        border: "2px solid #000",
        marginTop: "50px",
        position: "relative"
    }
    return (
        <div>
            Video stream here
        <div style={style}>
            <img
                src={hockey_rink}
                alt={"hockey rink"}
                style={{
                    height:"100%",
                    width:"100%",
                    objectFit: "cover"
            }}
        />
            <PlayerIcon top={"200px"} left={"350px"} color={"blue"}/>
            <PlayerIcon top={"20px"} left={"50px"} color={"blue"}/>
            <PlayerIcon top={"70px"} left={"90px"} color={"red"}/>
            <PlayerIcon top={"150px"} left={"200px"} color={"red"}/>

        </div>
    </div>
    )
}
export default Rectangle