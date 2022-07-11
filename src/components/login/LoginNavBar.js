import React from "react";
import world from '../../images/world.svg'
import {Link, Outlet} from 'react-router-dom';

function LoginNavBar() {
    
    const [language, setLanguage] = React.useState("English")

    function changeLanguage(event) {
        const language = event.target.innerText;
        setLanguage(language);
    }

    const linkStyles = {
        backgroundColor: '#333C5F',
        textAlign: 'center',
        textDecoration: 'none',
        color: 'white',
        border: 'none',
        fontSize: '1rem',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        paddingTop: '.5rem',
        paddingBottom: '.75rem',
        borderRadius: '4px',
        cursor: 'pointer',
        // height: '2.5rem',
    }

    return (
        <div className="login-navbar">
            <h2>NETRIX</h2>
            <div className="languages-drop-down">
                <img src={world}/>
                <span>{language}</span>
                <span className="triangle">{String.fromCodePoint(9660)}</span>
                <div className="languages">
                    <span onClick={(event) => changeLanguage(event)} id='english'>English</span>
                        <span onClick={(event) => changeLanguage(event)} id='ingles'>Ingles</span>
                </div>
            </div>
            <Link to="/" style={linkStyles}>Sign In</Link>
            <Outlet />
        </div>
    )
}

export default LoginNavBar;