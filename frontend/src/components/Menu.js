import React from "react";
import MenuIcon from "./MenuIcon";
import heart_icon from "../images/heart_icon.svg"
import ecg_icon from "../images/ecg_icon.svg"

const Menu = () => {
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
                        <MenuIcon image={heart_icon}/>
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
        </div>
    )
}
export default Menu