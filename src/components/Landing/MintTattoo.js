import React, { useState } from "react";
import FlipCountdown from "@rumess/react-flip-countdown";
import calculator from "../../assets/image/calculator.png";
import { motion } from "framer-motion/dist/framer-motion";
import "../../pages/css/MintTattoo.css";

const MintTattoo = (props) => {
  const [nft, setNft] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const imgUrl = "/assets/image/tattoo_mint" + props.mintType + ".jpg";
  let introTxt = "Under";
  let max = 4;
  let min = 1;
  if (props.mintType === "02") {
    introTxt = "Over";
    max = 20;
    min = 5;
  }
  const plus_nft = (e_nft) => {
    var p_nft = e_nft + 1;
    if (p_nft >= max) {
      setTotalPrice(0);
      setNft(max);
    } else {
      setTotalPrice(p_nft * 0);
      setNft(p_nft);
    }
  };
  const minus_nft = (e_nft) => {
    var p_nft = e_nft - 1;
    if (p_nft < min) {
      setTotalPrice(0);
      setNft(min);
    } else {
      setTotalPrice(p_nft * 0);
      setNft(p_nft);
    }
  };
  const max_nft = () => {
    setTotalPrice(0);
    setNft(max);
  };
  return (
    <div className="PageMintTattoo align-items-center">
      <div className="MintIntroImg">
        <img src={imgUrl} alt="mint-intro-img01" />
      </div>

      <div className="MintMainSection d-flex flex-column justify-content-center align-items-center">
        <div className="MintLine"></div>

        <h3 className="text-uppercase MintIntroText2">
          Booking<br></br>
          {introTxt} 5 Days
        </h3>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          viewport={{ once: true, amount: 0 }}
          className="count_panel MintCountPanel d-flex align-items-center font-bold"
        >
          <div className="mint_space"></div>
          <div className="d-flex flex-column text-white justify-content-center align-items-center price_area MintPricePanel">
            <div>Price</div>
            <div>
              <span className="fs-30 text-pink totalprice">{totalPrice}</span>{" "}
              ETH
            </div>
          </div>
          <div className="d-flex justify-content-end align-items-center minus_btn">
            <span
              className="fs-20 text-white cursor-pointer"
              onClick={() => minus_nft(nft)}
            >
              <i className="fa fa-minus" />
            </span>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column cnt">
            <input type="text" value={nft} disabled />
          </div>
          <div className="d-flex align-items-center plus_btn">
            <span
              className="fs-20 text-white cursor-pointer"
              onClick={() => plus_nft(nft)}
            >
              <i className="fa fa-plus" />
            </span>
          </div>
          <div className="d-flex align-items-center justify-content-center max_area">
            <span
              className="d-flex align-items-center justify-content-center fs-20 cursor-pointer max_btn"
              onClick={max_nft}
            >
              max
            </span>
          </div>
          <div className="mint_space"></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          viewport={{ once: true, amount: 0 }}
          className="mint_btn MintSoonBtn"
        >
          <span className="fs-30 ls-4 text-white font-bold MintSoonBtnText">
            MINT
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default MintTattoo;
