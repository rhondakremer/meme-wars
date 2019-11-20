import React, { Component } from 'react';
import Api from '../../utils/API';
import "./style.css"
import MemeCard2 from "../MemeCard2";


class BattleCard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Api.getUsers()
      .then(res => {
        let user = JSON.parse(localStorage.getItem('session'));
        this.setState({ currentUser: user.id })
      });

    // how to get all battles in feed
    Api.getBattles()
      .then(res =>
        console.log("these are all the battles in the feed", res.data)
      )

    // get all memes other users have made of you-- to get current user replace hard coded with this.state.currentUser inside of a callback for this.set.state in Api.getusers above
    Api.getMemesOfMe("5dcb1e7bcc23167d28f414dd")
      .then(res =>
        console.log("there are memes of me", res.data))

    // this pulls from feed where a meme was made of you but you have not yet made one of the other person- same rules for getting currentuser apply as above
    Api.getMyChallenges("5dcc9658ff88640870a151b1")
      .then(res =>
        console.log("I am user2 in the feed", res.data))

    Api.getMemeById("5dd1c5c575a5da4446f05ffc")
      .then(res => console.log("Iam the meme", res.data))
  }

  render() {
    console.log("Wars received in battle:",this.props.wars)
    return <div id="additionalDIV">
      {console.log("Props 1 is: ",this.props.wars[0].meme1)}
    {this.props.wars.map((item, index) => (
          
          <div className="row" id="battleRow">
            <MemeCard2 id={item.meme1._id} src={item.meme1.baseImgURL} topX={item.meme1.topX} topY={item.meme1.topY} bottomY={item.meme1.bottomY} bottomX={item.meme1.bottomX} topText={item.meme1.topText} bottomText={item.meme1.bottomText}/>
          <div className="card" id="BattleMemeDiv">
          <br/>
            <br/>
            <h1>vs.</h1>
            <button id="voteForMemeButton" href="#" className="btn btn-primary">Results go here!</button>
          </div>
          <MemeCard2 id={item.meme2._id} src={item.meme2.baseImgURL} topX={item.meme2.topX} topY={item.meme2.topY} bottomY={item.meme2.bottomY} bottomX={item.meme2.bottomX} topText={item.meme2.topText} bottomText={item.meme2.bottomText}/>        </div>
    ))}
    </div>
  }
}


export default BattleCard;

