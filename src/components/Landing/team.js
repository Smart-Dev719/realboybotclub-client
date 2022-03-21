import React from "react";
import NFT_Pink from "../../assets/image/legendary_bots/legendary_pink.png";
import NFT_Green from "../../assets/image/legendary_bots/legendary_green.png";
import NFT_Brown from "../../assets/image/legendary_bots/legendary_brown.png";
import NFT_Yellow from "../../assets/image/legendary_bots/legendary_yellow.png";
import { motion } from 'framer-motion/dist/framer-motion';

const Team = () => {
    return (
        <div className="row pt-5" id="team">
            <div className="col-lg-12 col-cd-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 50 }}
                    viewport={{ once: true, amount: 0 }}
                >
                    <h1>
                        <div className="text-white">THE TEAM</div>
                    </h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
                    viewport={{ once: true, amount: 0 }}
                >
                    <div className="content_line mb-5"></div>
                </motion.div>
            </div>
            <div className="col-lg-12 col-md-12 d-flex">
                <div className="row">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 50 }}
                        viewport={{ once: true, amount: 0 }}
                        className="col-lg-6 col-md-6 col-sm-12 p-3"
                    >
                        <div class="profile-card">
                            <img src={NFT_Pink} alt="" width="100%" />
                            <div class="profile-content">
                                <h3>Victor Pavlov</h3>
                                <p>Founder</p>
                                {/* <ul>
                                <li><a href="" className="fa fa-facebook"></a></li>
                                <li><a href="" className="fa fa-twitter"></a></li>
                                <li><a href="" className="fa fa-google"></a></li>
                                <li><a href="" className="fa fa-instagram"></a></li>
                            </ul> */}
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 50 }}
                        viewport={{ once: true, amount: 0 }}
                        className="col-lg-6 col-md-6 col-sm-12 p-3"
                    >
                        <div class="profile-card">
                            <img src={NFT_Green} alt="" width="100%" />
                            <div class="profile-content">
                                <h3>Patrick Casey</h3>
                                <p>CEO</p>
                                {/* <ul>
                                <li><a href="" className="fa fa-facebook"></a></li>
                                <li><a href="" className="fa fa-twitter"></a></li>
                                <li><a href="" className="fa fa-google"></a></li>
                                <li><a href="" className="fa fa-instagram"></a></li>
                            </ul> */}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="col-lg-12 col-md-12 d-flex">
                <div className="row">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 50 }}
                        viewport={{ once: true, amount: 0 }}
                        className="col-lg-6 col-md-6 col-sm-12 p-3"
                    >
                        <div class="profile-card">
                            <img src={NFT_Brown} alt="" width="100%" />
                            <div class="profile-content">
                                <h3>Daniel Adams</h3>
                                <p>CMO</p>
                                {/* <ul>
                                <li><a href="" className="fa fa-facebook"></a></li>
                                <li><a href="" className="fa fa-twitter"></a></li>
                                <li><a href="" className="fa fa-google"></a></li>
                                <li><a href="" className="fa fa-instagram"></a></li>
                            </ul> */}
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 50 }}
                        viewport={{ once: true, amount: 0 }}
                        className="col-lg-6 col-md-6 col-sm-12 p-3"
                    >
                        <div class="profile-card">
                            <img src={NFT_Yellow} alt="" width="100%" />
                            <div class="profile-content">
                                <h3>George Tanner</h3>
                                <p>Developer</p>
                                {/* <ul>
                                <li><a href="" className="fa fa-facebook"></a></li>
                                <li><a href="" className="fa fa-twitter"></a></li>
                                <li><a href="" className="fa fa-google"></a></li>
                                <li><a href="" className="fa fa-instagram"></a></li>
                            </ul> */}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
                viewport={{ once: true, amount: 0 }}
            >
                <div className="mt-4 content_line"></div>
            </motion.div>
        </div>
    );
};

export default Team;
