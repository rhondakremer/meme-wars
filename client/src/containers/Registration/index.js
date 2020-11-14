import React, { Component } from 'react';
import RegistrationForm from '../../components/RegistrationForm';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Registration extends Component {
    render() {
        return <div className="loginContainer">
            <div className="logo"></div>
            <RegistrationForm onRegister={this.props.onRegister} />
            <br />
            <div>
                <h8>Already have an account?</h8>
                <Link to="/login" className="nav-link registerAccount" id="registerLink">Login here.</Link>
            </div>
        </div>
    }
}

export default Registration;