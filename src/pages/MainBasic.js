import "../styles/Main.scss";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import creativeImg from '../assets/images/3d-view-puzzle-pieces.png';
import globalmg from '../assets/images/globalmg.png';
import planetImg from '../assets/images/planetImg.png';
import rochetImg from '../assets/images/rochetImg.png';
import footerLogo from '../assets/images/footerLogo.png';
import H_logo from '../assets/images/white_logo.png';
import b_logo from '../assets/images/black_logo.png';

// import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Map from "../components/Map";


function App() {

  const [activeSection, setActiveSection] = useState(0);

  const handleScroll = () => {
    const sections = document.querySelectorAll('.box--item');
    let currentSectionIndex = 0; // 초기 섹션 인덱스 설정
    let headerShouldBeActive = false;

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - section.offsetHeight / 3) {
        currentSectionIndex = index;
        // item1 (index 0)이 아닐 경우에만 headerShouldBeActive를 true로 설정
        headerShouldBeActive = index !== 0;
      }
    });

    setActiveSection(currentSectionIndex);
    // header--box에 active 클래스를 추가할지 결정
    document.querySelector('.header--box').classList.toggle('active', headerShouldBeActive);
  };

  const scrollToSection = (sectionIndex) => {
    const sections = document.querySelectorAll('.box--item');
    if (sections[sectionIndex]) {
      window.scrollTo({
        top: sections[sectionIndex].offsetTop,
        behavior: 'smooth' // 부드러운 스크롤 효과
      });
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="main">
      <div className={`header--box`}>
        <div className="logo"
          onClick={() => scrollToSection(0)}
        ></div>
        <ul>
        {['VISION', 'MISSION', 'CREATIVE', 'GLOBAL', 'GOAL', 'CONTACT'].map((item, index) => (
          <li key={index} className={activeSection === index ? 'active' : ''}
          onClick={() => scrollToSection(index)}
          >
            {item}
          </li>
        ))}
        </ul>
      </div>
      {/* header--box --END-- */}
      <div className="body--box">
        <div className="box--item item1">
          <div className="title">
            <span>No.1</span> IDIOTS MAKE THE BEST GAMES
          </div>
          <div className="sub--title">
            <span>NI GAMES</span> is a game development startup founded in 2024.
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
          <div className="box--item--content--right">
            <div className="title">CREATIVE</div>
            <div className="sub--text">
              creative ideas, originality, non-stick challenging spirit,
              NIGAMES is about creating a future full of laughter and happiness with everyone in the world.
            </div>
          </div>
        </div>
        <div className="box--item item4">
          <div className="box--item--content--left">
            <div className="title">GLOBAL</div>
            <div className="sub--text">
            NIGAMES, which seeks the best, develops and delivers competitive games It will bring joy and happiness to all users around the world, We can always break down our own thoughts and flip them over if it's a better way.
            </div>
          </div>
          <div className="box--item--content--right">
            <img src={globalmg} alt="global_IMG"/>
          </div>
        </div>
        <div className="box--item item5">
          <p className="planet--img"><img src={planetImg} alt="planetImg" /></p>
          <p className="rochet--img"><img src={rochetImg} alt="rochetImg" /></p>
          <div className="box--item--goal">
            <div className="title">GOAL</div>
            <div className="goal--text-box">
              <p className="goal--text text1">
              It's something that users around the world have never been late Creating a game where you can find fun and unforgettable experiences
              </p>
              <p className="goal--text text2">
              We are the developer of Web2, Web3 Game.
              </p>
              <p className="goal--text text3">
              Our ideal is to entertain many customers with games.
              We want to create a game that anyone can easily learn and enjoy regardless of nationality, age, or gender.
              </p>
              <p className="goal--text text4">
              Blockchain games should provide a variety of games, giving users more choices to enjoy.
              The game provides several games using virtual currency, allowing users to enjoy a wider variety of games
              I will increase my fun and assets by playing games.
              </p>
            </div>
          </div>
        </div>
        <div className="box--item item6">
          <div className="title">CONTACT</div>
          <div className="contact--box">
            <div className="google--map" id="map">
              <Map/>
            </div>
            <div className="contact--info-list">
              <dl>
                <dt>Address</dt>
                <dd>
                Room 201-310 on the 2nd floor, 7-10, Songpa-daero 14, Songpa-gu, Seoul (Moonjeong-dong)
                </dd>
              </dl>
              <dl>
                <dt>publishing, business proposal</dt>
                <dd>
                master@nigames.co.kr
                </dd>
              </dl>
              <dl>
                <dt>game-related recruitment inquiries</dt>
                <dd>
                master@nigames.co.kr
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="box--item footer">
          <div className="footer--inner">
            <div className="left--content">
              <img src={footerLogo} alt="footer--logo" />
            </div>
            <div className="right--content">
              <p className="top--text">
                Trade name: NI Games Co., Ltd. I Representative: Kim Nak-il I Business Number: 419-86-03296
                EMAIL: master@nigames.co.kr I Address: Room 201-310 on the 2nd floor, 7-10, Songpa-daero 14beon-gil, Songpa-gu, Seoul (Moonjeong-dong)
              </p>
              <p className="bottom--text">
                Copyright ⓒ NIGAMES Inc. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* body--box --END-- */}
    </div>
  );
}

export default App;
