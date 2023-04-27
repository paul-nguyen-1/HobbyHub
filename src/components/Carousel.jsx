import React from "react";
import "./Carousel.css";
import yelp from "/yelp.png";
import uber from "/uber.png";
import hellofresh from "/hellofresh.png";
import homechef from "/homechef.png";
import wholefoods from "/wholefoods.png";
import heb from "/heb.png";
import blueapron from "/blueapron.png";

function Carousel() {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <img src={heb} height="35" width="75" alt="" />
        </div>
        <div class="slide">
          <img src={yelp} height="35" width="75" alt="" />
        </div>
        <div class="slide">
          <img src={uber} height="35" width="75" alt="" />
        </div>
        <div class="slide">
          <img src={hellofresh} height="35" width="75" alt="" />
        </div>
        <div class="slide">
          <img src={homechef} height="35" width="75" alt="" />
        </div>
        <div class="slide">
          <img src={wholefoods} height="35" width="75" alt="" />
        </div>
        <div class="slide">
          <img src={blueapron} height="35" width="75" alt="" />
        </div>
        <div className="slide">
          <img src={heb} height="35" width="75" alt="" />
        </div>
        <div class="slide">
          <img src={yelp} height="35" width="75" alt="" />
        </div>
        <div class="slide">
          <img src={uber} height="35" width="75" alt="" />
        </div>
        <div class="slide">
          <img src={hellofresh} height="35" width="75" alt="" />
        </div>
        <div class="slide">
          <img src={homechef} height="35" width="75" alt="" />
        </div>
        <div class="slide">
          <img src={wholefoods} height="35" width="75" alt="" />
        </div>
        <div class="slide">
          <img src={blueapron} height="35" width="75" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
