import React from "react";
import "./style.css";
import TextComponent from "../TextComponent/TextComponent";
import background1 from "../../assets/51439937017_28a550e739_k-removebg-preview 1.png";
import img1 from "../../assets/God-of-war-ragnarok--removebg-preview 1.svg";
import img2 from "../../assets/ed663199338341 1.svg";
import background2 from "../../assets/Suicidesquadteaser 1.png";
import background3 from "../../assets/HD-wallpaper-miles-morales-ps5-spiderman-watch-removebg-preview 1.png";
function SlideComponent() {
  return (
    <div className="slide-view">
      <TextComponent text="NEW GAMES " />

      <div className="slide-container">
        <div className="slide-section">
          <div className="card-slide-card first-card">
            <img src={img1} alt="" className="wars-img" />
            <img src={background1} alt="" className="avater-img" />
            <span className="text-card-avatar">
              Join in the new DLC with Kratos to learn more about him and his
              future.
            </span>
          </div>

          <div className="card-slide-card second-card">
            <img src={background2} alt="" className="avater-img " />
            <span className="text-card-avatar">
              Be part of the Suicide Squad and kill the Justice League! -Amanda
              Waller
            </span>
          </div>

          <div className="card-slide-card third-card">
            <img src={img2} alt="" className="wars-img  sbider" />
            <img
              src={background3}
              alt=""
              className="avater-img avater-img-third"
            />
            <span className="text-card-avatar text-card-avatar-third">
              Miles Morales discovers powers from his mentor, Peter Parker.
              Master his unique, bio-electric venom blast attacks.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideComponent;
