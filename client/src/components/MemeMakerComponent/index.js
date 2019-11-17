import React, { Component } from 'react';
import "./style.css"


class MemeMakerComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="row" id="MemeMakerRow">
            <div className="jumbotron col-12">
    <h1>Ready. Set. Meme!</h1>
    
  </div>
            <div className="card" id="MemeMakerDiv">
                <img id="memeMakerPicture" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Max_Raldin_Profile_Picture.png" className="card-img-top" alt="..." />
            </div>

            <div className="row input-group" id="textDiv">
            <textarea className="form-control" aria-label="With textarea" id="addTextInput"></textarea>
<br/>
  <button className=" btn btn-primary " id="loginButton" >
   Make Meme!
  </button>
</div>
</div>

    }
}



export default MemeMakerComponent;

