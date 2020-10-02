import React, { Component } from 'react';
import UserProfile from '../../components/UserProfile';
import Api from '../../utils/API';
import NavBar from '../../components/NavBar';
import "./style.css";
import BattleCard from "../../components/BattleCardComponent";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "",
      wars: []
    }
  }

  componentDidMount() {
    // get all battles in feed
    Api.getBattles()
      .then(res =>
        this.setState({ battles: res.data }, () =>
          this.getBattleMemes(() => {
            for (let i = 0; i < this.state.wars.length; i++) {
              Api.getMemeById(this.state.wars[i].meme1)
                .then(res => {
                  // come back to this and figure out what is going on 
                  this.setState({
                    wars: this.state.wars.map((item, index) => {
                      if (index === i)
                        item.meme1 = res.data[0];
                      return item;
                    })
                  })
                })

              Api.getMemeById(this.state.wars[i].meme2)
                .then(res => this.setState({
                  wars: this.state.wars.map((item, index) => {
                    if (index === i)
                      item.meme2 = res.data[0];
                    return item;
                  })
                }))
            }
          })
        )
      )
  }

  getBattleMemes(onComplete) {
    let warsArr = [];
    for (let i = 0; i < this.state.battles.length; i++) {
      let war = {
        meme1: "",
        meme2: "",
        meme1votes: "",
        meme2votes: "",
        id: "",
        voted: []
      };

      if (this.state.battles[i].meme1 && this.state.battles[i].meme2) {
        war.meme1 = this.state.battles[i].meme1;
        war.meme2 = this.state.battles[i].meme2;
        war.meme1votes = this.state.battles[i].meme1votes;
        war.meme2votes = this.state.battles[i].meme2votes;
        war.id = this.state.battles[i]._id;
        war.voted = this.state.battles[i].voted;
        warsArr.push(war);
      }
    }
    this.setState({ wars: warsArr }, () => {
      onComplete();
    })
  }

  render() {
    return <div>
      <div className="col-12" id="navbarDiv">
        <NavBar />
      </div>

      <div className="row col-12" id="mainBodyDiv">
        <div id="userProfileDiv">
          <UserProfile componentDidMount={this.componentDidMount} sessionName={this.props.sessionName} sessionImage={this.props.sessionImage} />
        </div>
        <div id="homepageDIV">
          {this.state.battles && this.state.wars.length > 0 &&
            <div className="row" id="battleCardDiv">
              <div id="innerBattleCardDiv">
                <BattleCard wars={this.state.wars} />
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  }
}

export default HomePage;