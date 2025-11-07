import React from "react";
const PlayerList = (props) => {
    const style = {
        border: "2px solid #000",
        marginTop: "50px",
        marginLeft: "25px",
        height: "400px",
        width: "150px",
        left: "0px",
        position:"relative"
    }
    return (
        <div> List of {props.team} players
            <table style={style}>
                <tr>
                    <th>Player 1</th>
                </tr>
                <tr>
                    <th>Player 2</th>
                </tr>
                <tr>
                    <th>Player 3</th>
                </tr>
            </table>
        </div>
    )
}
export default PlayerList