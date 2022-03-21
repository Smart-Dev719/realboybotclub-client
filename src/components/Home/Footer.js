import React from "react";
import main_logo from "../../assets/image/white_logo.png";
// import { motion } from 'framer-motion/dist/framer-motion';

const Footer = () => {
  return (
    <div className="mt-5 bg-black pt-4 pb-4">
      <div className="container footer">
        <div className="row">
          <div
            className="d-flex align-items-center justify-content-start col-lg-4 col-md-12 col-sm-12 text-center"
          >
            <img src={main_logo} width={150} alt="" />
          </div>
          <div
            className="d-flex align-items-center justify-content-center col-lg-4 col-md-12 col-sm-12 text-white font-bold"
          >
            realboybotclub.com &nbsp; &copy; &nbsp; 2022
          </div>
          <div
            className="d-flex align-items-center justify-content-end col-lg-4 col-md-12 col-sm-12 text-center"
          >
            <div className="d-flex">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
