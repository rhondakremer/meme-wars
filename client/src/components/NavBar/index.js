import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RegistrationForm from "../RegistrationForm";
import Api from '../../utils/API';
import "./styles.css";

class NavBar extends Component
{
  constructor(props)
  {
    super(props)
  }

  componentDidMount() {
    Api.getUsers()
    .then(res => console.log(res.data))
  }

  logout=()=>{
      localStorage.clear();
      alert("logging out");
    //this.props.onLogout(!this.state.session);
    // }) 
      //console.log("logout function found");   
    
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
    <Link to="/invite" className="nav-link active">Invite Friends</Link>
  </li>

  <li className="nav-item">
  
  <Link to="/login" onClick={this.logout} className="nav-link active">Log out</Link>
  </li>
</ul>
      </div>
    );
  }
}
  
  export default NavBar;


  


