import React, { Component } from 'react';
import Api from '../../utils/API';
import "./style.scss";
import axios from "axios";

class InviteFriends extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    inputChangeHandler = (e) => this.setState({ [e.target.name]: e.target.value });

    login = () => {
        Api.login(this.state.email, this.state.password).then(session => {
            this.props.onLogin(session);
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;

        axios({
            method: "POST",
            url: "/api/email/send",
            data: {
                email: email,
                messsage: "You've been challenged to a Meme Off!! Click here to battle."
            }
        }).then((response) => {
            if (response.data.msg === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.msg === 'fail') {
                alert("Message failed to send.")
            }
        })
    }

    resetForm() {
        document.getElementById('contact-form').reset();
    }

    render() {
        return <div id="InviteFriendsRow">
            <div className="jumbotron col-12">
                <h1>Challenge Your Friends!</h1>
            </div>
            <br />

            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                <div className="form-group DivForInput">
                    <input type="email" placeholder="add one email address at a time" className="form-control roundedInput" id="email" aria-describedby="emailHelp" />
                </div>
                <br />
                <div className="outerDivForPinkButton">
                    <button className="btn pinkButton" type="submit" value="Submit">Submit</button>
                </div>
            </form>
        </div>
    }
}

export default InviteFriends

