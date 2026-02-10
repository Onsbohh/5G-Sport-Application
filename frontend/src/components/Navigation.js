import {NavLink} from "react-router"
import menu_icon from "../images/menu_icon.svg"

const Navigation = () => {
    const toggleMenu = (event) => {
        event.preventDefault()
        document.getElementById('nav-links')
    }

    return (
        <nav className="main-nav">
            <div className="nav-header">
                <NavLink to="/" className="title">5G Sport</NavLink>
                <button onClick={toggleMenu}>menu</button>
            </div>
            <ul className="nav-links">
                <li>
                    <NavLink to="/InfoPage" className="nav-link">Info</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation