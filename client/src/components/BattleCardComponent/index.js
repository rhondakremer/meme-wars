import React, { Component } from 'react';
import Api from '../../utils/API';
import "./style.css"



class BattleCard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Api.getUsers()
        .then(res => {
            let user = JSON.parse(localStorage.getItem('session'));
            this.setState({currentUser: user.id})
        }); 



    // how to get all battles in feed
    Api.getBattles()
    .then( res => 
      console.log("these are all the battles in the feed", res.data)
    )

    // get all memes other users have made of you-- to get current user replace hard coded with this.state.currentUser inside of a callback for this.set.state in Api.getusers above
    Api.getMemesOfMe("5dcb1e7bcc23167d28f414dd")
    .then(res =>
      console.log("these are memes of me", res.data))
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

