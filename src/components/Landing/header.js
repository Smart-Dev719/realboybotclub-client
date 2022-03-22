import React from "react";
import { Link } from "react-router-dom";
import headerText from "../../assets/image/type_logo.png";
import { motion } from 'framer-motion/dist/framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  function showlist() {
    document.querySelector(".fix-First-list").classList.toggle('test');
  }
  return (
    <motion.div
      initial={{ opacity: 0, x: -300 }}
      whileInView={{ opacity: 0.9, x: 0 }}
      transition={{ ease: "circOut", duration: 2 }}
      className="header"
    >
      <div className="container realheader">
        <div className="row d-flex align-items-center">
          <div className="col-lg-3 col-md-6 col-sm-6 col-6 log_img">
            <Link to="/">
              <img src={headerText} width={150} alt="" className="logo" />
            </Link>
          </div>
          <div className="col-lg-6 col-md-6 d-flex justify-content-center header_menu font-bold">
            <a className="mr-2 ml-2 cursor-pointer both-up text6--para" href="#mint">| MINT |</a>
            <a className="mr-2 ml-2 cursor-pointer both-up text6--para" href="#ourstory">| STORY |</a>
            <a className="mr-2 ml-2 cursor-pointer both-up text6--para" href="#roadmap">| ROADMAP |</a>
            <a className="mr-2 ml-2 cursor-pointer both-up text6--para" href="#team">| TEAM |</a>
            <a className="mr-2 ml-2 cursor-pointer both-up text6--para" href="#faq">| FAQ |</a>
          </div>
          <div className="col-lg-2 col-md-6 d-flex justify-content-start align-items-end connectwallet">
            <span className="connecthover connect font-bold fs-13 text-uppercase">Connect Wallet</span>
          </div>
          <div className="col-lg-1 col-md-6 col-sm-6 col-6 d-flex justify-content-end align-items-end mt-1 social_icon">
            <h2>
              <a href="https://instagram.com/realboybotclub" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faInstagram} className="cursor-pointer text6--para fs-25" />
              </a>
            </h2>
            <h2>
              <a href="https://discord.gg/A4PyhdS4TZ" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faDiscord} className="cursor-pointer text6--para px-3 fs-25" />
              </a>
            </h2>
            <h2>
              <a href="http://twitter.com/RealBoyBotClub" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faTwitter} className="cursor-pointer text6--para fs-25" />
              </a>
            </h2>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 col-6 d-flex justify-content-end header_icon">
            <h2>
              <div className="ml-5 text-white cursor-pointer" onClick={showlist}>
                <FontAwesomeIcon icon={faBars} />
              </div>
            </h2>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "circOut", duration: 1 }}
          className="fix-First-list"
        >
          <a href="#mint" className="cursor-pointer text6--para">MINT</a>
          <a href="#ourstory" className="cursor-pointer text6--para">STORY</a>
          <a href="#roadmap" className="cursor-pointer text6--para">ROADMAP</a>
          <a href="#team" className="cursor-pointer text6--para">TEAM</a>
          <a href="#members" className="cursor-pointer text6--para">FAQ</a>
          <div className="col-lg-2 col-md-6 col-sm-6 col-6 d-flex justify-content-end align-items-center mt-1 social">
            <h2>
              <a href="https://instagram.com/realboybotclub" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faInstagram} className="cursor-pointer text6--para fs-25" />
              </a>
            </h2>
            <h2>
              <a href="https://discord.gg/A4PyhdS4TZ" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faDiscord} className="cursor-pointer text6--para px-3 fs-25" />
              </a>
            </h2>
            <h2>
              <a href="http://twitter.com/RealBoyBotClub" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faTwitter} className="cursor-pointer text6--para fs-25" />
              </a>
            </h2>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-items-center mb-4 mt-3">
            <span className="connecthover connect font-bold fs-13 text-uppercase">Connect Wallet</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Header;
