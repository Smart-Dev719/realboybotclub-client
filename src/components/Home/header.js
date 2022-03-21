import React from "react";
import headerText from "../../assets/image/type_logo.png";
import headerPicture from "../../assets/image/hands_logo.png";
import { motion } from 'framer-motion/dist/framer-motion';

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
    >
      <div className="row d-flex align-items-center home_header">
        <div className="col-lg-4 col-md-6 col-sm-6 col-6">
          <img src={headerText} width={150} alt="" />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 col-12 text-center header_logo my-3">
          <img src={headerPicture} width={150} alt="" />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 col-6 d-flex justify-content-end">
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
      </div>
    </motion.div>
  );
};

export default Header;
