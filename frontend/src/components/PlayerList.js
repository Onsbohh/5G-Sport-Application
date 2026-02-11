import React from "react";
import Player from "./Player";
import "../App.css"

// Lists the players.
const PlayerList = ({players, onPlayerClick, hoveredPlayer, setHoveredPlayer, onHover, onLeave, selectedPlayer, setSelectedPlayer, onPlayerSelect, playerIsClicked, setPlayerIsClicked}) => {
    const style = {
        marginLeft: "25px",
        width: "150px",
        position:"relative",
        overflowY: "hidden",
        backgroundColor: "#282c34"
    }

    return (
        <div style={{
            height: "410px",
            overflowY: "auto"
        }}>
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
                            hoveredPlayer={hoveredPlayer}
                            setHoveredPlayer={setHoveredPlayer}
                            onHover={() => onHover(player.id)}
                            onLeave={onLeave}
                            selectedPlayer={selectedPlayer}
                            setSelectedPlayer={setSelectedPlayer}
                            playerIsClicked={playerIsClicked}
                            onClick={() => {
                                onPlayerClick(player);
                                onPlayerSelect(player);
                                setPlayerIsClicked(player.id);
                            }}
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