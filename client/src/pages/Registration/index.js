import React from 'react';
import RegistrationForm from '../../components/RegistrationForm';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Registration = (props) => {
    return (
        <div className="loginContainer">
            <div className="logo">
                <img src={require("../../images/logo6.png")} />
            </div>
            <RegistrationForm onRegister={props.onRegister} />
            <br />
            <div>
                <h6>Already have an account?</h6>
                <Link to="/login" className="nav-link registerAccount" id="registerLink">
                    <p>Login here.</p>
                </Link>
            </div>
        </div>
    )
}

export default Registration;