import React, { useState } from "react";
import FlipCountdown from '@rumess/react-flip-countdown';
import calculator from "../../assets/image/calculator.png";
import { motion } from 'framer-motion/dist/framer-motion';
import "../../pages/css/MintTattoo.css";

import mintIntroImg from "../../assets/image/tattoo_mint.png"

const MintTattoo = () => {
    const [nft, setNft] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);

    const plus_nft = (e_nft) => {
        var p_nft = e_nft + 1;
        if (p_nft >= 9) {
            setTotalPrice(0);
            setNft(9);
        } else {
            setTotalPrice(p_nft * 0)
            setNft(p_nft);
        }
    }
    const minus_nft = (e_nft) => {
        var p_nft = e_nft - 1;
        if (p_nft < 1) {
            setTotalPrice(0);
            setNft(1);
        } else {
            setTotalPrice(p_nft * 0)
            setNft(p_nft);
        }
    }
    const max_nft = () => {
        setTotalPrice(0);
        setNft(9);
    }
    return (
        <div className="PageMintTattoo w-100 d-flex justify-content-center align-items-center gap-2">

            <img src={mintIntroImg} alt="" className="MintIntroImg" />

            <div className="MintMainSection d-flex flex-column justify-content-center align-items-center">
                <span className="text-uppercase MintIntroText1">The Last 1000 Days</span>
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
                    className="mint_btn MintSoonBtn"
                >
                    <span className="fs-30 ls-4 text-white font-bold MintSoonBtnText">MINT</span>
                </motion.div>

                <div className="MintLine"></div>

                <span className="text-uppercase MintIntroText2">To secure your final tattoos with jamie davies, hit the mint button now. These will be the final tattoos jamie creates before He puts his tattoo machine down for the final time.</span>
            </div>

        </div>
    );
};

export default MintTattoo;
