import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.css";

function NavBar(props) {
    return (
      <div id="navBar">
        <ul className="nav justify-content-start">

  <li className="nav-item">
  <Link to="/" className="nav-link active">Home</Link>
  </li>

  <li className="nav-item">
  <Link to="/battle" className="nav-link ">Initiate Battle!</Link>
  </li>

  <li className="nav-item">
    <Link to="/invite" className="nav-link active">Invite Friends</Link>
  </li>
  
</ul>
      </div>
    );
  }
  
  export default NavBar;


  


