import React, { Component } from "react";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import HomePage from './containers/HomePage';
import Login from './containers/Login';
import Registration from './containers/Registration';
import BattlePage from "./containers/BattlePage";
import MemeMaker from "./containers/MemeMaker";
import Api from './utils/API';
import InviteFriends from "./containers/InviteFriends";

class App extends Component {

  constructor(props)
  {
    super(props);
    this.state={
      session:null
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
    this.setState({session});
    // console.log(session.name)
    localStorage.setItem("session", JSON.stringify(session));
  }


  render() {
    return <Router>
         <Switch>
            {!this.state.session&&<Route path="/login" component={()=><Login onLogin={this.signIn}/>} /> }

            {!this.state.session&&<Route path="/register" component={()=><Registration onRegister={this.signIn}/>} /> }

            {this.state.session&&[
            <Route path= "/battle" component={()=><BattlePage sessionName={this.state.session.name} />} />,
            <Route path= "/mememaker" component={()=><MemeMaker session={this.state.session} />} />,
            <Route path= "/invite" component={()=><InviteFriends session={this.state.session} />} />
            ]}
            <Route component={()=><HomePage session={this.state.session} />} />
            
          
          


        </Switch>
      </Router>
  }
}

export default App;
