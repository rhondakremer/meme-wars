import React, {Component} from 'react';
import "./style.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



class MemeCard extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return <div className="card" id="memeDiv">
        <img id="memePicture" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Max_Raldin_Profile_Picture.png" className="card-img-top" alt="..."/>
        <Link to="/mememaker" className="nav-link btn btn-primary" id="createMemeButton">Initiate Battle!</Link>
      </div>
    }
}



export default MemeCard;

