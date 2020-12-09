import React, { Component } from 'react';
import Api from '../../utils/API';
import "./style.scss"
import MemeCard2 from "../MemeCard2";

class BattleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "",
      wars: this.props.wars
    }
  }

  componentDidMount() {
    Api.getUsers()
      .then(res => {
        let user = JSON.parse(localStorage.getItem('session'));
        this.setState({ currentUser: user.id }, () => console.log("current user is ", this.state.currentUser))
      });

    //   Api.getBattles()
    // .then( res => 
    //   this.setState({battles:res.data}, () =>
    //   console.log(this.state.battles)))

    // how to get all battles in feed
    // Api.getBattles()
    //   .then(res =>
    //     console.log("these are all the battles in the feed", res.data)
    //   )

    // get all memes other users have made of you-- to get current user replace hard coded with this.state.currentUser inside of a callback for this.set.state in Api.getusers above
    // Api.getMemesOfMe("5dcb1e7bcc23167d28f414dd")
    //   .then(res =>
    //     console.log("there are memes of me", res.data))

    // this pulls from feed where a meme was made of you but you have not yet made one of the other person- same rules for getting currentuser apply as above
    // Api.getMyChallenges("5dcc9658ff88640870a151b1")
    //   .then(res =>
    //     console.log("I am user2 in the feed", res.data))

    // Api.getMemeById("5dd1c5c575a5da4446f05ffc")
    //   .then(res => console.log("Iam the meme", res.data))
  }

  onClick = (event) => {
    let currentScore = Number(event.target.getAttribute("data-memescore"))
    let index = Number(event.target.getAttribute("data-index"));
    let newScore = currentScore + 1;
    if (event.target.getAttribute("data-whichmeme") === "meme1") {
      Api.add1Point(event.target.getAttribute("data-feedid"), {
        meme1votes: newScore
      })
        .then(this.state.wars[index].meme1votes = newScore)
        .then(this.state.wars[index].voted = [...this.state.wars[index].voted, this.state.currentUser])
        .then(this.forceUpdate());

      Api.addVoter(event.target.getAttribute("data-feedid"), {
        $push: { voted: this.state.currentUser }
      })
        .then(res => console.log(res));
    }
    else {
      Api.add1Point(event.target.getAttribute("data-feedid"), {
        meme2votes: newScore
      })
        .then(this.state.wars[index].meme2votes = newScore)
        .then(this.state.wars[index].voted = [...this.state.wars[index].voted, this.state.currentUser])
        .then(this.forceUpdate());

      Api.addVoter(event.target.getAttribute("data-feedid"), {
        $push: { voted: this.state.currentUser }
      }).then(res => console.log(res.data, this.state));
    }
  }

  render() {
    return <div id="additionalDIV">
      {this.props.wars.map((item, index) => (
        <div className="row" id="battleRow" key={item.meme1._id}>
          <MemeCard2 id={item.meme1._id} src={item.meme1.baseImgURL} topX={item.meme1.topX} topY={item.meme1.topY} bottomY={item.meme1.bottomY} bottomX={item.meme1.bottomX} topText={item.meme1.topText} bottomText={item.meme1.bottomText} />
          <div className="card" id="BattleMemeDiv">
            <br />
            <br />
            <h1>{this.state.wars[index].meme1votes} to {this.state.wars[index].meme2votes}</h1>

            {this.state.wars[index].voted.includes(this.state.currentUser) === false &&
              <div id="buttons">
                <h5>Who did it better??</h5>
                <button id="voteForMeme1Button" href="#" className="btn btn-primary makeThemPink" onClick={this.onClick} data-feedid={item._id} data-whichmeme="meme1" data-memescore={item.meme1votes} data-index={index}>{"<"}--</button>
                <button id="voteForMeme2Button" href="#" className="btn btn-primary makeThemPink" onClick={this.onClick} data-feedid={item._id} data-whichmeme="meme2" data-memescore={item.meme2votes} data-index={index}>--{">"}</button>
              </div>
            }
            {this.state.wars[index].voted.includes(this.state.currentUser) &&
              <div>Thanks for voting!</div>
            }
          </div>
          <MemeCard2 id={item.meme2._id} src={item.meme2.baseImgURL} topX={item.meme2.topX} topY={item.meme2.topY} bottomY={item.meme2.bottomY} bottomX={item.meme2.bottomX} topText={item.meme2.topText} bottomText={item.meme2.bottomText} />
        </div>
      ))}
    </div>
  }
}

export default BattleCard;

