import React, {Component} from 'react';
import "./style.css"
import { BrowserRouter as Link } from "react-router-dom";



class MemeCard extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return <div className="card" id="memeDiv">
        <img id={this.props.id} src={this.props.src} className="card-img-top" alt="..."/>
        <Link to="/mememaker" className="nav-link btn btn-primary" id="createMemeButton">Initiate Battle!</Link>
      </div>
    }
}



export default MemeCard;

