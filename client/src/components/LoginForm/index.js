import React, {Component} from 'react';
import Api from '../../utils/API';

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

    inputChangeHandler=(e)=>this.setState({[e.target.name]:e.target.value});

    login=()=>{
        Api.login(this.state.email, this.state.password).then(session=>{
            this.props.onLogin(session);
        })
        
    }

    render()
    {
        return <div className="container">
            <div >
                <div className="form-group">
                    <input onChange={this.inputChangeHandler} value={this.state.email} type="email" name="email" placeholder="Enter your email" />
                </div>

                <div className="form-group">
                    <input onChange={this.inputChangeHandler} value={this.state.password} type="password" name="password" placeholder="Password" />
                </div>

                <button onClick={this.login} className="btn btn-primary">
                    Login
                </button>
            </div>
        </div>
    }
}

export default LoginForm;