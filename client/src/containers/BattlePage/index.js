import React, { Component } from 'react';
import UserProfile from '../../components/UserProfile';
import Api from '../../utils/API';
import NavBar from '../../components/NavBar';
import MemeCard2 from "../../components/MemeCard2";
import "./style.css";

class BattlePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: "",
            myMemes: []
        }
    }

    componentDidMount() {
        Api.getUsers()
        .then(res => {
            let user = JSON.parse(localStorage.getItem('session'));
            this.setState({ currentUser: user.id }, () =>
                Api.getMemes(this.state.currentUser)
                .then(res => this.setState({ myMemes: res.data }))
            )
        });
    }

    render() {
        return (<div>
            <div className="col-12" id="navbarDiv">
                <NavBar />
            </div>
            <div className="row col-12" id="mainBodyDiv">
                <div id="userProfileDiv">
                    <UserProfile componentDidMount={this.componentDidMount} sessionName={this.props.sessionName} sessionImage={this.props.sessionImage} />
                </div>
                <div id="memeCardDivOnBattlePage">
                    {this.state.myMemes.map((item) => (
                        <div>
                            {console.log(item.bottomX)}
                            <MemeCard2 id={item._id} src={item.baseImgURL} topX={item.topX} topY={item.topY} bottomY={item.bottomY} bottomX={item.bottomX} topText={item.topText} bottomText={item.bottomText} />
                        </div>
                    ))}
                </div>
            </div>
        </div>);
    }
}

export default BattlePage;

