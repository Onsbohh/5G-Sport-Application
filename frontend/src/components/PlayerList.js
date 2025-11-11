import React, {useState} from "react";
import Menu from "./Menu";

const PlayerList = (props) => {

    const [showMenu, setShowMenu] = useState(false)

    const openMenu = setShowMenu(true)

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
        <div> List of {props.team} players
            <table style={style}>
                <tr>
                    <td>
                        <button onClick={openMenu}>
                            Player 1
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>Player 2</td>
                </tr>
                <tr>
                    <td>Player 3</td>
                </tr>
            </table>
            {showMenu && <Menu/>}
        </div>
    )
}
export default PlayerList