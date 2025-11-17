import React, {useEffect, useState} from "react";
import hockey_rink from '../images/hockey_rink.svg'
import PlayerIcon from "./PlayerIcon";
import PlayerList from "./PlayerList";
import Menu from "./Menu";
import Select from 'react-select';



const Rink = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [showHeartPopUp, setShowHeartPopUp] = useState(false)
    const [showEcgPopUp, setShowEcgPopUp] = useState(false)
    const [selectedPlayer, setSelectedPlayer] = useState(null)

    const toggleMenu = (player) => {
        setSelectedPlayer(player)
        setShowMenu(prev => !prev)
    }

    useEffect(() => {
        if(selectedPlayer){
            console.log('selected player is' + selectedPlayer.name)
        } else {
            console.log('no player is selected yet')
        }
    }, [selectedPlayer]);

    /*
    const players = [
        {
            id:1,
            name: "Teemu Selänne",
            heart_rate: "50"
        },
        {
            id:2,
            name: "Bulju",
            heart_rate: "50"
        },
        {
            id: 3,
            name: "Gretzky",
            heart_rate: "50"
        }
    ]

     */

    const playerOptions = [
        {value: "pertsa", label:"Pertsa"}
    ]

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
            <PlayerIcon top={"200px"} left={"350px"} color={"blue"} onClick={toggleMenu}/>
            <PlayerIcon top={"20px"} left={"50px"} color={"blue"}/>
            <PlayerIcon top={"70px"} left={"90px"} color={"red"}/>
            <PlayerIcon top={"150px"} left={"200px"} color={"red"}/>
        </div>
            <PlayerList
                players={[
                    {
                        id:1,
                        name: "Teemu Selänne",
                        heart_rate: "50"
                    },
                {
                    id:2,
                    name: "Bulju",
                    heart_rate: "50"
                },
                {
                    id: 3,
                    name: "Gretzky",
                    heart_rate: "50"
                }
                    ]}
                onPlayerClick={toggleMenu}
            />
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