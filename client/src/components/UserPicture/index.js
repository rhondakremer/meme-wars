import React from "react";
import "./style.css";
import nelio from './nelio.jpg';


function UserPicture(props) {
    return (
      <div >
        <img id="userPicture" className="img-responsive" src={nelio} alt="logo"/>
       
      </div>
    );
  }
  
  export default UserPicture;


  


