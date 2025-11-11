import React, {useState} from "react";
import MenuIcon from "./MenuIcon";
import heart_icon from "../images/heart_icon.svg"
import ecg_icon from "../images/ecg_icon.svg"
import HeartRatePopup from "./HeartRatePopup";
import EcgPopup from "./EcgPopUp";
import menu_icon from "../images/menu_icon.svg"

const Menu = () => {

    const [showMenu, setShowMenu] = useState(false)
    const [showHeartPopUp, setShowHeartPopUp] = useState(false)
    const [showEcgPopUp, setShowEcgPopUp] = useState(false)

    const handleMenuClick = () => {
        showMenu ? closeMenu() : openMenu()
    }

    const handleHeartClick = () => {
        showHeartPopUp ? closeHeartPopUp() : openHeartPopUp()
    }

    const handleEcgClick = () => {
        showEcgPopUp ? closeEcgPopUp() : openEcgPopUp()
    }

    const openMenu = () => {
        setShowMenu(true)
    }

    const openHeartPopUp = () => {
        setShowHeartPopUp(true)
    }

    const openEcgPopUp = () => {
        setShowEcgPopUp(true)
    }

    const closeHeartPopUp = () => {
        setShowHeartPopUp(false)
    }

    const closeEcgPopUp = () => {
        setShowEcgPopUp(false)
    }

    const closeMenu = () => {
        setShowMenu(false)
    }

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

    const style = {
        border: "2px solid #000",
        marginTop: "50px",
        marginRight: "25px",
        height: "400px",
        width: "150px",
        left: "0px",
        position:"relative"
    }
    return (
        <div> Menu here
            <button onClick={handleMenuClick}>
                <img
                    src={menu_icon}
                    alt={"menu icon"}
                    style={{
                        height: "30px",
                        width: "30px"
                    }}
                />
            </button>
            {showMenu && <MenuList/>}
            {/*
            <table style={style}>
                <tr>
                    <td>
                        <MenuIcon image={heart_icon} onClick={openHeartPopUp}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <MenuIcon image={ecg_icon} onClick={openEcgPopUp}/>
                    </td>
                </tr>
                <tr>
                    <th>Opt 3</th>
                </tr>
            </table>
         */}

            {showHeartPopUp && <HeartRatePopup/>}
            {showEcgPopUp && <EcgPopup/>}

        </div>
    )
}
export default Menu