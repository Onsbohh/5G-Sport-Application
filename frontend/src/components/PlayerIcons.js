import React from "react";
import PlayerIcon from "./PlayerIcon";

// Maps the players and places their icons on the hockey rink.
const PlayerIcons = ({players, onPlayerClick, selectedPlayer, setSelectedPlayer, hoveredPlayer, setHoveredPlayer, onLeave, onHover, onPlayerSelect}) => {
    return (
        <div>
            {players.map((player) => (
                <PlayerIcon
                    key={player.id}
                    top={player.top}
                    left={player.left}
                    id={player.id}
                    hoveredPlayer={hoveredPlayer}
                    setHovereredPlayer={setHoveredPlayer}
                    onHover={() => onHover(player.id)}
                    onLeave={onLeave}
                    selectedPlayer={selectedPlayer}
                    setSelectedPlayer={setSelectedPlayer}
                    onClick={() => {
                        onPlayerClick(player);
                        onPlayerSelect(player.id)
                    }}
                />
            ))}
        </div>
    )
}

export default PlayerIcons