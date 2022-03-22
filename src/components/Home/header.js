import React from "react";
import headerText from "../../assets/image/type_logo.png";
import headerPicture from "../../assets/image/hands_logo.png";
import { motion } from 'framer-motion/dist/framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -300 }}
      whileInView={{ opacity: 0.9, x: 0 }}
      transition={{ ease: "circOut", duration: 2 }}
      viewport={{ once: true, amount: 0 }}
      className="bg-black d-flex flex-colum justify-content-center"
    >
      <div className="row d-flex align-items-center home-header">
        <div className="col-lg-4 col-md-6 col-sm-6 col-6 home-header-logo">
          <Link to="/home">
            <img src={headerText} width={150} alt="" />
          </Link>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-center my-3 home-header-hand">
          <img src={headerPicture} width={150} alt="" />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 col-6 d-flex justify-content-end home-header-social">
          <h2>
            <a href="https://instagram.com/realboybotclub" rel="noreferrer" target="_blank">
              <FontAwesomeIcon icon={faInstagram} className="cursor-pointer text6--para fs-25" />
            </a>
          </h2>
          <h2>
            <a href="https://discord.gg/A4PyhdS4TZ" rel="noreferrer" target="_blank">
              <FontAwesomeIcon icon={faDiscord} className="cursor-pointer text6--para px-4 fs-25 home-header-social-discord" />
            </a>
          </h2>
          <h2>
            <a href="http://twitter.com/RealBoyBotClub" rel="noreferrer" target="_blank">
              <FontAwesomeIcon icon={faTwitter} className="cursor-pointer text6--para fs-25" />
            </a>
          </h2>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
