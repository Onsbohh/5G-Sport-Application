import {NavLink} from "react-router"
import menu_icon from "../images/menu_icon.svg"
import language_icon from "../images/language_icon.svg"
import darkmode_icon from "../images/darkmode_icon.svg"
import logo_icon from "../images/logo_icon.svg"
const Navigation = () => {
    const toggleMenu = (event) => {
        event.preventDefault()
        document.getElementById('nav-links').classList.toggle('hideOnMobile')
    }

    return (
        <nav className="main-nav">
            <div className="nav-header">
                <NavLink to="/" className="title"
                >5G Sport
                    <img
                    src={logo_icon}
                    alt="Logo icon"
                    style={{
                        height:"25px",
                        width: "25px",
                        margin: "2px",
                        color: "ghostwhite"
                    }}
                    />
                </NavLink>
                <div className="Side-menu">
                    <button>
                        <img
                            src={language_icon}
                            alt="Language icon"
                            style={{
                                height: "25px",
                                width: "25px",
                                margin: "5px",
                                backgroundColor: "ghostwhite"
                            }}
                        />
                    </button>
                    <button>
                        <img
                            src={darkmode_icon}
                            alt="Darkmode icon"
                            style={{
                                height: "25px",
                                width: "25px",
                                margin: "5px",
                                backgroundColor: "ghostwhite"
                            }}
                        />
                    </button>
                </div>
                <div className="Left-side-menu">
                    <button
                        id="menu-button"
                        onClick={toggleMenu}
                    >
                        <img
                            src={menu_icon}
                            alt="menu icon"
                            style={{
                                height: "25px",
                                width: "25px",
                                backgroundColor: "ghostwhite",
                                margin: "5px"
                        }}
                    />
                </button>
                </div>
            </div>
            <ul id="nav-links" className="hideOnMobile">
                <li>
                    <NavLink to="/InfoPage" className="nav-link">Info</NavLink>
                </li>
                <li>
                    <NavLink to="/" className="nav-link">Home</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation