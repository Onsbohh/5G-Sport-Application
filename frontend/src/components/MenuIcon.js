import React, {useState} from "react";
const MenuIcon = (props) => {
    /*
    const [showPopup, setShowPopup] = useState(false)

    const openPopup = () => {
        setShowPopup(true)
    }

    const closePopup = () => {
        setShowPopup(false)
    }
    */

    return (
        <div>
            <button onClick={props.onClick}>
                <img
                    src={props.image}
                    alt={"menuIconn"}
                    style={{
                        height: "40px",
                        width: "40px"
                    }}
                />
            </button>
            {/*
            {showPopup && <HeartRatePopup onClose={closePopup}/>}
            */}
        </div>
    )
}
export default MenuIcon