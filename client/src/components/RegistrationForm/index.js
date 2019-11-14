import React, {Component} from 'react';
import Api from '../../utils/API';
// import axios from 'axios';
import UploadPhoto from '../../components/UploadPhoto';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './style.css';


class RegistrationForm extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            name: "",
            email: "",
            password: "",
            image: "",
        }
    }

    componentDidMount() {
        
    }

    inputChangeHandler=(e)=>
        this.setState({[e.target.name]:e.target.value});

    register = () => {
        
        Api
            .register(this.state.name, this.state.email, this.state.password, this.state.image)
            .then(session => {
                // debugger;
                this.props.onRegister(session.data);
                console.log("line 31 of reg form" + JSON.stringify(session))
                alert("Welcome " + this.state.name);

        })

    }

    getUploadedImage = (dataFromChild) => {
        this.setState({image:dataFromChild});
    }

    render(){

        return <div className="row">
        <div >

            <div className="form-group">
                Name*:
                <input onChange={this.inputChangeHandler} value={this.state.name} type="text" name="name" placeholder="Name" required/>
            </div>

            <div className="form-group">
                Email*:
                <input onChange={this.inputChangeHandler} value={this.state.email} type="email" name="email" placeholder="Email" required/>
            </div>

            <div className="form-group">
                Password*:
                <input onChange={this.inputChangeHandler} value={this.state.password} type="password" name="password" placeholder="Password" required/>
            </div>

            {/* <div className="form-group">
                Image URL:
                <input onChange={this.inputChangeHandler} value={this.state.image} type="url" name="image" placeholder="URL" />
            </div> */}
            <UploadPhoto callbackFromParent={this.getUploadedImage}/>
            <div className="selfieText">
                Or if you prefer, just take a selfie.
                <br></br>
                <div className="cameraOpener">
                <Link to="/webcam"  className="openCameraButton">Open camera</Link>
                </div>
            </div>
            <br></br>
            <button onClick={this.register} id="loginButton" className="btn btn-primary">
                Register
            </button>
        </div>
    </div>
    }
}

export default RegistrationForm;