import React from "react";
import PlayerIcon from "./PlayerIcon";

// Maps the players and places their icons on the hockey rink.
const PlayerIcons = ({players, onPlayerClick, isSelected, setIsSelected, hoveredPlayer, setHoveredPlayer, onLeave, onHover}) => {
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
                    isSelected={isSelected}
                    setIsSelected={setIsSelected}
                    onClick={() => {
                        onPlayerClick(player);
                    }}
                />
            ))}
        </div>
    )
}

export default PlayerIcons