import React, {Component} from 'react';
import UserPicture from "../UserPicture";
import Api from '../../utils/API';
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
            <UserPicture/>
            <br />

            <h4>Hi, {this.state.name}</h4>
            
            <br />
            <h6>Pending Wars</h6>
            <h6>Add Friends</h6>

            <h5>{this.state.name}'s Stats:</h5>

            <h6>Wars Won: 4</h6>
            <h6>Wars Lost: 5</h6>
            <h6>Dreams Crushed: 22</h6>
            {/* <button onClick={this.button}>get current user</button> */}



        </div>
    }
}

export default UserProfile;