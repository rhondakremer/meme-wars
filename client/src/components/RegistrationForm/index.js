import React, {Component} from 'react';
import Api from '../../utils/API';
// import axios from 'axios';
import UploadPhoto from '../../components/UploadPhoto';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WebCam from "../WebCam";
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
            showModal: false,
            imageUri:""
        }
    }

    componentDidMount() {
        window.scrollTo(0,0);

        
    }

    inputChangeHandler=(e)=>
        this.setState({[e.target.name]:e.target.value});

    register = () => {

        if(this.state.name === "" || this.state.email === "" || this.state.password === "")
        {
            alert("Please fill all the fields in order to register.");
        }

        Api
            .register(this.state.name, this.state.email, this.state.password, this.state.image)
            .then(session => {
                // debugger;
                this.props.onRegister(session.data);
                console.log("line 31 of reg form" + JSON.stringify(session))

                alert("Welcome " + this.state.name);

        })

    }

    openCamera = () => {
        this.setState({showModal:true}, () => console.log(this.state));
    
    }

    getUploadedImage = (dataFromChild) => {
        this.setState({image:dataFromChild});
    }

    render(){

        return <div className="container loginContainerComponent">
        <div id="form-group-login">

            <div className="form-group" id="form-group-login">
                <input className="input" onChange={this.inputChangeHandler} value={this.state.name} type="text" name="name" placeholder="Name" required/>
            </div>

            <div className="form-group" id="form-group-login">
                <input className="input" onChange={this.inputChangeHandler} value={this.state.email} type="email" name="email" placeholder="Email" required/>
            </div>

            <div className="form-group" id="form-group-login">
                <input className="input" onChange={this.inputChangeHandler} value={this.state.password} type="password" name="password" placeholder="Password" required/>
            </div>
            {/* <div className="form-group">
                Image URL:
                <input onChange={this.inputChangeHandler} value={this.state.image} type="url" name="image" placeholder="URL" />
            </div> */}
            <UploadPhoto callbackFromParent={this.getUploadedImage}/>
            
            {this.state.imageUri&&<img id="imageFromWebcam" style={{maxWidth:"65%"}} src={this.state.imageUri} />}
            <div className="selfieText">

                <p id="explanationText">If you prefer to take a selfie to upload, just click "Open camera" below! 😜</p>
               
                <div className="outerDivForPinkButton">

                <Link onClick={this.openCamera} id="webcamButton" className="pinkButton roundedInput">Open camera</Link>
             
             </div>
             
                {this.state.showModal && <WebCam onPhotoTaken={(imageUri)=>this.setState({showModal:false,imageUri})} onClose={()=>this.setState({showModal:false})}/> }
                
            <div className="outerDivForPinkButton">
            <button onClick={this.register} className="btn btn-primary pinkButton">
                Register </button>
                </div>
 
        </div>
        
    </div>
    </div>
    }
}

export default RegistrationForm;