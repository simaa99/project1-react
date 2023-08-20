import React from "react";
import "./style.css";
import TextComponent from "../TextComponent/TextComponent";
import freiendImg from "../../assets/FRIENDS 1.svg";
import mostImg from "../../assets/FRIENDS (1).svg";
import LastPayloadComponent from "../LastPayloadComponent/LastPayloadComponent";
import players from "../../mock/players";
function OtherSectionComponent() {
  return (
    <div className="bottom-section-game">
      <div className="last-played-view">
        <TextComponent text="last played" />
        <div>
          {players.map((player) => (
            <LastPayloadComponent
              key={player.id}
              CircleImg={player.CircleImg}
              TextInput={player.TextInput}
              className="palyer-game"
            />
          ))}
        </div>
      </div>
      <div className="most-recent-view">
        <TextComponent text="most recent trophy" />
        <div className="most-img">
          <img src={mostImg} alt="" className="most-icon" />
          <div className="most-text">
            <span>assassin's creed odyssey</span>
            <span>last played: 34 hours ago</span>
          </div>
        </div>
      </div>
      <div className="frends-view">
        <TextComponent text="friends" />
        <img src={freiendImg} alt="" />
      </div>
    </div>
  );
}

export default OtherSectionComponent;
