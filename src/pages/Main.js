import "../styles/Main.scss";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import creativeImg from '../assets/images/3d-view-puzzle-pieces.png';
import H_logo from '../assets/images/white_logo.png';
import b_logo from '../assets/images/black_logo.png';

function App() {

  const containerRef = useRef();
  const headerRef = useRef(); // header--box에 대한 참조
  const totalItems = 3; // 총 item의 수
  let currentIndex = 0; // 현재 활성화된 item의 인덱스
  let isScrolling = false; // 스크롤 중인지 확인하는 플래그

  const updateHeaderClass = () => {
    const headerElement = headerRef.current;
    setTimeout(() => {
      if (currentIndex > 0) {
        // item1을 벗어난 경우, 'active' 클래스 추가
        headerElement.classList.add('active');
      } else {
        // item1 내에 있는 경우, 'active' 클래스 제거
        headerElement.classList.remove('active');
      }
    }, 200); 
  };

  const scrollHandler = (event) => {
    if (isScrolling) return; // 이미 스크롤 중이면 무시
    isScrolling = true;

    // 스크롤 방향에 따라 currentIndex 조정
    if (event.deltaY > 0 && currentIndex < totalItems - 1) {
      currentIndex++; // 아래로 스크롤
    } else if (event.deltaY < 0 && currentIndex > 0) {
      currentIndex--; // 위로 스크롤
    }

    updateHeaderClass();

    // 해당 섹션으로 스크롤 이동
    containerRef.current.style.transform = `translateY(-${currentIndex * 100}vh)`;

    // 스크롤 애니메이션 후 isScrolling 리셋
    setTimeout(() => {
      isScrolling = false;
    }, 1000); // 스크롤 애니메이션 시간에 맞춰 조정
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('wheel', scrollHandler);

    return () => {
      container.removeEventListener('wheel', scrollHandler);
    };
  }, []);

  return (
    <div className="main">
      <div className="header--box" ref={headerRef}>
        <div className="logo"></div>
        <ul>
          <li>VISION</li>
          <li>MISSION</li>
          <li>GOAL</li>
          <li>CONTACT</li>
        </ul>
      </div>
      {/* header--box --END-- */}
      <div className="body--box" ref={containerRef} style={{ transformStyle: 'preserve-3d', transition: 'transform 1s' }}>
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
