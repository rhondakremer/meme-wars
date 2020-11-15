import React from "react";
import "./style.scss";

const UserPicture = (props) => {
    return (
      <div>
        <img id="userPicture" className="img-responsive" src={props.sessionImage} alt="You need to upload a profile picture" />
      </div>
    );
  }
  
  export default UserPicture;


  


