import React, {Component} from 'react';
import Api from '../../utils/API';
import axios from 'axios';


class RegistrationForm extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            name: "",
            email: "",
            password: "",
            image: ""
        }
    }

    componentDidMount() {
        
        // Api.getUsers()
        // .then(res => console.log(res.data))
    }

    inputChangeHandler=(e)=>
        this.setState({[e.target.name]:e.target.value});

    register=()=>{
        Api.register(this.state.name, this.state.email, this.state.password, this.state.image).then(session=>{

            // debugger;

            this.props.onRegister(session);
            alert("Welcome " + this.state.name)
            
        })    
    }

    render(){

        return <div className="row">
        <div className="col-6 offset-3">
            <h1>Register!</h1>

            <div className="form-group">
                <input onChange={this.inputChangeHandler} value={this.state.name} type="text" name="name" placeholder="Enter your name" />
            </div>

            <div className="form-group">
                <input onChange={this.inputChangeHandler} value={this.state.email} type="email" name="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
                <input onChange={this.inputChangeHandler} value={this.state.password} type="password" name="password" placeholder="Password" />
            </div>

            <div className="form-group">
                <input onChange={this.inputChangeHandler} value={this.state.image} type="url" name="image" placeholder="Upload your image here!" />
            </div>

            <button onClick={this.register} className="btn btn-primary">
                Register
            </button>
        </div>
    </div>
    }
}

export default RegistrationForm;