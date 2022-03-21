import React from "react";
import { Link } from "react-router-dom";
import headerText from "../../assets/image/type_logo.png";
import { motion } from 'framer-motion/dist/framer-motion';

const Header = () => {
  function showlist() {
    document.querySelector(".fix-First-list").classList.toggle('test');
  }
  return (
    <motion.div
      initial={{ opacity: 0, x: -300 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "circOut", duration: 2 }}
      className="header"
    >
      <div className="container">
        <div className="row d-flex align-items-center home_header">
          <div className="col-lg-4 col-md-6 col-sm-6 col-6">
            <Link to="/">
              <img src={headerText} width={150} alt="" className="logo" />
            </Link>
          </div>
          <div className="col-lg-6 d-flex justify-content-end header_menu">
            <a className="mr-2 cursor-pointer both-up text6--para" href="#mint">MINT</a>
            <a className="mr-2 cursor-pointer both-up text6--para" href="#ourstory">STORY</a>
            <a className="mr-2 cursor-pointer both-up text6--para" href="#roadmap">ROADMAP</a>
            <a className="mr-2 cursor-pointer both-up text6--para" href="#team">TEAM</a>
            <a className="mr-2 cursor-pointer both-up text6--para" href="#members">MEMBERS</a>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 col-6 d-flex justify-content-end align-items-center mt-1 social_icon">
            <h2>
              <a href="https://instagram.com/realboybotclub" rel="noreferrer" target="_blank">
                <i className="fab fa-instagram cursor-pointer text6--para" />
              </a>
            </h2>
            <h2>
              <a href="https://discord.gg/A4PyhdS4TZ" rel="noreferrer" target="_blank">
                <i className="fab fa-discord px-3 cursor-pointer text6--para" />
              </a>
            </h2>
            <h2>
              <a href="http://twitter.com/RealBoyBotClub" rel="noreferrer" target="_blank">
                <i className="fab fa-twitter cursor-pointer text6--para" />
              </a>
            </h2>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 col-6 d-flex justify-content-end align-items-center mt-1 header_icon">
            <h2>
              <div className="ml-5 text-white cursor-pointer" onClick={showlist}>
                <i className="fas fa-bars text-white"></i>
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
          <a href="#members" className="cursor-pointer text6--para">MEMBERS</a>
          <div className="col-lg-2 col-md-6 col-sm-6 col-6 d-flex justify-content-end align-items-center mt-1 social">
            <h2>
              <a href="https://instagram.com/realboybotclub" rel="noreferrer" target="_blank">
                <i className="fab fa-instagram cursor-pointer text6--para" />
              </a>
            </h2>
            <h2>
              <a href="https://discord.gg/A4PyhdS4TZ" rel="noreferrer" target="_blank">
                <i className="fab fa-discord px-3 cursor-pointer text6--para" />
              </a>
            </h2>
            <h2>
              <a href="http://twitter.com/RealBoyBotClub" rel="noreferrer" target="_blank">
                <i className="fab fa-twitter cursor-pointer text6--para" />
              </a>
            </h2>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Header;
