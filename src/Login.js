import React from "react";
import LoginNavBar from "./components/login/LoginNavBar";
import LoginCenterPiece from "./components/login/LoginCenterPiece";
import LoginInfo from "./components/login/LoginInfo";
import LoginFAQ from "./components/login/LoginFAQ";
import background from './images/background.jpg'
import './components/login-style.css'


function Login() {
    return (
        <div className="login">
            <div className="gradient">
                <LoginNavBar />
                <LoginCenterPiece />
            </div>
            <div className="info-section">
                <LoginInfo 
                    title="Enjoy a gif"
                    description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
                    img={'./images/login/rick-roll.gif'}
                    align='right'
                />
                <LoginInfo 
                    title="Enjoy a gif"
                    description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
                    img={'./images/login/older-rick.png'}
                    align='left'
                />
                <LoginInfo 
                    title="Enjoy a gif"
                    description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
                    img={'./images/login/rick-astley-rickroll-09.png'}
                    align='right'
                />
                <LoginInfo 
                    title="Enjoy a gif"
                    description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
                    img={'./images/login/young-rick.png'}
                    align='left'
                />
                <LoginFAQ />
            </div>

        </div>
    );
}

export default Login;