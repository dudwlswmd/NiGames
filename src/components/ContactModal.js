import React, { useState } from "react";
import "./ContactModal.scss";
import closedImg from "../assets/images/close.svg";
import axios from "axios";
import loading from "../assets/images/loading.svg";
import { Link } from "react-router-dom";

const ContactModal = ({ onClose }) => {
  // 아마존 api
  const serverApi = process.env.REACT_APP_GABIA_API;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [context, setContext] = useState("Wait");

  //카피 모달
  const [copyModal, setCopyModal] = useState(false);
  const [copyText, setCopyText] = useState("support@miracleplay.gg");

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = async (e) => {
    setIsEmailSent(true);
    try {
      if (name !== "" && email !== "" && message !== "") {
        const res = await axios.post(
          `${serverApi}/api/user/contract/us/email/send?name=${name}&email=${email}&message=${message}`,
          {}
        );
        setContext("Email Sent Successfully!");
      }
    } catch (e) {
      setContext("Error");
      console.log(e);
    }
  };

  function handleCopy() {
    if (navigator.clipboard) {
      // Clipboard API를 지원하는 경우
      navigator.clipboard.writeText(copyText).then(
        function () {
          setCopyModal(true);
        },
        function (err) {}
      );
    } else {
      // Clipboard API를 지원하지 않는 경우, 예전 방식으로 백업
      const textArea = document.createElement("textarea");
      textArea.value = copyText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      console.log("텍스트가 클립보드에 복사되었습니다.");
    }
  }

  const closeAllModals = () => {
    setIsEmailSent(false);
    onClose();
  };

  const handleCopyModal = () => {
    setCopyModal((prev) => !prev);
  };

  const handleBackdropClick = () => {
    onClose();
  };

  const handleContainerClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="contact-modal" onClick={handleBackdropClick}>
      <img
        className="closed-btn"
        src={closedImg}
        alt="close"
        onClick={onClose}
      ></img>
      <div className="container" onClick={handleContainerClick}>
        <div className="contact-us-text">
          <h3>
            CONTACT<span>US</span>
          </h3>
        </div>
        <h4>Would you like to establish a connection with Mircle Play?</h4>
        <div className="contact-business ">
          <div className="business left">
            <h5>Business Collaboration</h5>
            <input
              type="text"
              placeholder="YOUR NAME"
              value={name}
              onChange={handleNameChange}
            />
            <input
              type="text"
              placeholder="YOUR EMAIL"
              value={email}
              onChange={handleEmailChange}
            />
            <textarea
              placeholder="WRITE YOUR MESSAGE HERE"
              rows="4"
              cols="50"
              value={message}
              onChange={handleMessageChange}
            />
            {name && email && message ? (
              <button onClick={handleSubmit} className="submit__button enabled">
                Submit
              </button>
            ) : (
              <button disabled className="submit__button disabled">
                Submit
              </button>
            )}
            {/* 이메일 전송 성공 모달 */}
            {isEmailSent && (
              <div
                className="email-sent-modal"
                onClick={context === "Wait" ? null : closeAllModals}
              >
                <div
                  className="modal_container"
                  onClick={(e) => e.stopPropagation()}
                >
                  <p>{context}</p>
                  {/* <button onClick={closeAllModals}>Close</button> */}
                  <div className="loading__image--box">
                    {context === "Wait" && (
                      <img src={loading} className="loading-image" />
                    )}
                  </div>
                  <button
                    className={`close__button ${
                      context === "Wait" && "close__button--disabled"
                    }`}
                    onClick={context === "Wait" ? null : closeAllModals}
                  >
                    OK
                  </button>
                </div>
              </div>
            )}

            {/* 이메일 주소 카피 성공 모달 */}
            {copyModal && (
              <div className="email-sent-modal" onClick={handleCopyModal}>
                <div
                  className="modal_container"
                  onClick={(e) => e.stopPropagation()}
                >
                  <p>{copyText}</p>
                  <span className="copied-text">Copied Successfully</span>
                  {/* <button onClick={closeAllModals}>Close</button> */}
                  <div className="loading__image--box"></div>
                  <button className={`close__button`} onClick={handleCopyModal}>
                    OK
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* left  --END--*/}
          <div className="live-help right">
            <h5>Miracle Play Support</h5>
            <p>
              If you are experiencing any issues with the platform, please
              contact the Miracle Play team.
            </p>
            <p>For non-technical help</p>
            <button
              className="btn"
              onClick={() => {
                handleCopy();
              }}
            >
              Support <span>&gt;</span>
            </button>
            <p>For technical help</p>
            <Link
              to="https://discord.gg/Yz7eyXHb"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Discord <span>&gt;</span>
            </Link>
            <button className="business__closedBtn" onClick={onClose}>
              Closed
            </button>
          </div>
          {/* right  --END--*/}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
