import React, { Component } from 'react';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import { Modal, ModalHeader, ModalBody, FormGroup, Label} from 'reactstrap';
import Downloader from 'js-file-downloader';
import { Link } from 'react-router-dom';
import Webcam from 'react-webcam';
import Api from '../../utils/API';
import axios from 'axios';
//import saveImage from 'save-image';
import "./style.css";

const moment = require('moment');

//========================================================


//import ImagePreview from './ImagePreview';
 
class WebCam extends Component 
{

  constructor()
  {
    super()
    this.state={
      showModal: true,
      image: false
    }
    this.handleCloseModal = this.handleCloseModal.bind(this);
  };

  componentDidMount = () => {
    this.state.showModal =  false;
  }

  componentWillUnmount = () => {
    this.state.showModal = false;
  }

  setRef = webcam => {
    this.webcam = webcam;
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
  }

  onTakePhoto (dataUri) {
    // Do stuff with the photo...
    let myImage = dataUri;
    //console.log("I hit onTakePhoto function" + myImage);
    // myImage = `${moment().format('X')}.jpg`;
    //console.log(myImage);
    //localStorage.setItem("name", myImage);
    axios.post("/api/images", {image:myImage});
    this.props.onPhotoTaken(dataUri);

    const fileUrl  = dataUri;
    console.log("this is the fileUrl" + fileUrl);

    new Downloader({
      url: dataUri
    })
    .then(() => {

    })
    .catch( (error) =>{
      return error;
    });
  }
 
  onTakePhotoAnimationDone (dataUri) {
    // Do stuff with the photo...
    //console.log('takePhoto');
  }
 
  onCameraError (error) {
    console.error('onCameraError', error);
  }
 
  onCameraStart (stream) {
    console.log('onCameraStart');
  }
 
  handleCloseModal () {
    console.log("I hit the camera stop function");
    this.setState({showModal: false});
  }

  onCameraStop () {

  }
 
  render () {
    return (
      <div className="App">
        <Modal className="camera-modal col-6 offset-3" isOpen={true}>
        <ModalHeader className="camera-modal-header-text">Take a selfie!</ModalHeader>

        <ModalBody>
        <Camera
          onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
          onTakePhotoAnimationDone = { (dataUri) => { this.onTakePhotoAnimationDone(dataUri); } }
          onCameraError = { (error) => { this.onCameraError(error); } }
          idealFacingMode = {FACING_MODES.ENVIRONMENT}
          idealResolution = {{width: 640, height: 480}}
          imageType = {IMAGE_TYPES.JPG}
          imageCompression = {0.97}
          isMaxResolution = {true}
          isImageMirror = {true}
          isSilentMode = {true}
          isDisplayStartCameraError = {true}
          isFullscreen = {false}
          sizeFactor = {1}
          //onCameraStart = { (stream) => { this.onCameraStart(stream); } }
          onCameraStop = { this.props.onClose}
        />
        
        </ModalBody>

        <button onClick={this.props.onClose} className="goBackToRegister">Close</button>
        </Modal>

      </div>
    );
  }
}
 
export default WebCam;