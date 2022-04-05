import React from "react";
import sofa from "../../assets/image/sofa.png";
import { motion } from 'framer-motion/dist/framer-motion';

const Seat = () => {
  return (
    <div className="row mt-5">
      <div className="col-lg-7 d-flex flex-column justify-content-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          viewport={{ once: true, amount: 0 }}
        >
          <h1>
            <div className="text-white"><span className="text-white font-bold">PLEASE <br />TAKE A SEAT...</span></div>
          </h1>
        </motion.div>
        <div className="mt-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
            viewport={{ once: true, amount: 0 }}
            className="text-white fs-20 font-origin"
          >
            Each Real  Boy Bot  is unique and programmatically generated from over 300 possible tattoo designs. (this is what our clever person told us).
          </motion.div>
        </div>
        <div className="mt-3">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
            viewport={{ once: true, amount: 0 }}
            className="text-white fs-20 font-origin"
          >
            The Bots are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS. (more clever person shit).
          </motion.div>
        </div>
        <div className="mt-3">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
            viewport={{ once: true, amount: 0 }}
            className="text-white fs-20 font-origin"
          >
            To access members-only areas such as THE  STENCIL WALL  Bot holders will need to be signed into their Metamask Wallet.
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
        viewport={{ once: true, amount: 0 }}
        className="col-lg-5 d-flex justify-content-center"
      >
        <img src={sofa} alt="" width="80%" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
        viewport={{ once: true, amount: 0 }}
      >
        <div className="mt-5 content_line" id="mint"></div>
      </motion.div>
    </div>
  );
};

export default Seat;
