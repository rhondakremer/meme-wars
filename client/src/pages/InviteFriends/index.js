import React from 'react';
import UserProfile from '../../components/UserProfile';
import NavBar from '../../components/NavBar';
import InviteFriends from "../../components/InviteFriends";
import "./style.scss";

const InviteFriendsContainer = (props) => {
    return (
        <div>
            <div className="col-12" id="navbarDiv">
                <NavBar />
            </div>

            <div className="row col-12" id="mainBodyDiv">
                <div id="userProfileDiv">
                    <UserProfile sessionName={props.sessionName} sessionImage={props.sessionImage} />
                </div>
                <InviteFriends />
            </div>
        </div>
    )
}

export default InviteFriendsContainer;

