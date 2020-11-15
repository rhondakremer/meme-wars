import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Api from '../../utils/API';
import "./styles.css";

const NavBar = () => {
  const [user, setUser] = useState(null);
  const [pendingBattles, setPendingBattles] = useState(null);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('session'));
    setUser(user.id);
    getChallenges();
  }, [user]);

  const getChallenges = () => {
    Api.getMyChallenges(user)
      .then(res => {
        setPendingBattles(res.data.length);
      })
  }

  const logout = () => {
    localStorage.clear();
    window.location.href='/login';
  }

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

        {pendingBattles > 0 &&
          <div id="pendingNumber">{pendingBattles}</div>
        }
        
        <li className="nav-item">
          <Link to="/battle" className="nav-link active">My Vault</Link>
        </li>

        <li className="nav-item">
          <Link to="/invite" className="nav-link active">Invite Friends</Link>
        </li>

        <li className="nav-item" id="logOutButton">
          <button className="nav-link active" onClick={logout}>Log out</button>
        </li>
      </ul>
    </div>
  );

}

export default NavBar;





