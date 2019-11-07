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
        return <div className="row" id="battleRow">
        <div class="card" id="BattleMemeDiv">
        <img id="memePicture" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Max_Raldin_Profile_Picture.png" class="card-img-top" alt="..."/>
          </div>
          <div className="card" id="BattleMemeDiv">
          <h1>vs.</h1>
          <button id="voteForMemeButton" href="#" className="btn btn-primary">Results go here!</button>
            </div>
            <div className="card" id="BattleMemeDiv">
<img id="memePicture" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Max_Raldin_Profile_Picture.png" class="card-img-top" alt="..."/>
  </div>
  </div>
    }
}



export default BattleCard;

