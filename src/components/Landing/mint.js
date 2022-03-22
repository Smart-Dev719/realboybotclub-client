import React, { useState } from "react";
import FlipCountdown from '@rumess/react-flip-countdown';
import calculator from "../../assets/image/calculator.png";
import { motion } from 'framer-motion/dist/framer-motion';

const Mint = () => {
  const [nft, setNft] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0.5);

  const plus_nft = (e_nft) => {
    var p_nft = e_nft + 1;
    if (p_nft >= 9) {
      setTotalPrice(4.5);
      setNft(9);
    } else {
      setTotalPrice(p_nft * 0.5)
      setNft(p_nft);
    }
  }
  const minus_nft = (e_nft) => {
    var p_nft = e_nft - 1;
    if (p_nft < 1) {
      setTotalPrice(0.5);
      setNft(1);
    } else {
      setTotalPrice(p_nft * 0.5)
      setNft(p_nft);
    }
  }
  const max_nft = () => {
    setTotalPrice(4.5);
    setNft(9);
  }
  return (
    <div className="row mt-5 justify-content-center">
      <div className="col-lg-7 col-cd-12 col-xs-12 d-flex flex-column justify-content-between main_mint">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          viewport={{ once: true, amount: 0 }}
          className="bg-pink date_panel"
        >
          <FlipCountdown
            hideYear
            hideMonth
            endAt={'2022-04-20 01:26:58'}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          viewport={{ once: true, amount: 0 }}
          className="count_panel d-flex align-items-center font-bold"
        >
          <div className="mint_space"></div>
          <div className="d-flex flex-column text-white justify-content-center align-items-center price_area">
            <div>Price</div>
            <div><span className="fs-30 text-pink totalprice">{totalPrice}</span> ETH</div>
          </div>
          <div className="d-flex justify-content-end align-items-center minus_btn">
            <span className="fs-20 text-white cursor-pointer" onClick={() => minus_nft(nft)}><i className="fa fa-minus" /></span>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column cnt">
            <input type="text" value={nft} disabled />
          </div>
          <div className="d-flex align-items-center plus_btn">
            <span className="fs-20 text-white cursor-pointer" onClick={() => plus_nft(nft)}><i className="fa fa-plus" /></span>
          </div>
          <div className="d-flex align-items-center justify-content-center max_area">
            <span className="d-flex align-items-center justify-content-center fs-20 cursor-pointer max_btn" onClick={max_nft}>max</span>
          </div>
          <div className="mint_space"></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          viewport={{ once: true, amount: 0 }}
          className="mint_btn"
        >
          <span className="fs-30 ls-4 text-white font-bold">MINT NOW</span>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0, type: "spring", stiffness: 100 }}
        viewport={{ once: true, amount: 0 }}
        className="col-lg-3 col-cd-6 col-md-6 col-xs-12 d-flex justify-content-end calculator_area"
      >
        <img src={calculator} alt="" width="90%" className="mint_calculator" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
        viewport={{ once: true, amount: 0 }}
        className="col-lg-2 col-cd-6 col-md-6 d-flex flex-column justify-content-end mint_main_text font-bold"
      >
        <h1>
          <div className="text-white">REAL</div>
        </h1>
        <h1>
          <div className="text-white">BOY</div>
        </h1>
        <h1>
          <div className="text-white">BOTS</div>
        </h1>
        <div className="text-white ls-3">AVAILABLE</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
        viewport={{ once: true, amount: 0 }}
      >
        <div className="mt-5 content_line"></div>
      </motion.div>
    </div>
  );
};

export default Mint;
