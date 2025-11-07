import React, {useState} from "react";
import MenuIcon from "./MenuIcon";
import heart_icon from "../images/heart_icon.svg"
import ecg_icon from "../images/ecg_icon.svg"
import HeartRatePopup from "./HeartRatePopup";

const Menu = () => {

    const [showPopUp, setShowPopUp] = useState(false)

    const openPopUp = () => {
        setShowPopUp(true)
    }

    const closePopUp = () => {
        setShowPopUp(false)
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
                        <MenuIcon image={heart_icon} onClick={openPopUp}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <MenuIcon image={ecg_icon}/>
                    </td>
                </tr>
                <tr>
                    <th>Opt 3</th>
                </tr>
            </table>

            {showPopUp && <HeartRatePopup onClose={closePopUp}/>}

        </div>
    )
}
export default Menu