import React from "react";
import { Link } from 'react-router-dom';
import mainImg from "../../assets/image/content_img.jpg";
import { motion } from 'framer-motion/dist/framer-motion';

const Content = () => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: -200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 30 }}
                viewport={{ once: true, amount: 0 }}
            >
                <img src={mainImg} width="100%" alt="" />
            </motion.div>

            <div className="row d-flex justify-content-between py-5">
                <motion.div
                    initial={{ opacity: 0, y: -200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, type: "spring", stiffness: 100 }}
                    className="col-xl-4 col-lg-4 d-flex custom_shape"
                >
                    <div className="d-flex align-items-center">
                        <div className="left_line"></div>
                        <div className="content_round"></div>
                        <div className="right_line"></div>
                    </div>
                    <div className="ab_main">
                        <div className="black_line font-bold">
                            <div className="medium_text_1">REAL BOY</div>
                            <div className="medium_text">BOY BOT</div>
                            <div className="medium_text_1">CLUB OPEN</div>
                            <div>
                                <Link to="/Home">
                                    <button className="button btn_enter"><span>ENTER</span></button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, type: "spring", stiffness: 100 }}
                    className="col-xl-8 col-lg-8 font-bold text-right home-content-text"

                >
                    <h2><div className="text-white">THE ONLY NFT COLLECTION OF</div></h2>
                    <h2><div className="text-white">8008 TATTOOED ROBOTS</div></h2>
                </motion.div>
            </div>
            <div className="py-5 line_area">
                <div className="content_line"></div>
            </div>
        </div>
    );
}

export default Content;