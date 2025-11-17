import React, {useState} from "react";
import Menu from "./Menu";
import HeartRatePopup from "./HeartRatePopup";
import EcgPopup from "./EcgPopUp";
import Player from "./Player";

const PlayerList = ({players, onPlayerClick}) => {

    /*
    const [showMenu, setShowMenu] = useState(false)
    const [showHeartPopUp, setShowHeartPopUp] = useState(false)
    const [showEcgPopUp, setShowEcgPopUp] = useState(false)

    const toggleMenu = () => {
        setShowMenu(prev => !prev)
    }

     */
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
            {/*}
            <Menu
                showMenu={showMenu}
                setShowMenu={setShowMenu}
                showEcgPopUp={showEcgPopUp}
                setShowEcgPopUp={setShowEcgPopUp}
                showHeartPopUp={showHeartPopUp}
                setShowHeartPopUp={setShowHeartPopUp}
            />

            {showHeartPopUp && <HeartRatePopup/>}
            {showEcgPopUp && <EcgPopup/>}
            */}

        </div>
    )
}
export default PlayerList