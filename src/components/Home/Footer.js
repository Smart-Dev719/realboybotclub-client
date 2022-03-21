import React from "react";
import main_logo from "../../assets/image/white_logo.png";
import long_arrow_right from "../../assets/image/long_arrow_right.png";
import { motion } from 'framer-motion/dist/framer-motion';

const Footer = () => {
  return (
    <div className="row d-flex justify-content-between align-items-center py-3">
      <div className="col-lg-4 col-md-6 col-sm-12 mb-4 join_input">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
          className="text-white mb-2"
        >
          JOIN THE LIST
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
          className="d-flex"
        >
          <div className="input_text">
            <input type="text" />
          </div>
          <div className="input_icon">
            <button>
              <img src={long_arrow_right} alt="" width={20} />
            </button>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, type: "spring", stiffness: 100 }}
        className="col-lg-4 col-md-12 col-sm-12 mt-4 text-center footer_logo"
      >
        <img src={main_logo} width={250} alt="" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 100 }}
        className="col-lg-4 col-md-6 col-sm-12 text-center"
      >
        <div className="d-flex justify-content-end">
          <h5>
            <a href="https://instagram.com/realboybotclub" rel="noreferrer" target="_blank">
              <i className="fab fa-instagram cursor-pointer text6--para" />
            </a>
          </h5>
          <h5>
            <a href="https://discord.gg/A4PyhdS4TZ" rel="noreferrer" target="_blank">
              <i className="fab fa-discord px-3 cursor-pointer text6--para" />
            </a>
          </h5>
          <h5>
            <a href="http://twitter.com/RealBoyBotClub" rel="noreferrer" target="_blank">
              <i className="fab fa-twitter cursor-pointer text6--para" />
            </a>
          </h5>
        </div>
        <div className="footer_text pt-2">
          <div className="spec_color">
            <u>BLAJWFIEWHGIOHEOI'FBHERWIBH</u>
          </div>
          <div className="spec_color py-2">
            <u>OWRJGPHGHBPHWPBHVWSBHV</u>
          </div>
          <div className="text-white">EGJRGJRPJRE9HJBR</div>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
