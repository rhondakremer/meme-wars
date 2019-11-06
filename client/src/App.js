import React, { Component } from "react";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import HomePage from './containers/HomePage';
import Login from './containers/Login';

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
          <Route component={HomePage} />
        </Switch>
      </Router>
  }
}

export default App;
