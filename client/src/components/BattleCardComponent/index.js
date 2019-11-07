import React, {Component} from 'react';
import "./style.css"


class BattleCard extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return <div className="card" id="memeDiv">
        <img id="memePicture" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Max_Raldin_Profile_Picture.png" className="card-img-top" alt="..."/>
          </div>
    }
}



export default BattleCard;

