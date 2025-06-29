import React, {useContext} from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../HOC/Auth/AuthContext"
import { ThemeContext } from '../../HOC/ToggleTheme/ThemeContext'
import './index.css'

export default function Navbar() {
    const { isLoggedIn, logout } = useContext(AuthContext);
    const { toggleTheme } = useContext(ThemeContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    }

    return (
        <div className="nav-bar">
            <span>
                KC
            </span>
            <button onClick={toggleTheme}>
                ToggleTheme
            </button>
            <Link to='/'>
            Home
            </Link>
            <ul className="list-container">
                <li className="list-item">
                    <Link to="/About">About</Link>
                </li>
                <li className="list-item">
                    {!isLoggedIn ? <Link to="/Login">Login</Link> : <div onClick={handleLogout}>Logout</div>}
                </li>
            </ul>
        </div>
    )
}