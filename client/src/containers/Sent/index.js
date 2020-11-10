import React, { Component } from 'react';
import UserProfile from '../../components/UserProfile';
import NavBar from '../../components/NavBar';
import "./style.css"

class Sent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: ""
        }
    }

    render() {
        return <div >
            <div className="col-12" id="navbarDiv">
                <NavBar />
            </div>

            <div className="row col-12" id="mainBodyDiv">
                <div id="userProfileDiv">
                    <UserProfile componentDidMount={this.componentDidMount} sessionName={this.props.sessionName} sessionImage={this.props.sessionImage} />
                </div>
                <div id="memeCardDiv">Your email was sent successfully!</div>
            </div>
        </div>
    }
}

export default Sent;

