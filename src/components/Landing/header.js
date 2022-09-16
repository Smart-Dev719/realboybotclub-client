import React from "react";
import { Link } from "react-router-dom";
import headerText from "../../assets/image/type_logo.png";
import openseaIcon from "../../assets/image/opensea_icon.svg";
import { motion } from "framer-motion/dist/framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faDiscord,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const {
    networkId,
    isMetamask,
    metamaskConnected,
    account,
    setMetamaskConnnected
  } = props;
  var parseNetworkId = parseInt(networkId);

  const handleConnectWallet = async () => {
    if (window.ethereum) {
      await window.ethereum.enable();
      setMetamaskConnnected(true);
    }
  };

  function showlist() {
    document.querySelector(".fix-First-list").classList.toggle("test");
  }
  return (
    <motion.div
      initial={{ opacity: 0, x: -300 }}
      whileInView={{ opacity: 0.9, x: 0 }}
      transition={{ ease: "circOut", duration: 2 }}
      className={
        (parseNetworkId !== 1 && metamaskConnected) || !isMetamask
          ? "header headerTop"
          : "header"
      }
    >
      <div className="container realheader">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-start log_img">
            <Link to="/">
              <img src={headerText} width={150} alt="" className="logo" />
            </Link>
          </div>
          <div className="d-flex justify-content-end header_menu font-bold">
            <div className="PageHeaderInRow">
              <a
                className="mr-1 ml-1 cursor-pointer both-up text6--para HeaderItem"
                href="/Home#mint"
              >
                | MINT NFT |
              </a>
              <a
                className="mr-1 ml-1 cursor-pointer both-up text6--para HeaderItem"
                href="/Home#ourstory"
              >
                | STORY |
              </a>
              <a
                className="mr-1 ml-1 cursor-pointer both-up text6--para HeaderItem"
                href="/Home#roadmap"
              >
                | ROADMAP |
              </a>
              <a
                className="mr-1 ml-1 cursor-pointer both-up text6--para HeaderItem"
                href="/Home#team"
              >
                | TEAM |
              </a>
              <a
                className="mr-1 ml-1 cursor-pointer both-up text6--para HeaderItem"
                href="/Home#faq"
              >
                | FAQ |
              </a>
              <Link
                className="mr-1 ml-1 cursor-pointer both-up text6--para HeaderItem"
                to="/download"
              >
                | DOWNLOAD |
              </Link>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center connectwallet">
            {account !== undefined ? (
              <div className="connecthover connect font-bold fs-13 text-uppercase">
                {account &&
                  `${account.substring(0, 6)}...${account.substring(
                    account.length - 4
                  )}`}
              </div>
            ) : (
              <span
                className="connecthover connect font-bold fs-13 text-uppercase"
                onClick={handleConnectWallet}
              >
                CONNECT WALLET
              </span>
            )}
          </div>
          <div className="d-flex justify-content-end mt-1 social_icon">
            <h2>
              <a
                href="https://instagram.com/realboybotclubb?igshid=YmMyMTA2M2Y="
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="cursor-pointer text6--para fs-25"
                />
              </a>
            </h2>
            <h2>
              <a
                href="https://discord.gg/YtpauKjmaq"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faDiscord}
                  className="cursor-pointer text6--para fs-25"
                />
              </a>
            </h2>
            <h2>
              <a
                href="http://twitter.com/RealBoyBotClub"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="cursor-pointer text6--para fs-25"
                />
              </a>
            </h2>
            <h2>
              <a className="opensea-link" href="https://opensea.io/collection/realboybotclub-v2" rel="noreferrer" target="_blank">
                {/* <img className="opensea-icon" src={openseaIcon} alt="opensea" /> */}
                <svg  className="opensea-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
                  <g id="XMLID_00000005977829635803455160000010667531173822034605_">
                    <g>
                      <path fill="white" d="M34.8,27.9c2,4.4,3.7,9.8,2.9,13.2c-0.3,1.4-1.3,3.3-2.3,5c-0.1,0.2-0.3,0.5-0.4,0.7c-0.1,0.1-0.2,0.2-0.3,0.2h-12
                        c-0.3,0-0.5-0.4-0.3-0.6l0.2-0.3l11.7-18.3C34.3,27.6,34.7,27.6,34.8,27.9z"/>
                    </g>
                    <g>
                    </g>
                  </g>
                  <g id="XMLID_00000111173717580010615100000015315607141176785573_">
                    <g>
                      <path fill="white" d="M42.2,23l0.7,0.2l0.7,0.2l0.3,0.1v-2.9c0-1.4,1.1-2.6,2.5-2.6c0.7,0,1.3,0.3,1.8,0.8c0.5,0.5,0.7,1.1,0.7,1.8v4.4l0.5,0.1
                        c0,0,0.1,0,0.1,0.1c0.1,0.1,0.3,0.2,0.6,0.4c0.2,0.1,0.4,0.3,0.6,0.5c0.5,0.4,1,0.9,1.7,1.5c0.2,0.1,0.3,0.3,0.5,0.4
                        c0.8,0.8,1.7,1.6,2.6,2.6c0.2,0.3,0.5,0.6,0.7,0.8c0.2,0.3,0.5,0.6,0.7,0.9c0.3,0.4,0.6,0.8,0.9,1.2c0.1,0.2,0.3,0.4,0.4,0.6
                        c0.3,0.5,0.7,1.1,1,1.6c0.1,0.3,0.2,0.5,0.4,0.8c0.3,0.7,0.6,1.5,0.8,2.2c0.1,0.2,0.1,0.3,0.1,0.5v0c0.1,0.2,0.1,0.5,0.1,0.7
                        c0.1,0.8,0,1.5-0.1,2.3c-0.1,0.3-0.2,0.6-0.3,1c-0.1,0.3-0.2,0.6-0.4,1c-0.3,0.7-0.6,1.3-1,1.9c-0.1,0.2-0.3,0.5-0.4,0.7
                        c-0.2,0.2-0.3,0.5-0.5,0.7c-0.2,0.3-0.4,0.6-0.6,0.8c-0.2,0.3-0.4,0.6-0.6,0.8c-0.3,0.4-0.6,0.7-0.9,1c-0.2,0.2-0.4,0.4-0.6,0.6
                        c-0.2,0.2-0.4,0.4-0.6,0.6c-0.3,0.3-0.6,0.5-0.8,0.8l-0.5,0.5c-0.1,0.1-0.2,0.1-0.3,0.1H49v5.1h5c1.1,0,2.2-0.4,3-1.1
                        c0.3-0.2,1.6-1.4,3.1-3c0-0.1,0.1-0.1,0.2-0.1l13.7-4c0.2-0.1,0.5,0.1,0.5,0.4v2.9c0,0.2-0.1,0.3-0.2,0.4c-0.9,0.4-4,1.8-5.3,3.6
                        c-3.3,4.6-5.8,11.1-11.4,11.1H34c-8.3,0-15.1-6.8-15.1-15.1v-0.3c0-0.2,0.2-0.4,0.4-0.4h13.1c0.3,0,0.5,0.2,0.4,0.5
                        c-0.1,0.8,0.1,1.7,0.5,2.5c0.8,1.6,2.4,2.6,4.1,2.6h6.5v-5.1h-6.4c-0.3,0-0.5-0.4-0.3-0.6c0.1-0.1,0.1-0.2,0.2-0.3
                        c0.6-0.9,1.5-2.2,2.3-3.7c0.6-1,1.1-2.1,1.6-3.2c0.1-0.2,0.2-0.4,0.2-0.6c0.1-0.3,0.2-0.7,0.4-1c0.1-0.3,0.2-0.6,0.2-0.8
                        c0.2-0.9,0.3-1.9,0.3-3c0-0.4,0-0.8-0.1-1.2c0-0.4-0.1-0.9-0.1-1.3c0-0.4-0.1-0.8-0.2-1.2c-0.1-0.6-0.2-1.2-0.4-1.8l0-0.2
                        c-0.1-0.4-0.2-0.8-0.3-1.2c-0.4-1.3-0.8-2.5-1.2-3.6c-0.2-0.5-0.3-0.9-0.5-1.3c-0.3-0.7-0.5-1.3-0.8-1.8c-0.1-0.3-0.2-0.5-0.3-0.7
                        c-0.1-0.3-0.2-0.5-0.4-0.8c-0.1-0.2-0.2-0.4-0.3-0.6L37,22.1c-0.1-0.2,0.1-0.4,0.3-0.4L42.2,23L42.2,23L42.2,23z"/>
                    </g>
                    <g>
                    </g>
                  </g>
                </svg>
              </a>
            </h2>
          </div>
          <div className="col-md-6 col-sm-6 col-6 d-flex justify-content-end header_icon">
            <h2>
              <div
                className="ml-5 text-white cursor-pointer"
                onClick={showlist}
              >
                <FontAwesomeIcon icon={faBars} />
              </div>
            </h2>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "circOut", duration: 1 }}
          className={
            (parseNetworkId !== 1 && metamaskConnected) || !isMetamask
              ? "fix-First-list more"
              : "fix-First-list"
          }
        >
          <a href="/Home#mint" className="cursor-pointer text6--para">
            MINT NFT
          </a>
          <a href="/Home#ourstory" className="cursor-pointer text6--para">
            STORY
          </a>
          <a href="/Home#roadmap" className="cursor-pointer text6--para">
            ROADMAP
          </a>
          <a href="/Home#team" className="cursor-pointer text6--para">
            TEAM
          </a>
          <a href="/Home#faq" className="cursor-pointer text6--para">
            FAQ
          </a>
          <Link
            className="mr-1 ml-1 cursor-pointer both-up text6--para"
            to="/download"
          >
            DOWNLOAD
          </Link>

          <div className="col-lg-2 col-md-6 col-sm-6 col-6 d-flex justify-content-end align-items-center mt-1 social">
            <h2>
              <a
                href="https://instagram.com/realboybotclubb?igshid=YmMyMTA2M2Y="
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="cursor-pointer text6--para fs-25"
                />
              </a>
            </h2>
            <h2>
              <a
                href="https://discord.gg/YtpauKjmaq"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faDiscord}
                  className="cursor-pointer text6--para fs-25"
                />
              </a>
            </h2>
            <h2>
              <a
                href="http://twitter.com/RealBoyBotClub"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="cursor-pointer text6--para fs-25"
                />
              </a>
            </h2>
            <h2>
              <a className="opensea-link" href="https://opensea.io/collection/realboybotclub-v2" rel="noreferrer" target="_blank">
                {/* <img className="opensea-icon" src={openseaIcon} alt="opensea" /> */}
                <svg  className="opensea-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90">
                  <g id="XMLID_00000005977829635803455160000010667531173822034605_">
                    <g>
                      <path fill="white" d="M34.8,27.9c2,4.4,3.7,9.8,2.9,13.2c-0.3,1.4-1.3,3.3-2.3,5c-0.1,0.2-0.3,0.5-0.4,0.7c-0.1,0.1-0.2,0.2-0.3,0.2h-12
                        c-0.3,0-0.5-0.4-0.3-0.6l0.2-0.3l11.7-18.3C34.3,27.6,34.7,27.6,34.8,27.9z"/>
                    </g>
                    <g>
                    </g>
                  </g>
                  <g id="XMLID_00000111173717580010615100000015315607141176785573_">
                    <g>
                      <path fill="white" d="M42.2,23l0.7,0.2l0.7,0.2l0.3,0.1v-2.9c0-1.4,1.1-2.6,2.5-2.6c0.7,0,1.3,0.3,1.8,0.8c0.5,0.5,0.7,1.1,0.7,1.8v4.4l0.5,0.1
                        c0,0,0.1,0,0.1,0.1c0.1,0.1,0.3,0.2,0.6,0.4c0.2,0.1,0.4,0.3,0.6,0.5c0.5,0.4,1,0.9,1.7,1.5c0.2,0.1,0.3,0.3,0.5,0.4
                        c0.8,0.8,1.7,1.6,2.6,2.6c0.2,0.3,0.5,0.6,0.7,0.8c0.2,0.3,0.5,0.6,0.7,0.9c0.3,0.4,0.6,0.8,0.9,1.2c0.1,0.2,0.3,0.4,0.4,0.6
                        c0.3,0.5,0.7,1.1,1,1.6c0.1,0.3,0.2,0.5,0.4,0.8c0.3,0.7,0.6,1.5,0.8,2.2c0.1,0.2,0.1,0.3,0.1,0.5v0c0.1,0.2,0.1,0.5,0.1,0.7
                        c0.1,0.8,0,1.5-0.1,2.3c-0.1,0.3-0.2,0.6-0.3,1c-0.1,0.3-0.2,0.6-0.4,1c-0.3,0.7-0.6,1.3-1,1.9c-0.1,0.2-0.3,0.5-0.4,0.7
                        c-0.2,0.2-0.3,0.5-0.5,0.7c-0.2,0.3-0.4,0.6-0.6,0.8c-0.2,0.3-0.4,0.6-0.6,0.8c-0.3,0.4-0.6,0.7-0.9,1c-0.2,0.2-0.4,0.4-0.6,0.6
                        c-0.2,0.2-0.4,0.4-0.6,0.6c-0.3,0.3-0.6,0.5-0.8,0.8l-0.5,0.5c-0.1,0.1-0.2,0.1-0.3,0.1H49v5.1h5c1.1,0,2.2-0.4,3-1.1
                        c0.3-0.2,1.6-1.4,3.1-3c0-0.1,0.1-0.1,0.2-0.1l13.7-4c0.2-0.1,0.5,0.1,0.5,0.4v2.9c0,0.2-0.1,0.3-0.2,0.4c-0.9,0.4-4,1.8-5.3,3.6
                        c-3.3,4.6-5.8,11.1-11.4,11.1H34c-8.3,0-15.1-6.8-15.1-15.1v-0.3c0-0.2,0.2-0.4,0.4-0.4h13.1c0.3,0,0.5,0.2,0.4,0.5
                        c-0.1,0.8,0.1,1.7,0.5,2.5c0.8,1.6,2.4,2.6,4.1,2.6h6.5v-5.1h-6.4c-0.3,0-0.5-0.4-0.3-0.6c0.1-0.1,0.1-0.2,0.2-0.3
                        c0.6-0.9,1.5-2.2,2.3-3.7c0.6-1,1.1-2.1,1.6-3.2c0.1-0.2,0.2-0.4,0.2-0.6c0.1-0.3,0.2-0.7,0.4-1c0.1-0.3,0.2-0.6,0.2-0.8
                        c0.2-0.9,0.3-1.9,0.3-3c0-0.4,0-0.8-0.1-1.2c0-0.4-0.1-0.9-0.1-1.3c0-0.4-0.1-0.8-0.2-1.2c-0.1-0.6-0.2-1.2-0.4-1.8l0-0.2
                        c-0.1-0.4-0.2-0.8-0.3-1.2c-0.4-1.3-0.8-2.5-1.2-3.6c-0.2-0.5-0.3-0.9-0.5-1.3c-0.3-0.7-0.5-1.3-0.8-1.8c-0.1-0.3-0.2-0.5-0.3-0.7
                        c-0.1-0.3-0.2-0.5-0.4-0.8c-0.1-0.2-0.2-0.4-0.3-0.6L37,22.1c-0.1-0.2,0.1-0.4,0.3-0.4L42.2,23L42.2,23L42.2,23z"/>
                    </g>
                    <g>
                    </g>
                  </g>
                </svg>
              </a>
            </h2>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-items-center mb-4 mt-3">
            {account !== undefined ? (
              <div className="connecthover connect font-bold fs-13 text-uppercase">
                {account &&
                  `${account.substring(0, 6)}...${account.substring(
                    account.length - 4
                  )}`}
              </div>
            ) : (
              <span
                className="connecthover connect font-bold fs-13 text-uppercase"
                onClick={handleConnectWallet}
              >
                CONNECT WALLET
              </span>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Header;
