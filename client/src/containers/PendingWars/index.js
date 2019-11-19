import React, { Component } from 'react';
import UserProfile from '../../components/UserProfile';
 import Api from '../../utils/API';
import NavBar from '../../components/NavBar';
import MemeCard2 from "../../components/MemeCard2";
import PendingWars from "../../components/pendingWars";
import "./style.css";




class BattlePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: "",
            memeages:[],
            battles: null,
            initiators:[]
        }
    }

    componentDidMount() {
        Api.getUsers()
          .then(res => {
            let user = JSON.parse(localStorage.getItem('session'));
            this.setState({ currentUser: user.id }, () => 
            
            Api.getMyChallenges(this.state.currentUser)
            .then(res =>
              this.setState({battles:res.data}, () =>
              this.getBattleMemes())
            )
          )}); 

            }
    
      
          //this should be used with getPendingWarMemes below and getBattles() above to get the info to render the memes
          getBattleMemes() {
              let memeBattles = [];
              for (let i = 0; i < this.state.battles.length; i++) {
                memeBattles.push([this.state.battles[i].meme1, this.state.battles[i].meme2, this.state.battles[i].meme1Initiator])
              } this.setState({memeBattles: memeBattles}, () => this.getPendingWarMemes())
          }
          // don't forget this one with the one above!!
          getPendingWarMemes() {
              let memeages = [];
              let initiators = [];
              for (let i = 0; i < this.state.memeBattles.length; i++) {
                  Api.getMemeById(this.state.memeBattles[i][0])
                  .then(res => this.setState({memeages:[...this.state.memeages,res.data[0]]}))
                  Api.getOne(this.state.memeBattles[i][2])
                .then(res => this.setState({initiators:[...this.state.initiators,res.data.image]}))
              }
              this.getInitiatorImages();
              
          }

          getInitiatorImages() {
            
            // for (let i = 0; i < this.state.memeBattles.length; i++) {
                
            //     .then(console.log(this.state))
            // }
          }

    render() {
        return (<div >
            <div className="col-12" id="navbarDiv">
                <NavBar/>
            </div>
            <div className="row col-12" id="mainBodyDiv">
                <div id="userProfileDiv">
                    <UserProfile componentDidMount={this.componentDidMount} sessionName={this.props.sessionName} sessionImage={this.props.sessionImage} />
                </div>
                {this.state.memeages&&
                <div id="memeCardDivOnBattlePage">
                    {this.state.memeages.map((item, index) => (
                        <div>
                            {console.log(this.state)}
                        {/* <MemeCard id={item._id} src={item.baseImgURL} index={index} /> */}
                        
                        <PendingWars id={item._id} src={item.baseImgURL} topX={item.topX} topY={item.topY} bottomY={item.bottomY} bottomX={item.bottomX} topText={item.topText} bottomText={item.bottomText}/>
                        
                        </div>
                            ))}
                    
                </div>

                
               }
            </div>

        </div>);
    }
}

export default BattlePage;

