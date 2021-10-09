import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BattlePage from "./pages/BattlePage";
import HomePage from "./pages/HomePage";
import InviteFriendsContainer from "./pages/InviteFriends";
import Login from "./pages/Login";
import MemeMaker from "./pages/MemeMaker";
import PendingWars from "./pages/PendingWars";
import Registration from "./pages/Registration";
import Sent from "./pages/Sent";
import WebCam from "./components/WebCam";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memes: [],
      session: null,
      users: [],
    };
  }

  componentDidMount() {
    try {
      this.setState({ session: JSON.parse(localStorage.getItem("session")) });
    } catch (error) {}
  }

  signIn = (session) => {
    this.setState({ session });
    localStorage.setItem("session", JSON.stringify(session));
  };

  logOut = () => {
    this.setState({
      session: null,
    });
    localStorage.empty();
  };

  // getUserImg() {
  //   let userImages = [];
  //   for (let i = 0; i < this.state.users.length; i++) {
  //     userImages.push(this.state.users[i].image)
  //   } this.setState({userImages})
  // }

  render() {
    return (
      <Router>
        <Switch>
          {!this.state.session && (
            <Route
              path="/register"
              component={() => <Registration onRegister={this.signIn} />}
            />
          )}
          {!this.state.session && (
            <Route
              path="/webcam"
              component={() => <WebCam onCamera={this.camera} />}
            />
          )}
          {this.state.session && [
            <Route
              path="/battle"
              component={() => (
                <BattlePage
                  sessionName={this.state.session.name}
                  sessionImage={this.state.session.image}
                  createdMemes={this.state.memes}
                />
              )}
            />,
            <Route
              path="/mememaker"
              component={() => (
                <MemeMaker
                  session={this.state.session}
                  sessionName={this.state.session.name}
                  sessionImage={this.state.session.image}
                  userImages={this.state.userImages}
                />
              )}
            />,
            <Route
              path="/homepage"
              component={() => (
                <MemeMaker
                  session={this.state.session}
                  sessionName={this.state.session.name}
                  sessionImage={this.state.session.image}
                />
              )}
            />,
            <Route
              path="/invite"
              component={() => (
                <InviteFriendsContainer
                  session={this.state.session}
                  sessionName={this.state.session.name}
                  sessionImage={this.state.session.image}
                />
              )}
            />,
            <Route
              path="/sent"
              component={() => (
                <Sent
                  session={this.state.session}
                  sessionName={this.state.session.name}
                  sessionImage={this.state.session.image}
                />
              )}
            />,
            <Route
              path="/pendingwars"
              component={() => (
                <PendingWars
                  session={this.state.session}
                  sessionName={this.state.session.name}
                  sessionImage={this.state.session.image}
                  createdMemes={this.state.memes}
                />
              )}
            />,
            <Route
              path="/"
              component={() => (
                <HomePage
                  onLogin={this.signIn}
                  session={this.state.session}
                  sessionName={this.state.session.name}
                  sessionImage={this.state.session.image}
                />
              )}
            />,
          ]}
          {!this.state.session && (
            <Route component={() => <Login onLogin={this.signIn} />} />
          )}
        </Switch>
      </Router>
    );
  }
}

export default App;
