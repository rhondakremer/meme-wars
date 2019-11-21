
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
            currentUser: "",
            wars:[]
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
      this.getBattleMemes(()=>{
        for(let i = 0; i < this.state.wars.length; i++){
            Api.getMemeById(this.state.wars[i].meme1).then(res => this.setState({wars:this.state.wars.map((item,index)=>{
                if(index===i)
                  item.meme1=res.data[0];
              return item;
              })}))
            Api.getMemeById(this.state.wars[i].meme2).then(res => this.setState({wars:this.state.wars.map((item,index)=>{
                if(index===i)
                  item.meme2=res.data[0];
              return item;
              })}))
        }
      })
      ))
    //   Api.getMemeById("5dd1c5c575a5da4446f05ffc")
    //   .then(res => console.log("Iam the meme", res.data))
    }

    getBattleMemes(onComplete) {
        let warsArr=[]
        for (let i = 0; i < this.state.battles.length; i++) {
          let war={
              meme1:"",
              meme2:""
          };
          if(this.state.battles[i].meme1 && this.state.battles[i].meme2)
          {
            war.meme1=this.state.battles[i].meme1
            war.meme2=this.state.battles[i].meme2
            warsArr.push(war)
          }
        } this.setState({wars: warsArr}, () => {
            onComplete()
          })

    //this should be used with getPendingWarMemes below and getBattles() above to get the info to render the memes
    // getBattleMemes() {
    //     let memeBattles = [];
    //     for (let i = 0; i < this.state.battles.length; i++) {
    //       memeBattles.push([this.state.battles[i].meme1, this.state.battles[i].meme2])
    //     } this.setState({memeBattles: memeBattles}, () => this.getPendingWarMemes())
    // }
    // don't forget this one with the one above!!
    // getPendingWarMemes() {
    //     let memeages = [];
    //     for (let i = 0; i < this.state.memeBattles.length; i++) {
    //         Api.getMemeById(this.state.memeBattles[i][0])
    //         .then(res => memeages.push(res.data))
    //         .then(this.setState({memeages:memeages}, () => console.log("so fun", this.state)))
    //     }
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
            <div id="homepageDIV">
                {this.state.battles && this.state.wars.length>0 &&
                    <div className="row" id="battleCardDiv">
                        <div id="innerBattleCardDiv">
                            <BattleCard wars={this.state.wars}/>
                        </div>
                    </div>
                }
                </div>
            </div>
       
            </div>
    }
}

export default HomePage;