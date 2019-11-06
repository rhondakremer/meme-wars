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
        return <div class="card" id="memeDiv">
        <img id="memePicture" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Max_Raldin_Profile_Picture.png" class="card-img-top" alt="..."/>
        <button id="createMemeButton" href="#" class="btn btn-primary">Battle!</button>
      </div>
    }
}



export default MemeCard;

