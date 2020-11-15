import React, { useState, useEffect } from 'react';
import UserProfile from '../../components/UserProfile';
import NavBar from '../../components/NavBar';
import BattleCard from "../../components/BattleCardComponent";
import Api from '../../utils/API';
import "./style.scss";

const HomePage = (props) => {
  
  const [wars, setWars] = useState([]);

  useEffect(() => {
    getBattles();
  }, []);

  const getBattles = () => {
    Api.getBattles()
      .then(res => {
        makeWars(res.data)
      })
  }

  const makeWars = (battles) => {
    let warsArray = [];
    for (let i = 0; i < battles.length; i++) {
      if (battles[i].meme1 && battles[i].meme2) {
        warsArray.push(battles[i])
      }
    }
    getMemeImages(warsArray);
  }

  const getMemeImages = async (warsArray) => {
    for (const war of warsArray) {
      let meme1 = await Api.getMemeById(war.meme1);
      war.meme1 = meme1.data[0];
      let meme2 = await Api.getMemeById(war.meme2);
      war.meme2 = meme2.data[0];
    }
    setWars(warsArray);
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
        <div id="homepageDIV">
          {wars.length > 0 &&
            <div className="row" id="battleCardDiv">
              <div id="innerBattleCardDiv">
                <BattleCard wars={wars} />
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default HomePage;