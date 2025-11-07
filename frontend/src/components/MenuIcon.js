import React from "react";

const MenuIcon = (props) => {
    return (
        <div>
            <img
                src={props.image}
                alt={"menuIconn"}
                style={{
                    height:"40px",
                    width:"40px"
                }}
            />
        </div>
    )
}
export default MenuIcon