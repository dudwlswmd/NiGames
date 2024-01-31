import "../styles/Main.scss";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import creativeImg from '../assets/images/3d-view-puzzle-pieces.png';
import H_logo from '../assets/images/white_logo.png';
import b_logo from '../assets/images/black_logo.png';

function App() {

  return (
    <div className="main">
      <div className="header--box">
        <div className="logo"><img src={H_logo} alt="logoImg"/></div>
        <ul>
          <li>VISION</li>
          <li>MISSION</li>
          <li>GOAL</li>
          <li>CONTACT</li>
          <li>CONTACT</li>
        </ul>
      </div>
      {/* header--box --END-- */}
      <div className="body--box">
        <div className="box--item item1">
          <div className="title">
            <span>No.1</span> IDIOTS MAKE THE BEST GAMES
          </div>
          <div className="sub--title">
            <span>NIGAMES</span> is a game development startup founded in 2024.
          </div>
          <div className="sub--text">
            NIGAMES is a developer and publisher specializing in WEB2 and WEB3 games, and with unique ideas, it continues to challenge the global game market and new technologies
            We strive to make games for users of all tastes.
            </div>
        </div>
        <div className="box--item item2">
          <div className="gnb--title">MISSION</div>
          <div className="title">OUR GOOD DAYS BECOME A BETTER FUTURE</div>
          <div className="sub--text">
            We strive to create games for users of all ages, platforms, and tastes.
            We never think about the past.
            <span>
              For the future Yes! We are fools who work together to do so.
            </span>
          </div>
        </div>
        <div className="box--item item3">
          <div className="box--item--content--left">
            <img src={creativeImg} alt="CREATIVE_IMG"/>
          </div>
          <div className="box--item--content--left">
            <div className="title">CREATIVE</div>
            <div className="sub--text">
              creative ideas, originality, non-stick challenging spirit,
              NIGAMES is about creating a future full of laughter and happiness with everyone in the world.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
