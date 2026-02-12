import React, {useState} from "react";
import MenuIcon from "./MenuIcon";
import heart_icon from "../images/heart_icon.svg"
import ecg_icon from "../images/ecg_icon.svg"
import HeartRatePopup from "./HeartRatePopup";
import EcgPopup from "./EcgPopUp";
import menu_icon from "../images/menu_icon.svg"
import player_image from "../images/player_image.svg"

// A popup menu, where the user can select information to show from their currently selected player.
const Menu = ({player, showMenu, showHeartPopUp, setShowHeartPopUp, showEcgPopUp, setShowEcgPopUp}) => {
    const toggleHeart = () => {
        setShowHeartPopUp(prev => !prev)
    }

    const toggleEcg = () => {
        setShowEcgPopUp(prev => !prev)
    }

    const style = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderCollapse: "collapse",
        marginTop: "50px",
        position:"relative"
    }
    if(!player || !showMenu){
        return null
    }
    return (
        <div className="player-info-popup">
            <h2>{player.name}</h2>
            <img
                src={player_image}
                alt="Player image"
                style={{
                    height: "50px",
                    width: "50px"
                }}
            />
            {/*
            <button onClick={toggleMenu}>
                <img
                    src={menu_icon}
                    alt={"menu icon"}
                    style={{
                        height: "30px",
                        width: "30px"
                    }}
                />
            </button>
            */}
            <div className="menu-table-wrapper">
                <table style={style} title={"menu_table"}>
                    <tr>
                        <td>
                            <MenuIcon image={heart_icon} onClick={toggleHeart}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <MenuIcon image={ecg_icon} onClick={toggleEcg}/>
                        </td>
                    </tr>
                </table>
            </div>
            <div>
                {(showHeartPopUp && player) && <HeartRatePopup player={player}/>}
                {showEcgPopUp && player && <EcgPopup player={player}/>}
            </div>
        </div>
    )
}
export default Menu