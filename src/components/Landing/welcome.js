import React from "react";
import mainImg from "../../assets/image/landing_content_img.jpg";
import NFT_Pink from "../../assets/image/legendary_bots/legendary_pink.png";
import NFT_Green from "../../assets/image/legendary_bots/legendary_green.png";
import { motion } from 'framer-motion/dist/framer-motion';

const Welcome = () => {
  return (
    <div className="pb-3 root_welcome">
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 30 }}
        viewport={{ once: true, amount: 0 }}
      >
        <div>
          <img src={mainImg} width="100%" alt="" />
        </div>
      </motion.div>
      <div className="row pt-5">
        <div className="col-lg-7 col-cd-12 d-flex flex-column justify-content-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
            viewport={{ once: true, amount: 0 }}
          >
            <h1>
              <div className="text-white effect-shine font-bold">WELCOME TO THE REAL BOY BOT CLUB</div>
            </h1>
          </motion.div >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
            viewport={{ once: true, amount: 0 }}
          >
            <div className="content_line"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, type: "spring", stiffness: 50 }}
            viewport={{ once: true, amount: 0 }}
            className="col-12 text-white pt-2 mt-2 fs-20 font-origin welldown_main_text"
          >
            RBBC is a collection of 8,000  Tattooed Bot NFTs - unique digital collectibles living on the Ethereum blockchain. Your Real Boy Bot doubles as your membership card, and allows access to members-only benefits, the first of which is access to the stencil wall, a collaborative are for members to draw and share their tattoo designs. Another benefit will be access to  safe and trustworthy tattoo resources and information in a first of its kind community that encourages the growth and development of  passionate artists. Other areas and perks can be unlocked by the community through roadmap activation.
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, type: "spring", stiffness: 30 }}
          viewport={{ once: true, amount: 0 }}
          className="col-lg-5 col-cd-12 welcome_nft"
        >
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 col-xs-12 nft_img">
              <img src={NFT_Pink} width="100%" alt="" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 col-xs-12 xs-mt-4 nft_img">
              <img src={NFT_Green} width="100%" alt="" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 col-xs-12 nft_img">
              <img src={NFT_Pink} width="100%" alt="" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 col-xs-12 xs-mt-4 nft_img">
              <img src={NFT_Green} width="100%" alt="" />
            </div>
          </div>
        </motion.div>
      </div>
    </div >
  );
};

export default Welcome;
