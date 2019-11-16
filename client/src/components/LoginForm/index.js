import React, {Component} from 'react';
import Api from '../../utils/API';
import "./style.css"

class LoginForm extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            email:"",
            password: ""
        }
    }

    componentDidMount() {
        console.log(" Login form:",this.props)
    };

    inputChangeHandler=(e)=>this.setState({[e.target.name]:e.target.value});

    login = () => {
        Api.login(this.state.email, this.state.password).then(session=>{
            this.props.onLogin(session.data);
        })
        
    }

    render()
    {
        // console.log("Login Form Props:",this.props)
        return <div className="container" id="loginContainerComponent">
            <div id="form-group-login">
                <div className="form-group" id="form-group-login">
                    <input id="input" onChange={this.inputChangeHandler} value={this.state.email} type="email" name="email" placeholder="Enter your email" />
                </div>

                <div className="form-group" id="form-group-login">
                    <input id="input" onChange={this.inputChangeHandler} value={this.state.password} type="password" name="password" placeholder="Password" />
                </div>

                <button id="loginButton" onClick={this.login} className="btn btn-primary">
                    Login
                </button>
            </div>
        </div>
    }
}

export default LoginForm;