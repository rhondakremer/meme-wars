import React from 'react';
import RegistrationForm from '../../components/RegistrationForm';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Registration = (props) => {
    return (
        <div className="loginContainer">
            <div className="logo"></div>
            <RegistrationForm onRegister={props.onRegister} />
            <br />
            <div>
                <h6>Already have an account?</h6>
                <Link to="/login" className="nav-link registerAccount" id="registerLink">Login here.</Link>
            </div>
        </div>
    )
}

export default Registration;