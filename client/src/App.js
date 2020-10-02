import React, { Component } from "react";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import HomePage from './containers/HomePage';
import Login from './containers/Login';
import Registration from './containers/Registration';
import BattlePage from "./containers/BattlePage";
import MemeMaker from "./containers/MemeMaker";
import InviteFriendsContainer from "./containers/InviteFriends";
import PendingWars from "./containers/PendingWars"
import WebCam from './components/WebCam';
import Sent from './containers/Sent';


class App extends Component {

  constructor(props)
  {
    super(props);
    this.state={
      session:null,
      users: [],
      memes: []
    }
  }


  componentDidMount()
  {
    
    try{
      this.setState({session:JSON.parse(localStorage.getItem("session"))})
      // console.log(this.state.session)
    }
    catch(error)
    {}
    
  }
  signIn = (session) => {
    // debugger;
    this.setState({session});
    // console.log(session.name)
    localStorage.setItem("session", JSON.stringify(session));
   // console.log("signIn function");
  }

  logOut=()=>{
    this.setState({
      session: null
    })
    localStorage.empty();
    //console.log("the app.js logout function is found");
  }

  // getUserImg() {
  //   let userImages = [];
  //   for (let i = 0; i < this.state.users.length; i++) {
  //     userImages.push(this.state.users[i].image)
  //   } this.setState({userImages})
  // }


  render() {
   // console.log( "this is the render app.js" + JSON.stringify(this.state.userImages ));

    return <Router>
         <Switch>
            

            

            {!this.state.session&&<Route path="/register" component={()=><Registration onRegister={this.signIn}/>} /> }

            {!this.state.session&&<Route path="/webcam" component={()=><WebCam onCamera={this.camera}/>} /> }


            {this.state.session&&[
            <Route path= "/battle" component={()=><BattlePage sessionName={this.state.session.name} sessionImage={this.state.session.image} createdMemes={this.state.memes} />} />,
            <Route path= "/mememaker" component={()=><MemeMaker session={this.state.session} sessionName={this.state.session.name} sessionImage={this.state.session.image} userImages={this.state.userImages}/>} />,
            <Route path= "/homepage" component={()=><MemeMaker session={this.state.session} sessionName={this.state.session.name} sessionImage={this.state.session.image}/>} />,

            <Route path= "/invite" component={()=><InviteFriendsContainer session={this.state.session} sessionName={this.state.session.name} sessionImage={this.state.session.image} />} />,

           <Route path= "/sent" component={()=><Sent session={this.state.session} sessionName={this.state.session.name} sessionImage={this.state.session.image} />} />,

           <Route path= "/pendingwars" component={()=><PendingWars session={this.state.session} sessionName={this.state.session.name} sessionImage={this.state.session.image} createdMemes={this.state.memes} />} />,

            <Route path="/" component={()=><HomePage onLogin={this.signIn} session={this.state.session} sessionName={this.state.session.name} sessionImage={this.state.session.image}/>} />
            ]}
            {!this.state.session&&<Route component={()=><Login onLogin={this.signIn}/>} /> }
            

        </Switch>
      </Router>
  }
}

export default App;
