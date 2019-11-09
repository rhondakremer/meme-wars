import React, { Component } from 'react';
import "./style.css"



class BattleCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div id="additionalDIV">
    <div className="row" id="battleRow">
      <div className="card" id="BattleMemeDiv">
        <img id="memePicture" src={require('./sampleMemes/meme.png')} className="card-img-top" alt="..." />
      </div>
      <div className="card" id="BattleMemeDiv">
      <br/>
        <br/>
        <h1>vs.</h1>
        <button id="voteForMemeButton" href="#" className="btn btn-primary">Results go here!</button>
      </div>
      <div className="card" id="BattleMemeDiv">
        <img id="memePicture" src={require('./sampleMemes/meme (1).png')} className="card-img-top" alt="..." />
      </div>
    </div>

    <div className="row" id="battleRow">
      <div className="card" id="BattleMemeDiv">
        <img id="memePicture" src={require('./sampleMemes/meme (3).png')} className="card-img-top" alt="..." />
      </div>
      <div className="card" id="BattleMemeDiv">
      <br/>
        <br/>
        <h1>vs.</h1>
        <button id="voteForMemeButton" href="#" className="btn btn-primary">Results go here!</button>
      </div>
      <div className="card" id="BattleMemeDiv">
        <img id="memePicture" src={require('./sampleMemes/meme (4).png')} className="card-img-top" alt="..." />
      </div>
    </div>

    <div className="row" id="battleRow">
      <div className="card" id="BattleMemeDiv">
        <img id="memePicture" src={require('./sampleMemes/meme (5).png')} className="card-img-top" alt="..." />
      </div>
      <div className="card" id="BattleMemeDiv">
      <br/>
        <br/>
        <h1>vs.</h1>
        <button id="voteForMemeButton" href="#" className="btn btn-primary">Results go here!</button>
      </div>
      <div className="card" id="BattleMemeDiv">
        <img id="memePicture" src={require('./sampleMemes/meme (2).png')} className="card-img-top" alt="..." />
      </div>
    </div>

    <div className="row" id="battleRow">
      <div className="card" id="BattleMemeDiv">
        <img id="memePicture" src={require('./sampleMemes/meme (7).png')} className="card-img-top" alt="..." />
      </div>
      <div className="card" id="BattleMemeDiv">
        <br/>
        <br/>

        <h1>vs.</h1>
        <button id="voteForMemeButton" href="#" className="btn btn-primary">Results go here!</button>
      </div>
      <div className="card" id="BattleMemeDiv">
        <img id="memePicture" src={require('./sampleMemes/meme (1).png')} className="card-img-top" alt="..." />
      </div>
    </div>
    </div>
  }
}


export default BattleCard;

