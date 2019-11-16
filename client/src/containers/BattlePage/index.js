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
            currentUser: "",
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
        return (<div >
        <div className="col-12" id="navbarDiv">
            <NavBar/>
            </div>
            <div className="row col-12" id="mainBodyDiv">
            <div id="userProfileDiv">
            <UserProfile componentDidMount={this.componentDidMount} sessionName={this.props.sessionName} sessionImage={this.props.sessionImage}/>
            </div>
            <div id="memeCardDiv">
            {this.props.createdMemes.map((item, index) => (
                                <MemeCard id={item._id} src={item.baseImgURL} index={index}/>
                            ))}
            <MemeCard id={this.props.createdMemes[1]
            ._id} src={this.props.createdMemes[1].baseImgURL}/>
            </div>
            </div>

            </div>);
    }
}

export default BattlePage;

