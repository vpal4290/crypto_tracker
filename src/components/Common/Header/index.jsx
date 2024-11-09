import React, { useEffect, useState } from 'react'
import './style.css'
import TemporaryDrawer from './drawer';
import Button from '../Button';
import { Link } from 'react-router-dom'
import Toggle from '../Toggle';
import ToggleOffRoundedIcon from '@mui/icons-material/ToggleOffRounded';
import ToggleOnRoundedIcon from '@mui/icons-material/ToggleOnRounded';


function Header() {

    const [toggle, setToggle] = useState(false);

    const toggleMode = () => {
        setToggle(!toggle);

        if (theme === "dark-mode") {
            setTheme("light-mode")
        } else {
            setTheme("dark-mode")
        }
    }

    const [theme, setTheme] = useState("light-mode")

    useEffect(() => {
        // access class Name of body
        document.body.className = theme;
    }, [theme])


    return (
        <div className='navbar'>
            <Link to="/">
                <h1 className='logo'>CryptoTracker<span style={{ color: "var(--blue)" }}>.</span></h1>
            </Link>

            <div className="links">
                {toggle ?
                    <ToggleOffRoundedIcon sx={{ fontSize: "70px" }} onClick={() => toggleMode()} /> :
                    <ToggleOnRoundedIcon sx={{ fontSize: "70px" }} onClick={() => toggleMode()} />
                }
                <Link to="/">
                    <p className='link'>Home</p>
                </Link>
                <Link to="/compare">
                    <p className='link'>Compare</p>
                </Link>
                <Link to="/dashboard">
                    <Button text={"Dashboard"} onClick={() => console.log("Button Clicked")} />
                </Link>
            </div>
            <div className="mobile-drawer">
                <TemporaryDrawer />
            </div>
        </div>
    )
}

export default Header;


// <Toggle className="toggle" text={"Toggle"} onClick={() => toggleMode()} outlined={false} /> :
// <Toggle className="toggle" text={"Toggle"} outlined={true} onClick={() => toggleMode()} />