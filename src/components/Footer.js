import footerLogoNew from "../assets/images/newlogo.png";
import twitterIcon from "../assets/images/snsIcon/twitter-icon.svg";
import discordIcon from "../assets/images/snsIcon/discord-icon.svg";
import youtubeIcon from "../assets/images/snsIcon/youtube-icon.svg";
import telegramIcon from "../assets/images/snsIcon/telegram-icon.svg";
import mediumIcon from "../assets/images/snsIcon/medium-icon.svg";
import zealyIcon from "../assets/images/snsIcon/zealy-Icon.svg";

import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = ({ handlePreparingModal }) => {
  // Link 사용시 스크롤 맨위에서 시작
  const handleLinkClickScroll = () => {};
  return (
    <>
      <div className="footer">
        <div className="footer-inner">
          <div className="footer__left-box">
            <div className="left__top">
              <img src={footerLogoNew} alt="logo" />
              <div className="social-box">
                <a
                  href="https://twitter.com/miracleplaygg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={twitterIcon} alt="twitter" />
                </a>
                <a
                  href="https://discord.com/invite/miracleplay"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={discordIcon} alt="discord" />
                </a>
                <a
                  href="https://www.youtube.com/@miracleplay-web3.0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={youtubeIcon} alt="youtube" />
                </a>
                <a
                  href="https://t.me/miracleplay_eng"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={telegramIcon} alt="telegram" />
                </a>
                <a
                  href="https://medium.com/@miracleplay"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={mediumIcon} alt="mediumIcon" />
                </a>
                <a
                  href="https://zealy.io/c/miracleplay/questboard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={zealyIcon} alt="zealyIcon" />
                </a>
              </div>
            </div>
            <div className="left-bottom">
              <div className="info-box">
                <a
                  href="https://polygon.miracleplay.gg/service"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </a>
                <a
                  href="https://polygon.miracleplay.gg/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
                <a
                  href="https://polygon.miracleplay.gg/refund"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Refund Policy
                </a>
              </div>
              <p className="company">
                Suite 305, Griffith Corporate Centre, Beachmont, Kingstown St.
                Vincent and the Grenadines
                <br />
                MIRACLE SOFT CO,. LLC
              </p>
            </div>
          </div>

          <div className="footer__right-box">
            {/* <div className="m-top-box">
              <div className="item">
                <Link to="/game-list" className="title">
                  Game
                </Link>
              </div>
              <div className="item">
                <span className="title">Shop</span>
                <Link
                  to="/shop"
                  className="link"
                  onClick={handleLinkClickScroll}
                >
                  Miracle
                </Link>
                <Link className="link" onClick={handlePreparingModal}>
                  Item
                </Link>
              </div>
              <div className="item">
                <span className="title">Earn</span>
                <Link
                  to="/miracle-staking"
                  className="link"
                  onClick={handleLinkClickScroll}
                >
                  Miracle Staking
                </Link>
                <Link
                  to="/token-staking"
                  className="link"
                  onClick={handleLinkClickScroll}
                >
                  Token Staking
                </Link>
              </div>
              <div className="item">
                <span className="title">Trade</span>
                <Link
                  to="https://app.uniswap.org/swap?chain=polygon"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="link"
                >
                  Swap
                </Link>
                <Link className="link" onClick={handlePreparingModal}>
                  Bridge
                </Link>
              </div>
              <div className="item">
                <Link to="/miracle-play" className="title">
                  Explorer
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
