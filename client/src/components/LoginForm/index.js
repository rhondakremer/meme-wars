import React, { useEffect, useRef } from 'react';
import Api from '../../utils/API';
import './style.css';

const LoginForm = (props) => {
    const formEmail = useRef(null);
    const formPassword = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const login = () => {
        Api.login(formEmail.current.value, formPassword.current.value)
        .then(session => {
            props.onLogin(session.data);
        })
    }

    return (
        <div className="container loginContainerComponent" >
            <div className="form-group-login">
                <div className="form-group form-group-login">
                    <input className="input" ref={formEmail} type="email" name="email" placeholder="Enter your email" />
                </div>

                <div className="form-group form-group-login">
                    <input className="input" ref={formPassword} type="password" name="password" placeholder="Enter your password" />
                </div>

                <button id="loginButton" onClick={login} className="btn pinkButton">
                    Login
                </button>
            </div>
        </div>
    )
}

export default LoginForm;