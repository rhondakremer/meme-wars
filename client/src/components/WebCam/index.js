import React, { Component } from 'react';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import { Modal, ModalHeader, ModalBody, FormGroup, Label} from 'reactstrap';
import { Link } from 'react-router-dom';
import "./style.css";

 
//import ImagePreview from './ImagePreview';
 
class WebCam extends Component {
  
  constructor(props)
  {
    super(props)
    this.state={
      modalIsOpen: true,
    }
  }

  onTakePhoto (dataUri) {
    // Do stuff with the photo...
    console.log('takePhoto');
    
  }
 
  onTakePhotoAnimationDone (dataUri) {
    // Do stuff with the photo...
    console.log('takePhoto');
  }
 
  onCameraError (error) {
    console.error('onCameraError', error);
  }
 
  onCameraStart (stream) {
    console.log('onCameraStart');
  }
 
  onCameraStop () {
    console.log('onCameraStop');
  }
 
  render () {
    return (
      <div className="App">
        <Modal className="camera-modal col-6 offset-3" isOpen={this.state.modalIsOpen}>
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
          onCameraStart = { (stream) => { this.onCameraStart(stream); } }
          onCameraStop = { () => { this.onCameraStop(); } }
        />
        </ModalBody>

        <Link to="/register" className="goBackToRegister">Back...</Link>
        </Modal>
      </div>
    );
  }
}
 
export default WebCam;