import React from "react";
import "./style.css";
// import nelio from './nelio.jpg';


function UserPicture(props) {
    return (
      <div >
        <img id="userPicture" className="img-responsive" src={props.sessionImage} alt="logo"/>
       
      </div>
    );
  }
  
  export default UserPicture;


  


