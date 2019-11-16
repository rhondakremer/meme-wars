import React, {Component} from 'react';
import LoginForm from '../../components/LoginForm';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./style.css"


class Login extends Component
{
    componentDidMount()
    {
        console.log(this.props)
    }
    render()
    {
        return <div id="loginContainer">
<div className="jumbotron jumbotron-fluid" id="loginJumbotron">
  <div className="container" id="jumbotronContainer">
    
  </div>
</div>        <LoginForm id="loginForm" onLogin={this.props.onLogin} />
        <br/>
        <br/>
        <div><h8>Need an account?</h8><Link to="/register" className="nav-link " id="registerLink">Register here.</Link></div>
        </div>
    }
}

export default Login;