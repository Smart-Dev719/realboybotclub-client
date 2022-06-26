import React from "react";
import main_logo from "../../assets/image/white_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="bg-black d-flex flex-colum justify-content-center flex-column align-items-center home-footer-root">
      <div className="row d-flex align-items-center home-footer">
        <div className="col-lg-4 col-md-12 my-3 home-footer-logo">
          <Link to="/">
            <img src={main_logo} width={150} alt="" />
          </Link>
        </div>
        <div className="col-lg-4 col-md-12 text-center mb-3 home-footer-text">
          <span className="font-bold text-white">realboybotclub.com &nbsp; &copy; &nbsp; 2022</span>
        </div>
        <div className="col-lg-4 col-md-12 d-flex justify-content-end home-footer-social">
          <h2>
            <a href="https://instagram.com/realboybotclubb?igshid=YmMyMTA2M2Y=" rel="noreferrer" target="_blank">
              <FontAwesomeIcon icon={faInstagram} className="cursor-pointer text6--para fs-25" />
            </a>
          </h2>
          <h2>
            <a href="https://discord.gg/A4PyhdS4TZ" rel="noreferrer" target="_blank">
              <FontAwesomeIcon icon={faDiscord} className="cursor-pointer text6--para px-4 fs-25" />
            </a>
          </h2>
          <h2>
            <a href="http://twitter.com/RealBoyBotClub" rel="noreferrer" target="_blank">
              <FontAwesomeIcon icon={faTwitter} className="cursor-pointer text6--para fs-25" />
            </a>
          </h2>
        </div>
      </div>
      <div className="home-footer-line"></div>
    </div>
  );
};

export default Footer;
