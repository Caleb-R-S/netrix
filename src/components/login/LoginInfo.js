import React from "react";

function LoginInfo(props) {
    return (
        <div className="login-info">
            <hr/>
            <div className="login-info-body">
                {props.align === 'left' && <img src={props.img} />}
                <div className="login-info-text">
                    <h2>{props.title}</h2> 
                    <h3>{props.description}</h3>
                </div>
                {props.align === 'right' && <img src={props.img} />}
            </div>
        </div>

    );
}

export default LoginInfo;