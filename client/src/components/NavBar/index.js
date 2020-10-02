import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Api from '../../utils/API';
import "./styles.css";

class NavBar extends Component
{
  constructor(props)
  {
    super(props)
    this.state={
      currentUser: "",
      pending: ""
  }
  }

  componentDidMount() {
    Api.getUsers()
      .then(res => {
        let user = JSON.parse(localStorage.getItem('session'));
        this.setState({ currentUser: user.id }, () =>
          Api.getMyChallenges(this.state.currentUser)
            .then(res => this.setState({ pending: Object.keys(res.data).length })));
      })
  }

  logout=()=>{
      localStorage.clear();
      alert("logging out");
    //this.props.onLogout(!this.state.session);
    // }) 
      //console.log("logout function found");   
    
  }

  logout=()=>{
    localStorage.clear();
    document.location.reload();
  }

  render() {
    return (
      <div id="navBar">
        
        <ul className="nav justify-content-start">

  <li className="nav-item">
  <Link to="/" className="nav-link active">Home</Link>
  </li>

  <li className="nav-item">
  <Link to="/mememaker" className="nav-link ">Initiate Battle!</Link>
  </li>

  <li className="nav-item">
    <Link to="/pendingwars" className="nav-link active">Pending Wars</Link>
  </li>
  {this.state.pending>0 &&
  <div id="pendingNumber">{this.state.pending}</div>
}
  <li className="nav-item">
    <Link to="/battle" className="nav-link active">My Vault</Link>
  </li>

  <li className="nav-item">
    <Link to="/invite" className="nav-link active">Invite Friends</Link>
  </li>

   <li className="nav-item" id="logOutButton">
  <button className="nav-link active" onClick={this.logout}>Log out</button>
  </li>
</ul>
      </div>
    );
  }
}
  
  export default NavBar;


  


