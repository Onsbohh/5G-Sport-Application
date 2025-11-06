import React from "react";

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
                    <th>Opt 1 (Menu icons)</th>
                </tr>
                <tr>
                    <th>Opt 2</th>
                </tr>
                <tr>
                    <th>Opt 3</th>
                </tr>
            </table>
        </div>
    )
}
export default Menu