import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.css";

function NavBar(props) {
    return (
      <div id="navBar">
        <ul className="nav justify-content-start">
  <li className="nav-item">
    <Link to="/" className="nav-link active">Invite Friends</Link>
  </li>
  <li className="nav-item">
  <Link to="/saved" className="nav-link ">To War!</Link>
  </li>
  <button className="btn btn-secondary">Log out</button>
</ul>
      </div>
    );
  }
  
  export default NavBar;


  


