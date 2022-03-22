import React from "react";
import main_logo from "../../assets/image/white_logo.png";
// import { motion } from 'framer-motion/dist/framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="mt-5 bg-black footer">
      <div className="container realfooter pt-2 pb-2">
        <div className="row">
          <div className="d-flex align-items-center justify-content-start col-lg-4 col-md-4 col-sm-12 text-center footerlogo">
            <img src={main_logo} width={150} alt="" />
          </div>
          <div className="d-flex align-items-center justify-content-center col-lg-4 col-md-4 col-sm-12 text-white font-bold text-center copyright">
            realboybotclub.com &nbsp; &copy; &nbsp; 2022
          </div>
          <div className="d-flex align-items-center justify-content-end col-lg-4 col-md-4 col-sm-12 footersocial">
            <h5>
              <a href="https://instagram.com/realboybotclub" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faInstagram} className="cursor-pointer text6--para fs-25" />
              </a>
            </h5>
            <h5>
              <a href="https://discord.gg/A4PyhdS4TZ" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faDiscord} className="cursor-pointer text6--para px-3 fs-25" />
              </a>
            </h5>
            <h5>
              <a href="http://twitter.com/RealBoyBotClub" rel="noreferrer" target="_blank">
                <FontAwesomeIcon icon={faTwitter} className="cursor-pointer text6--para fs-25" />
              </a>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
