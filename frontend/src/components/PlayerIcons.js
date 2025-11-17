import React from "react";
import PlayerIcon from "./PlayerIcon";

const PlayerIcons = ({players, onPlayerClick}) => {
    return (
        <div>
            {players.map((player) => (
                <PlayerIcon
                    key={player.id}
                    top={player.top}
                    left={player.left}
                    id={player.id}
                    onClick={() => onPlayerClick(player)}
                />
            ))}
        </div>
    )
}

export default PlayerIcons