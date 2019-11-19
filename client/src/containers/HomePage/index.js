
import React, {Component} from 'react';
import UserProfile from '../../components/UserProfile';
import Api from '../../utils/API';
import NavBar from '../../components/NavBar';
import "./style.css";
import BattleCard from "../../components/BattleCardComponent";

class HomePage extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            currentUser: ""
        }
    }

    componentDidMount()
    { 
      /*  Api.getUser().then
        (currentUser=>{
            this.setState({currentUser});
        })  */
          // how to get all battles in feed
    Api.getBattles()
    .then( res => 
      this.setState({battles:res.data}, () => 
      this.getBattleMemes()
      ))
    }


    //this should be used with getPendingWarMemes below and getBattles() above to get the info to render the memes
    getBattleMemes() {
        let memeBattles = [];
        for (let i = 0; i < this.state.battles.length; i++) {
          memeBattles.push([this.state.battles[i].meme1, this.state.battles[i].meme2])
        } this.setState({memeBattles: memeBattles}, () => this.getPendingWarMemes())
    }
    // don't forget this one with the one above!!
    getPendingWarMemes() {
        let memeages = [];
        for (let i = 0; i < this.state.memeBattles.length; i++) {
            Api.getMemeById(this.state.memeBattles[i][0])
            .then(res => memeages.push(res.data))
            .then(this.setState({memeages:memeages}, () => console.log("so fun", this.state)))
        }
    }



    render()
    {
        return <div >
        <div className="col-12" id="navbarDiv">
            <NavBar/>
            </div>

            <div className="row col-12" id="mainBodyDiv">


            <div id="userProfileDiv">
            <UserProfile componentDidMount={this.componentDidMount} sessionName={this.props.sessionName} sessionImage={this.props.sessionImage}/>

            </div>
                {this.state.battles &&
                    <div className="row" id="battleCardDiv">
                        <div id="innerBattleCardDiv">

                            <BattleCard />


                        </div>
                    </div>
                }
            </div>
       
            </div>
    }
}

export default HomePage;