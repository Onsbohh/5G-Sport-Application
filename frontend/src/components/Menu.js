import React, {useState} from "react";
import MenuIcon from "./MenuIcon";
import heart_icon from "../images/heart_icon.svg"
import ecg_icon from "../images/ecg_icon.svg"
import HeartRatePopup from "./HeartRatePopup";
import EcgPopup from "./EcgPopUp";
import menu_icon from "../images/menu_icon.svg"

const Menu = ({showMenu, setShowMenu, showHeartPopUp, setShowHeartPopUp, showEcgPopUp, setShowEcgPopUp}) => {

    /*
    const [showMenu, setShowMenu] = useState(false)
    const [showHeartPopUp, setShowHeartPopUp] = useState(false)
    const [showEcgPopUp, setShowEcgPopUp] = useState(false)

     */

    /*
    const toggleMenu = () => {
        setShowMenu(prev => !prev)
    }
     */

    const toggleHeart = () => {
        setShowHeartPopUp(prev => !prev)
    }

    const toggleEcg = () => {
        setShowEcgPopUp(prev => !prev)
    }



    /*
    const MenuList = () => {
        return (
            <div>
                <table style={style}>
                    <tr>
                        <td>
                            <MenuIcon image={heart_icon} onClick={handleHeartClick}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <MenuIcon image={ecg_icon} onClick={handleEcgClick}/>
                        </td>
                    </tr>
                    <tr>
                        <th>Opt 3</th>
                    </tr>
                </table>
            </div>
        )
    }

     */

    const style = {
        border: "2px solid #000",
        marginTop: "50px",
        marginRight: "25px",
        height: "400px",
        width: "150px",
        left: "0px",
        position:"relative"
    }
    if(!showMenu){
        return null
    }
    return (
        <div>
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
            <table style={style}>
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
                <tr>
                    <th>Opt 3</th>
                </tr>
            </table>

            {showHeartPopUp && <HeartRatePopup/>}
            {showEcgPopUp && <EcgPopup/>}

        </div>
    )
}
export default Menu