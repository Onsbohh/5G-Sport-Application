import React, {useEffect, useState} from "react";
import hockey_rink from '../images/hockey_rink.svg'
import PlayerIcon from "./PlayerIcon";
import PlayerList from "./PlayerList";
import Menu from "./Menu";
import Select from 'react-select';
import PlayerIcons from "./PlayerIcons";


// The main component that connects the hockey rink, player icons, player list and the player menus.
const Rink = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [showHeartPopUp, setShowHeartPopUp] = useState(false)
    const [showEcgPopUp, setShowEcgPopUp] = useState(false)
    const [selectedPlayer, setSelectedPlayer] = useState(null)
    const [isSelected, setIsSelected] = useState(false)
    const [hoveredPlayer, setHoveredPlayer] = useState(null)

    // When a player's name or icon is clicked, show the menu for that player.
    const toggleMenu = (player) => {
        setSelectedPlayer(player)
        setIsSelected(prev => !prev)
        setShowMenu(prev => !prev)
    }


    useEffect(() => {
        if(selectedPlayer){
            console.log('selected player is' + selectedPlayer.name)
        } else {
            console.log('no player is selected yet')
        }
    }, [selectedPlayer]);

    // Placeholder example players
    const players = [
        {
            id:1,
            name: "Teemu Selänne",
            heart_rate: "50",
            top: "100px",
            left: "200px"
        },
        {
            id:2,
            name: "Bulju",
            heart_rate: "50",
            top: "200px",
            left: "200px"
        },
        {
            id: 3,
            name: "Gretzky",
            heart_rate: "50",
            top: "300px",
            left: "90px"
        },
        {
            id: 4,
            name: "Gretzky",
            heart_rate: "50",
            top: "350px",
            left: "140px"
        },
        {
            id: 5,
            name: "Gretzky",
            heart_rate: "50",
            top: "80px",
            left: "300px"
        }
    ]

    const playerOptions = players.map((player => {
        return {
            value: player.id,
            label: player.name
        }
    }))

    const style = {
        width: "600px",
        height: "410px",
        border: "2px solid #000",
        marginTop: "50px",
        position: "relative",
        backgroundColor: "white"
    }
    return (
        <div style={{
            display: "flex",
            alignItems: "stretch"
        }}>
        <div style={style} title={"rink container"}>
            <img
                src={hockey_rink}
                alt={"hockey rink"}
                style={{
                    height:"100%",
                    width:"100%",
                    objectFit: "cover"
            }}
        />
            <PlayerIcons
                players={players}
                isSelected={isSelected}
                setIsSelected={setIsSelected}
                onPlayerClick={toggleMenu}
                hoveredPlayer={hoveredPlayer}
                onHover={setHoveredPlayer}
                onLeave={() => setHoveredPlayer(null)}
            />
        </div>
            <PlayerList
                players={players}
                onPlayerClick={toggleMenu}
                hoveredPlayer={hoveredPlayer}
                onHover={setHoveredPlayer}
                onLeave={() => setHoveredPlayer(null)}
            />

            {/*
            <label>
                <Select
                    options={playerOptions}
                    menuIsOpen={true}
                    defaultValue={playerOptions[0]}
                    placeholder={"Choose a player"}
                    styles={{
                        width: "70px"
                    }}
                />
            </label>
            */}

            <Menu
                player={selectedPlayer}
                showMenu={showMenu}
                setShowMenu={setShowMenu}
                showEcgPopUp={showEcgPopUp}
                setShowEcgPopUp={setShowEcgPopUp}
                showHeartPopUp={showHeartPopUp}
                setShowHeartPopUp={setShowHeartPopUp}
            />
    </div>
    )
}
export default Rink