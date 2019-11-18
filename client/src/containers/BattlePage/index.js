import React, { Component } from 'react';
import UserProfile from '../../components/UserProfile';
// import Api from '../../utils/API';
import NavBar from '../../components/NavBar';
import MemeCard from "../../components/MemeCard";
import MemeCard2 from "../../components/MemeCard2";
import "./style.css";




class BattlePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: "",
        }
    }

    componentDidMount() {
        // Api.getUser().then
        // (currentUser=>{
        //     this.setState({currentUser});
        // })
    }

    render() {
        return (<div >
            <div className="col-12" id="navbarDiv">
                <NavBar />
            </div>
            <div className="row col-12" id="mainBodyDiv">
                <div id="userProfileDiv">
                    {console.log("ASdfasdf" + this.props.createdMemes)}
                    <UserProfile componentDidMount={this.componentDidMount} sessionName={this.props.sessionName} sessionImage={this.props.sessionImage} />
                </div>
                <div id="memeCardDivOnBattlePage">
                    {this.props.createdMemes.map((item, index) => (
                        <div>
                            {console.log(item.bottomX)}
                        {/* <MemeCard id={item._id} src={item.baseImgURL} index={index} /> */}
                        <MemeCard2 id={item._id} src={item.baseImgURL} topX={item.topX} topY={item.topY} bottomY={item.bottomY} bottomX={item.bottomX} topText={item.topText} bottomText={item.bottomText}/>
                        </div>
                            ))}
                    
                </div>
            </div>

        </div>);
    }
}

export default BattlePage;

