import React from 'react';
import UserPicture from "../UserPicture";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.css";


const UserProfile = (props) => {
    return (
        <div id="profileSidebar">
            <UserPicture sessionImage={props.sessionImage} />
            <br />
            <h4>Hi, {props.sessionName}</h4>
            <br />
            <h6><Link to="/pendingwars" className="linkToInvite" >Pending Wars</Link></h6>
            <h6 ><Link to="/invite" className="linkToInvite" >Add Friends</Link></h6>
        </div>
    )
}

export default UserProfile;