import React from "react";
import PlayerIcon from "./PlayerIcon";

// Maps the players and places their icons on the hockey rink.
const PlayerIcons = ({players, onPlayerClick, selectedPlayer, setSelectedPlayer, hoveredPlayer, setHoveredPlayer, onLeave, onHover, onPlayerSelect, playerIsClicked, setPlayerIsClicked}) => {
    return (
        <div>
            {players.map((player) => (
                <PlayerIcon
                    key={player.id}
                    top={player.top}
                    left={player.left}
                    id={player.id}
                    color={player.teamColor}
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
            ))}
        </div>
    )
}

export default PlayerIcons