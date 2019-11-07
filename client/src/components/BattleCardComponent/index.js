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
        <div class="card" id="memeDiv">
        <img id="memePicture" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Max_Raldin_Profile_Picture.png" class="card-img-top" alt="..."/>
          </div>
          <div className="card" id="memeDiv">
          <h1>vs.</h1>
            </div>
            <div className="card" id="memeDiv">
<img id="memePicture" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Max_Raldin_Profile_Picture.png" class="card-img-top" alt="..."/>
  </div>
  </div>
    }
}



export default BattleCard;

