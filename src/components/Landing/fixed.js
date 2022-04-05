import React from "react";
import ethereum from "../../assets/image/ethereum.gif";
import { motion } from 'framer-motion/dist/framer-motion';

const Fixed = () => {
  return (
    <div className="row mt-5">
      <div className="col-lg-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          viewport={{ once: true, amount: 0 }}
        >
          <h1>
            <div className="text-white"><span className="text-white font-bold">JOIN THE SWARM</span></div>
          </h1>
        </motion.div>
      </div>
      <div className="col-lg-12 mt-2">
        <div
          className="fixed-panel"
        >
          <div className="row">
            <div className="col-lg-8 p-4 d-flex justify-content-center align-items-center text-white">
              <h1 className="fixed_text font-bold">TBA</h1>
            </div>
            <div className="col-lg-4 d-flex justify-content-center align-items-center">
              <img src={ethereum} alt="" width="150%" />
            </div>
          </div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
          viewport={{ once: true, amount: 0 }}
        >
          <div className="mt-5 content_line"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Fixed;
