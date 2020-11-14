import React, { useState, useEffect } from 'react';
import UserProfile from '../../components/UserProfile';
import Api from '../../utils/API';
import NavBar from '../../components/NavBar';
import MemeCard2 from "../../components/MemeCard2";
import "./style.css";

const BattlePage = (props) => {
    const [user, setUser] = useState(null);
    const [memes, setMemes] = useState([]);

    useEffect(() => {
        let currentUser = JSON.parse(localStorage.getItem('session'));
        setUser(currentUser.id);
        getMemes();
    }, [user]);

    const getMemes = () => {
        Api.getMemes(user)
            .then(res => {
                setMemes(res.data)
            })
    }

    return (
        <div>
            <div className="col-12" id="navbarDiv">
                <NavBar />
            </div>
            <div className="row col-12" id="mainBodyDiv">
                <div id="userProfileDiv">
                    <UserProfile sessionName={props.sessionName} sessionImage={props.sessionImage} />
                </div>
                <div id="memeCardDivOnBattlePage">
                    {memes.map((item) => (
                        <div key={item._id}>
                            <MemeCard2 id={item._id} key={item._id} src={item.baseImgURL} topX={item.topX} topY={item.topY} bottomY={item.bottomY} bottomX={item.bottomX} topText={item.topText} bottomText={item.bottomText} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BattlePage;

