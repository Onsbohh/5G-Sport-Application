import React from "react";
import Player from "./Player";

// Lists the players.
const PlayerList = ({players, onPlayerClick}) => {
    console.log(players)
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
        <div style={{display: "flex"}}>
            <table style={style}>
                <thead>
                <tr>
                    <th scope={"col"}>Player</th>
                </tr>
                </thead>
                <tbody>
                {players.map((player) => (
                <tr key={player.id}>
                    <td>
                        <Player
                            id={player.id}
                            name={player.name}
                            onClick={() => onPlayerClick(player)}/>
                    </td>
                </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
export default PlayerList