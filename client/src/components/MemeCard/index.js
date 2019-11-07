import React, {Component} from 'react';
import "./style.css"


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
        <button id="createMemeButton" href="#" className="btn btn-primary">Battle!</button>
      </div>
    }
}



export default MemeCard;

