import React, {Component} from 'react';
import UserProfile from '../../components/UserProfile';
// import Api from '../../utils/API';
import NavBar from '../../components/NavBar';
import MemeCard from "../../components/MemeCard"
import "./style.css"




class BattlePage extends Component
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
        // Api.getUser().then
        // (currentUser=>{
        //     this.setState({currentUser});
        // })
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
            <div id="memeCardDiv">
            <MemeCard/>
            <MemeCard/>
            <MemeCard/>
            <MemeCard/>
            <MemeCard/>
            <MemeCard/>
            <MemeCard/>
            <MemeCard/>

            </div>
            </div>

            </div>
    }
}

export default BattlePage;

