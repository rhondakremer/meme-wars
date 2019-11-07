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
  <Link to="/battle" className="nav-link ">To War!</Link>
  </li>
</ul>
      </div>
    );
  }
  
  export default NavBar;


  


