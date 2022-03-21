import React from "react";
import headerText from "../../assets/image/type_logo.png";
import headerPicture from "../../assets/image/hands_logo.png";
import { motion } from 'framer-motion/dist/framer-motion';

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -300 }}
      whileInView={{ opacity: 0.9, x: 0 }}
      transition={{ ease: "circOut", duration: 2 }}
      viewport={{ once: true, amount: 0 }}
      className="bg-black d-flex flex-colum justify-content-center"
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
            <i className="fab fa-instagram cursor-pointer text6--para" />
          </h2>
          <h2>
            <i className="fab fa-discord px-3 cursor-pointer text6--para" />
          </h2>
          <h2>
            <i className="fab fa-twitter cursor-pointer text6--para" />
          </h2>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
