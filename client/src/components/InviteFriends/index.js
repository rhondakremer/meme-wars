import React from 'react';
import axios from "axios";
import "./style.scss";

const InviteFriends = () => {
    const handleSubmit = (e) => {
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
                resetForm()
            } else if (response.data.msg === 'fail') {
                alert("Message failed to send.")
            }
        })
    }

    const resetForm = () => {
        document.getElementById('contact-form').reset();
    }

    return (
        <div id="InviteFriendsRow">
            <div className="jumbotron col-12">
                <h1>Challenge Your Friends!</h1>
            </div>
            <br />

            <form id="contact-form" onSubmit={handleSubmit} method="POST">
                <div className="form-group DivForInput">
                    <input type="email" placeholder="add one email address at a time" className="form-control roundedInput" id="email" aria-describedby="emailHelp" />
                </div>
                <br />
                <div className="outerDivForPinkButton">
                    <button className="btn pinkButton" type="submit" value="Submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default InviteFriends;
