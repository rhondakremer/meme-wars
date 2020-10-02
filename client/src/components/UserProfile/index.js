import React, {Component} from 'react';
import UserPicture from "../UserPicture";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./style.css"


class UserProfile extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            currentUser: ""
        }
    }

    componentDidMount()
    {
        
        
        // let sessionString = localStorage.getItem("session");
        // let parsedSession = (JSON.parse(sessionString));
        // this.setState({name: parsedSession.name});
        // console.log(session.name)
        // Api.getOne().then
        // (currentUser=>{
        //     console.log(currentUser)
        // })
        // console.log("userprofile baby" + this.state.name)
    }

    render()
    {

        return <div id="profileSidebar">
            <UserPicture sessionImage={this.props.sessionImage}/>
            <br />

            <h4>Hi, {this.props.sessionName}</h4>
            
            <br />
            <h6><Link to="/pendingwars" className="linkToInvite" >Pending Wars</Link></h6>
            <h6 ><Link to="/invite" className="linkToInvite" >Add Friends</Link></h6>

            
            {/* <button onClick={this.button}>get current user</button> */}



        </div>
    }
}

export default UserProfile;