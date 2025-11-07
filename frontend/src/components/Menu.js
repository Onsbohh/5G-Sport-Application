import React, {useState} from "react";
import MenuIcon from "./MenuIcon";
import heart_icon from "../images/heart_icon.svg"
import ecg_icon from "../images/ecg_icon.svg"
import HeartRatePopup from "./HeartRatePopup";
import EcgPopup from "./EcgPopUp";

const Menu = () => {

    const [showHeartPopUp, setShowHeartPopUp] = useState(false)
    const [showEcgPopUp, setShowEcgPopUp] = useState(false)

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

            {showHeartPopUp && <HeartRatePopup onClose={closeHeartPopUp}/>}
            {showEcgPopUp && <EcgPopup onClose={closeEcgPopUp}/>}

        </div>
    )
}
export default Menu