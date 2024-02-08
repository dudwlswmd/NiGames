import "../styles/Main.scss";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import creativeImg from '../assets/images/3d-view-puzzle-pieces.png';
import globalmg from '../assets/images/globalmg.png';
import planetImg from '../assets/images/planetImg.png';
import rochetImg from '../assets/images/rochetImg.png';
import footerLogo from '../assets/images/footerLogo.png';
import arrdown from '../assets/images/arrdown.webp';
import H_logo from '../assets/images/white_logo.png';
import b_logo from '../assets/images/black_logo.png';
//비디오
import videoDemo from '../assets/nigamesVideo.mp4';

// import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Map from "../components/Map";
import Typical from 'react-typical';
import Typist from 'react-typist';

function App() {

  const [activeSection, setActiveSection] = useState(0); // 섹션 인덱스를 기반으로 상태를 설정합니다.
  const sectionsRef = useRef([]); // 섹션 DOM 레퍼런스를 저장하기 위한 ref

  const handleScroll = () => {
    const sections = Array.from(document.querySelectorAll('.box--item'));
    let closestSectionIndex = null;
    let minDistance = Infinity;

    sections.forEach((section, index) => {
      const sectionTop = section.getBoundingClientRect().top; // 뷰포트 기준 상단 위치
      const distance = Math.abs(sectionTop);
      if (distance < minDistance) {
        minDistance = distance;
        closestSectionIndex = index;
      }
    });

    if (closestSectionIndex !== null && closestSectionIndex !== activeSection) {
      setActiveSection(closestSectionIndex); // 상태 업데이트로 스크롤 이동 처리
    }

    const headerBox = document.querySelector('.header--box');
    if (headerBox) {
      headerBox.classList.toggle('active', closestSectionIndex > 0);
    }
  };





  // useEffect(() => {
  //   let lastScrollTime = Date.now(); // 마지막 스크롤 이벤트 시간을 저장
  //   const cooldownPeriod = 500; // 다음 스크롤 이벤트까지의 쿨다운 기간 (1000ms = 1초)
  
  //   const handleWheel = (e) => {
  //     const now = Date.now();
  //     if (now - lastScrollTime < cooldownPeriod) {
  //       // 쿨다운 기간 내의 이벤트는 무시
  //       e.preventDefault();
  //       return;
  //     }
  
  //     // 쿨다운 기간이 지났으므로 스크롤 처리
  //     e.preventDefault();
  //     const direction = e.deltaY > 0 ? 1 : -1; // 휠 방향에 따라 이동 방향 결정
  //     let newIndex = activeSection + direction; // 새 인덱스 계산
  //     newIndex = Math.max(0, Math.min(sectionsRef.current.length - 1, newIndex)); // 범위 내에서 인덱스 조정
  
  //     scrollToSection(newIndex); // 새 인덱스에 따라 섹션 이동
  //     lastScrollTime = now; // 마지막 스크롤 시간 업데이트
  //   };
  
  //   window.addEventListener('wheel', handleWheel, { passive: false });
  //   return () => {
  //     window.removeEventListener('wheel', handleWheel);
  //   };
  // }, [activeSection, sectionsRef]);




  // useEffect(() => {
  //   let lastScrollTime = Date.now(); // 마지막 스크롤 이벤트 시간을 저장
  //   const cooldownPeriod = 1000; // 다음 스크롤 이벤트까지의 쿨다운 기간 (1000ms = 1초)
  
  //   const handleWheel = (e) => {
  //     const now = Date.now();
  //     if (now - lastScrollTime < cooldownPeriod) {
  //       // 쿨다운 기간 내의 이벤트는 무시
  //       e.preventDefault();
  //       return;
  //     }
  
  //     // 쿨다운 기간이 지났으므로 스크롤 처리
  //     e.preventDefault();
  //     const direction = e.deltaY > 0 ? 1 : -1; // 휠 방향에 따라 이동 방향 결정
  //     let newIndex = activeSection + direction; // 새 인덱스 계산
  //     newIndex = Math.max(0, Math.min(sectionsRef.current.length - 1, newIndex)); // 범위 내에서 인덱스 조정
  
  //     scrollToSection(newIndex); // 새 인덱스에 따라 섹션 이동
  //     lastScrollTime = now; // 마지막 스크롤 시간 업데이트
  //   };

  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     const windowHeight = window.innerHeight;
  //     const documentHeight = document.documentElement.scrollHeight;

  //     // 스크롤이 화면 최하단에 닿았을 때만 실행
  //     if (scrollY + windowHeight >= documentHeight) {
  //       scrollToSection(sectionsRef.current.length - 1);
  //     }
  //   };

  //   window.addEventListener('wheel', handleWheel, { passive: false });
  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('wheel', handleWheel);
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [activeSection, sectionsRef]);



  useEffect(() => {
    let lastScrollTime = Date.now(); // 마지막 스크롤 이벤트 시간을 저장
    const cooldownPeriod = 1000; // 다음 스크롤 이벤트까지의 쿨다운 기간 (1000ms = 1초)
  
    const handleWheel = (e) => {
      const now = Date.now();
      if (now - lastScrollTime < cooldownPeriod) {
        // 쿨다운 기간 내의 이벤트는 무시
        e.preventDefault();
        return;
      }
  
      // 쿨다운 기간이 지났으므로 스크롤 처리
      e.preventDefault();
      const direction = e.deltaY > 0 ? 1 : -1; // 휠 방향에 따라 이동 방향 결정
      let newIndex = activeSection + direction; // 새 인덱스 계산
      newIndex = Math.max(0, Math.min(sectionsRef.current.length - 1, newIndex)); // 범위 내에서 인덱스 조정
  
      scrollToSection(newIndex); // 새 인덱스에 따라 섹션 이동
      lastScrollTime = now; // 마지막 스크롤 시간 업데이트
    };
  
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
  
      // 스크롤이 화면 최하단에 닿았을 때만 실행
      if (scrollY + windowHeight >= documentHeight) {
        scrollToSection(sectionsRef.current.length - 1);
      }
    };
  
    const scrollToSection = (index) => {
      const section = sectionsRef.current[index];
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(index); // 활성 섹션 업데이트
  
        // 모든 아이템에서 active 클래스 제거
        sectionsRef.current.forEach((item, i) => {
          if (i !== index) {
            item.classList.remove('active');
          }
        });
  
        // 현재 아이템에 active 클래스 추가
        section.classList.add('active');
      }
    };
  
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection, sectionsRef]);
  

  

  

  
  













  const scrollToSection = (index) => {
    const section = sectionsRef.current[index];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(index); // 활성 섹션 업데이트
    }
  };

  // 스크롤 이벤트와 마우스 휠 이벤트에 따라 activeSection 업데이트
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);




  const scrollToItem2 = () => {
    // item2 요소의 위치를 계산
    const item2Position = sectionsRef.current[1].offsetTop;

    // 스크롤 이동
    window.scrollTo({
      top: item2Position,
      behavior: 'smooth' // 부드러운 스크롤을 위해 smooth 옵션 사용
    });
  };



  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // 컴포넌트가 마운트된 후에 애니메이션 클래스를 활성화
    setIsActive(true);
  }, []);


  const [typingFinished, setTypingFinished] = useState(false);

  // 타이핑이 완료되었을 때 호출될 함수
  const handleTypingDone = () => {
    setTypingFinished(true); // 타이핑 완료 상태를 true로 설정
  };


  const [showSecondMessage, setShowSecondMessage] = useState(false);

  useEffect(() => {
    // 첫 번째 메시지 타이핑 시간 + 지연 시간을 기준으로 두 번째 메시지를 표시
    const timer = setTimeout(() => {
      setShowSecondMessage(true);
    }, 2000 + 1000); // "MISSION" 타이핑 시간 (1000ms) + 지연 시간 (1000ms)

    return () => clearTimeout(timer);
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
              onClick={() => {
                scrollToSection(index);
                // 클릭한 아이템에 대해 active 클래스 추가
                const sections = sectionsRef.current;
                sections.forEach((section, i) => {
                  if (i === index) {
                    section.classList.add('active');
                  } else {
                    section.classList.remove('active');
                  }
                });
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      {/* header--box --END-- */}
      <div className="body--box">
        <div className="box--item item1" ref={el => sectionsRef.current[0] = el}>
          {/* <div className="title">
            <span>No.1</span> IDIOTS MAKE THE BEST GAMES
          </div> */}
          <video
            src={videoDemo}
            autoPlay
            muted
            loop
            playsInline
          ></video>
          <div className="title">
            <span>No.1</span>
            <div className={`typist-container ${typingFinished ? 'no-cursor' : ''}`}>
              <Typist avgTypingDelay={60} onTypingDone={handleTypingDone}>
                IDIOTS MAKE THE BEST GAMES<Typist.Backspace count={5} delay={1000} /> GAMES
              </Typist>
            </div>
            {/* <p>{' '}</p>
            <Typical
              steps={['', 1000, 'IDIOTS MAKE THE BEST GAMES', 1000]}
              loop={1}
            /> */}
          </div>
          <div className="sub--title">
            <span>NI GAMES</span> is a game development startup founded in 2024.
          </div>
          <div className="sub--text">
            NIGAMES is a developer and publisher specializing in WEB2 and WEB3 games, and with unique ideas, it continues to challenge the global game market and new technologies
            We strive to make games for users of all tastes.
          </div>
          <div class="container" onClick={scrollToItem2}>
            <div class="chevron"></div>
            <div class="chevron"></div>
            <div class="chevron"></div>
            <span class="text">Scroll down</span>
          </div>
        </div>
        <div className="box--item item2" ref={el => sectionsRef.current[1] = el}>
          <div className="gnb--title">
            <Typical
              steps={['', 1000, 'MISSION', 1000]}
              loop={1}
              wrapper="div"
            />
          </div>
          {showSecondMessage && (
        <div className="title">
          <Typical
            steps={['OUR GOOD DAYS BECOME A BETTER FUTURE', 1000]}
            loop={1}
            wrapper="div"
          />
        </div>
      )}
          {/* <Typist className="gnb--title" avgTypingDelay={60}>
            MISSION
          </Typist> */}
          {/* <div className="gnb--title">MISSION</div> */}
          <div className="title">OUR GOOD DAYS BECOME A BETTER FUTURE</div>
          <div className="sub--text">
            <span className={`draw -wave ${isActive ? '-do' : ''}`}>
            We strive to create games for users of all ages, platforms, 
            </span>
            <span className="draw -wave">
            and tastes. We never think about the past.
            </span>
            <span className="draw -wave -small">
              For the future Yes! We are fools who work together to do so.
            </span>
          </div>
        </div>
        <div className="box--item item3" ref={el => sectionsRef.current[2] = el}>
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
        <div className="box--item item4" ref={el => sectionsRef.current[3] = el}>
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
        <div className="box--item item5" ref={el => sectionsRef.current[4] = el}>
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
        <div className="box--item item6" ref={el => sectionsRef.current[5] = el}>
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
        <div className="box--item footer" 
          ref={el => sectionsRef.current[6] = el}
        >
          <div className="footer--inner">
            <div className="left--content">
              <img src={footerLogo} alt="footer--logo" />
            </div>
            <div className="right--content">
              <p className="top--text">
                <span>Trade name: NI Games Co.,Ltd. </span>
                <span>I Representative: Kim Nak-il</span>
                <span>I Business Number: 419-86-03296</span>
                <span>EMAIL: master@nigames.co.kr</span>
                <span></span>
                I Address: Room 201-310 on the 2nd floor, 7-10, Songpa-daero 14beon-gil, Songpa-gu, Seoul (Moonjeong-dong)
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
