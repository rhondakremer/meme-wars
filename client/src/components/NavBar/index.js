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
    Api.getUser()
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
    <Link to="/" className="nav-link active">Invite Friends</Link>
  </li>
  <li className="nav-item">
  <Link to="/saved" className="nav-link ">To War!</Link>
  </li>
  <button onClick={this.logout} className="btn btn-secondary">Log out</button>
</ul>
      </div>
    );
  }
}
  
  export default NavBar;


  


