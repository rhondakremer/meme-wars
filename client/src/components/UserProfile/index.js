import React, {Component} from 'react';
import UserPicture from "../UserPicture"
import "./style.css"


class UserProfile extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return <div id="profileSidebar">
            <UserPicture/>
            <br />

            <h4>Hi, Nelio</h4>
            
            <br />
            <h6>Pending Wars</h6>
            <h6>Add Friends</h6>

            <h5>Nelio's Stats:</h5>

            <h6>Wars Won: 4</h6>
            <h6>Wars Lost: 5</h6>
            <h6>Dreams Crushed: 22</h6>



        </div>
    }
}

export default UserProfile;