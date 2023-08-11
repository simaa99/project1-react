import React from "react";
import "./style.css";
import TextComponent from "../TextComponent/TextComponent";
import background1 from "../../assets/51439937017_28a550e739_k-removebg-preview 1.png";
import img1 from "../../assets/God-of-war-ragnarok--removebg-preview 1.svg";
import background2 from "../../assets/Suicidesquadteaser 1.png";
import background3 from "../../assets/HD-wallpaper-miles-morales-ps5-spiderman-watch-removebg-preview 1.png";
import CardComponent from "../CardComponent/CardComponent";
function SlideComponent() {
  return (
    <div className="slide-view">
      <TextComponent text="NEW GAMES " />
      <div class="horizontal-scroll-section">
        <div className="card-view-section">
          <CardComponent
            imageUrl={background1}
            imageUrl2={img1}
            text="Join in the new DLC with Kratos to learn more about him and his future."
            imagePosition="right"
            textPosition="left"
            backgroundImg="back1"
          />
          <CardComponent
            imageUrl={background2}
            text="Be part of the Suicide Squad and kill the Justice League!
        -Amanda Waller"
            imagePosition="right"
            textPosition="right"
            backgroundImg="back2"
          />
          <CardComponent
            imageUrl={background3}
            text="Miles Morales discovers powers from his mentor, Peter Parker. Master his unique, bio-electric venom blast attacks."
            imagePosition="left"
            textPosition="right"
            backgroundImg="back3"
          />
        </div>
      </div>
    </div>
  );
}

export default SlideComponent;
