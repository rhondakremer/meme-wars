import React, { Component } from "react";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import HomePage from './containers/HomePage';
import Login from './containers/Login';
import Registration from './containers/Registration';
import BattlePage from "./containers/BattlePage";
import MemeMaker from "./containers/MemeMaker";
import Api from './utils/API';

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
    }
    catch(error)
    {}
  }
  signIn=(session)=>{
    this.setState({session});
    localStorage.setItem("session is ", JSON.stringify(session));
  }

  render() {
    return <Router>
         <Switch>
            {!this.state.session&&<Route path="/login" component={()=><Login onLogin={this.signIn}/>} /> }

            {!this.state.session&&<Route path="/register" component={()=><Registration onRegister={this.signIn}/>} /> }

            {this.state.session&&[
            <Route path= "/battle" component={()=><BattlePage session={this.state.session} />} />,
            <Route path= "/mememaker" component={()=><MemeMaker session={this.state.session} />} />
            ]}
            <Route component={()=><HomePage session={this.state.session} />} />
          
          


        </Switch>
      </Router>
  }
}

export default App;
