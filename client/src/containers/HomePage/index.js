
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
        Api.getOne("5dc394b17c15a9097f07988c").then
        (currentUser=>{
            this.setState({currentUser: currentUser.data[0], 
                currentUserName: currentUser.data.name});
            console.log("this says current user is " + (JSON.stringify(this.state.currentUserName)))
        })
    }

    render()
    {
        return <div >
        <div className="col-12" id="navbarDiv">
            <NavBar/>
            </div>

            <div className="row col-12" id="mainBodyDiv">

            <UserProfile componentDidMount={this.componentDidMount} name={this.state.currentUserName} />
            </div>

            <div className="row" id="battleCardDiv">
            <div id="innerBattleCardDiv">
                
            <BattleCard/>
            <BattleCard/>
            <BattleCard/>
            <BattleCard/>
            <BattleCard/>
            <BattleCard/>

            </div> 
            </div>
            
            </div>

            </div>
    }
}

export default HomePage;