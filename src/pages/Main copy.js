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

import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Map from "../components/Map";


function App() {
  const headerRef = useRef(); // header--box 참조
  const navItemRefs = useRef([]); // nav items에 대한 참조를 저장할 배열
  const containerRef = useRef(); // 전체 컨테이너 참조
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 활성화된 item의 인덱스
  const isScrollingRef = useRef(false); // 스크롤 중인지 확인하는 플래그

  
  const handleScroll = (event) => {
    event.preventDefault(); // 스크롤 이벤트의 기본 동작을 방지
    
    if (!isScrollingRef.current) {
      const direction = event.deltaY > 0 ? 1 : -1;
      let nextIndex = currentIndex + direction;
      nextIndex = Math.max(0, Math.min(nextIndex, navItemRefs.current.filter(ref => ref).length - 1));
  
      setCurrentIndex(nextIndex);
      
      isScrollingRef.current = true;
  
      // 스크롤 이벤트 처리 후 isScrolling 리셋을 위한 딜레이 시간을 줄입니다.
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 150); // 딜레이 시간을 1000ms에서 150ms로 조정
    }
  };
  

  // currentIndex가 변경될 때마다 실행되는 useEffect
  useEffect(() => {
    // 페이지 스크롤 이동
    containerRef.current.style.transform = `translateY(-${currentIndex * 100}vh)`;

        // 모든 nav items에서 active 클래스 제거 후, 현재 index에 해당하는 item에만 active 클래스 추가
        navItemRefs.current.forEach((ref, index) => {
          if (ref) {
            ref.classList.remove("active");
          }
        });
    
        if (navItemRefs.current[currentIndex]) {
          navItemRefs.current[currentIndex].classList.add("active");
        }


    // header--box에 active 클래스 추가/제거
    const headerBox = document.querySelector('.header--box');
    if (currentIndex > 0) {
      headerBox.classList.add('active');
    } else {
      headerBox.classList.remove('active');
    }

    // 각 box--item에 대해 active 클래스 추가/제거
    document.querySelectorAll('.box--item').forEach((item, index) => {
      item.classList.remove('active');
      if (index === currentIndex) {
        item.classList.add('active');
      }
    });
  }, [currentIndex]);

  
  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('wheel', handleScroll);

    return () => {
      container.removeEventListener('wheel', handleScroll);
    };
  }, [handleScroll]);

  // 각 nav item 클릭 시 실행할 함수
// 각 nav item 클릭 시 실행할 함수
const navigateTo = (index) => {
  setCurrentIndex(index);

  // currentIndex가 0이면 item1 페이지로 이동하도록 설정
  if (index === 0) {
    setCurrentIndex(0);
  }
};


useEffect(() => {
  // 페이지 로드 시 맨 위로 스크롤
  window.scrollTo(0, 0);

  // 페이지 로드 시 currentIndex를 0으로 설정
  setCurrentIndex(0);
}, []);




  
  


  return (
    <div className="main">
      <div className="header--box" ref={headerRef}>
        <div className="logo" onClick={() => navigateTo(0)}></div>
        <ul>
          <li ref={el => navItemRefs.current[0] = el} onClick={() => navigateTo(0)}>VISION</li>
          <li ref={el => navItemRefs.current[1] = el} onClick={() => navigateTo(1)}>MISSION</li>
          <li ref={el => navItemRefs.current[2] = el} onClick={() => navigateTo(2)}>CREATIVE</li>
          <li ref={el => navItemRefs.current[3] = el} onClick={() => navigateTo(3)}>GLOBAL</li>
          <li ref={el => navItemRefs.current[4] = el} onClick={() => navigateTo(4)}>GOAL</li>
          <li ref={el => navItemRefs.current[5] = el} onClick={() => navigateTo(5)}>CONTACT</li>
        </ul>
      </div>
      {/* header--box --END-- */}
      <div className="body--box" ref={containerRef} style={{ transformStyle: 'preserve-3d', transition: 'transform 0.7s',}}>
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
            <div className="right--content"></div>
          </div>
        </div>
      </div>
      {/* body--box --END-- */}
    </div>
  );
}

export default App;
