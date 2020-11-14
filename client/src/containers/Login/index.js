import React from 'react';
import LoginForm from '../../components/LoginForm';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.css";


const Login = (props) => {
    return (
        <div className="loginContainer">
            <div className="logo"></div>
            <LoginForm id="loginForm" onLogin={props.onLogin} />
            <br />
            <div>
                <h6>Need an account?</h6>
                <Link to="/register" className="nav-link registerAccount" id="registerLink">Register here.</Link>
            </div>
        </div>
    )
}

export default Login;