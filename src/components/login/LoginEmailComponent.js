import React from "react";

function LoginEmailComponent() {
    return (
        <div className="email-component">
            <label htmlFor="email">Ready to be rolled? Enter your email to create or restart your membership.</label>
            <div className="email-entry">
                <input type='email' id='email' placeholder="Email address"/>
                <button>Get started {String.fromCodePoint(12297)}</button>
            </div>
        </div>
    );
}

export default LoginEmailComponent;