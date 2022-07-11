import React from "react";
import facebook from '../images/Facebook_white.svg';
import instagram from '../images/Instagram_white.svg';
import twitter from '../images/Twitter_white.svg';
import youtube from '../images/Youtube_white.svg';

function Footer() {
    
    const links = [
        [
            "Audio and Subtitles",
            "Media Center",
            "Privacy",
            "Contact Us"
        ],
        [
            "Audio Description",
            "Investor Relations",
            "Legal Notices"
        ],
        [
            "Help Center",
            "Jobs",
            "Cookie Preferences"
        ],
        [
            "Gift Cards",
            "Terms of Use",
            "Corporate Information"
        ]
    ]

    const linkElements = links.map(setOfLinks => {
        return (<div className="column-of-links">
            {setOfLinks.map(link => {
                return (<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">{link}</a>);
            })}
        </div>); 
    });

    return (
        <div className="footer">
            <div className="icons">
                <img src={facebook}/>
                <img src={instagram}/>
                <img src={twitter}/>
                <img src={youtube}/>
            </div>
            <div className="additional-info">
                {linkElements}
            </div>
        </div>
    );
}

export default Footer;