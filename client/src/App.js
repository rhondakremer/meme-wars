import React, { Component } from "react";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import HomePage from './containers/HomePage';
import Login from './containers/Login';
import Battle from './containers/BattlePage'

class App extends Component {

  constructor(props)
  {
    super(props);
    this.state={
      session:null
    }
  }
  signIn=(session)=>this.setState({session});

  render() {
    return <Router>
         <Switch>
            {!this.state.session&&<Route path="/login" component={()=><Login onLogin={this.signIn}/>} /> }
          <Route component={()=><HomePage session={this.state.session} />} />
          
          {!this.state.session&&<Route path="/battle" /> }
          <Route component={()=><Battle session={this.state.session} />} />

        </Switch>
      </Router>
  }
}

export default App;
