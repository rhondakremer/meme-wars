import React, {Component} from 'react';
import RegistrationForm from '../../components/RegistrationForm';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class Registration extends Component
{

   

    render()
    {

        return <div id="loginContainer">
        <div className="jumbotron jumbotron-fluid" id="loginJumbotron">
          <div className="container" id="jumbotronContainer">
            
          </div>
        </div> 
            <RegistrationForm onRegister={this.props.onRegister} />
            <br/>
            <div>
                <h8>Already have an account?</h8>
                    <Link to="/login" className="nav-link " id="registerLink">Login here.</Link>
            </div>
            </div>

    }
}

export default Registration;