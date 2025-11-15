import React, {useState} from "react";
import hockey_rink from '../images/hockey_rink.svg'
import PlayerIcon from "./PlayerIcon";
import PlayerList from "./PlayerList";
import Menu from "./Menu";

const Rink = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [showHeartPopUp, setShowHeartPopUp] = useState(false)
    const [showEcgPopUp, setShowEcgPopUp] = useState(false)

    const toggleMenu = () => {
        setShowMenu(prev => !prev)
    }

    const players = [
        {
            id:1,
            name: "Teemu Selänne"
        },
        {
            id:1,
            name: "Bulju"
        }
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
            <PlayerIcon top={"200px"} left={"350px"} color={"blue"}/>
            <PlayerIcon top={"20px"} left={"50px"} color={"blue"}/>
            <PlayerIcon top={"70px"} left={"90px"} color={"red"}/>
            <PlayerIcon top={"150px"} left={"200px"} color={"red"}/>
        </div>
            <PlayerList
                players={players}
                onPlayerClick={toggleMenu}
            />
            <Menu
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