import React from "react";
import NFT_Pink from "../../assets/image/legendary_bots/legendary_pink.png";
import NFT_Green from "../../assets/image/legendary_bots/legendary_green.png";
import NFT_Brown from "../../assets/image/legendary_bots/legendary_brown.png";
import NFT_Yellow from "../../assets/image/legendary_bots/legendary_yellow.png";
import { motion } from 'framer-motion/dist/framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
                        <div className="text-white font-bold">THE TEAM</div>
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
                        className="col-lg-3 col-md-6 col-sm-12 p-3"
                    >
                        <div class="profile-card">
                            <img src={NFT_Pink} alt="" width="100%" />
                            <div class="profile-content font-bold">
                                <h3>Jamie Davies</h3>
                                <p className="font-bold">Co-Founder / Tattoo Artist</p>
                                <h2>
                                    <a href="https://www.instagram.com/jamiedaviestattoo/?hl=en" rel="noreferrer" target="_blank">
                                        <FontAwesomeIcon icon={faInstagram} className="cursor-pointer text-black px-3 fs-25" />
                                    </a>
                                </h2>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 50 }}
                        viewport={{ once: true, amount: 0 }}
                        className="col-lg-3 col-md-6 col-sm-12 p-3"
                    >
                        <div class="profile-card">
                            <img src={NFT_Green} alt="" width="100%" />
                            <div class="profile-content font-bold">
                                <h3>Lee Davies</h3>
                                <p className="font-bold">Co-Founder / Digital Artist</p>
                                <h2>
                                    <a href="https://www.instagram.com/leedavies08/" rel="noreferrer" target="_blank">
                                        <FontAwesomeIcon icon={faInstagram} className="cursor-pointer text-black px-3 fs-25" />
                                    </a>
                                </h2>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 50 }}
                        viewport={{ once: true, amount: 0 }}
                        className="col-lg-3 col-md-6 col-sm-12 p-3"
                    >
                        <div class="profile-card">
                            <img src={NFT_Brown} alt="" width="100%" />
                            <div class="profile-content font-bold">
                                <h3>Jvun Carter</h3>
                                <p className="font-bold">Community Engagement Chief</p>
                                <h2>
                                    <a href="https://www.instagram.com/jvun_carter" rel="noreferrer" target="_blank">
                                        <FontAwesomeIcon icon={faInstagram} className="cursor-pointer text-black px-3 fs-25" />
                                    </a>
                                </h2>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 50 }}
                        viewport={{ once: true, amount: 0 }}
                        className="col-lg-3 col-md-6 col-sm-12 p-3"
                    >
                        <div class="profile-card">
                            <img src={NFT_Yellow} alt="" width="100%" />
                            <div class="profile-content font-bold">
                                <h3>Leo Davis</h3>
                                <p className="font-bold">Developer</p>
                                <h2>
                                    <a href="/" rel="preferrer" target="_blank">
                                        <FontAwesomeIcon icon={faLinkedin} className="cursor-pointer text-black px-3 fs-25" />
                                    </a>
                                </h2>
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
