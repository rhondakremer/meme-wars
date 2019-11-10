
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

    }

    render()
    {
        return <div >
        <div className="col-12" id="navbarDiv">
            <NavBar/>
            </div>

            <div className="row col-12" id="mainBodyDiv">


            <div id="userProfileDiv">
            <UserProfile componentDidMount={this.componentDidMount} sessionName={this.props.sessionName}/>

            </div>

            <div className="row" id="battleCardDiv">
            <div id="innerBattleCardDiv">
            <BattleCard/>
            

            </div> 
            </div>
            
            </div>

            </div>
    }
}

export default HomePage;