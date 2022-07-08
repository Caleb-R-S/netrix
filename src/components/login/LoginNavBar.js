import React from "react";
import world from '../../images/world.svg'

function LoginNavBar() {
    return (
        <div className="login-navbar">
            <h2>NETRIX</h2>
            <div className="languages-drop-down">
                <img src={world}/>
                <span>Langauge </span>
                <span className="triangle">{String.fromCodePoint(9660)}</span>
                <div className="languages">
                    <span>English</span>
                    <span>Ingles</span>                   
                </div>
            </div>
            <button>Sign In</button>
        </div>
    )
}

export default LoginNavBar;