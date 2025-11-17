import React from "react";
import Player from "./Player";

// Lists the players.
const PlayerList = ({players, onPlayerClick, hoveredPlayer, setHoveredPlayer, onHover, onLeave}) => {
    console.log(players)
    const style = {
        marginTop: "50px",
        marginLeft: "25px",
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
                    <td style={{height:"20px"}}>
                        <Player
                            id={player.id}
                            name={player.name}
                            onClick={() => onPlayerClick(player)}
                            hoveredPlayer={hoveredPlayer}
                            setHoveredPlayer={setHoveredPlayer}

                            onHover={() => onHover(player.id)}
                            onLeave={onLeave}
                        />
                    </td>
                </tr>
                ))}
                </tbody>
            </table>
        </div>
    )

}
export default PlayerList