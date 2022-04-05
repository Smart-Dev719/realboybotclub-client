import React from "react";
import flower_stencil from "../../assets/image/flower_stencil.png";
import TATTOO_SCHOOL from "../../assets/image/TATTOO_SCHOOL.png";
import tattoo_machine from "../../assets/image/tattoo_machine.png";
import tradebot from "../../assets/image/tradebot.png";
import blankbot from "../../assets/image/blankbot.png";
import { motion } from 'framer-motion/dist/framer-motion';

const Welldown = () => {
    return (
        <div className="row pt-5">
            <div className="col-lg-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 50 }}
                    viewport={{ once: true, amount: 0 }}
                >
                    <h1>
                        <div className="text-white"><span className="text-white font-bold">WELL DONE <br />YOU'RE ONE OF US</span></div>
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
                        When you buy a Real Boy Bot you're not just buying an avatar. You are gaining membership access to a club like no other. Our long term goal is to open the very first virtual tattoo shop within the metaverse. We believe all avatars should look sick, most are already flexing digital kicks and clothing, So shouldn't they also have the tattoos to match?
                        Shouldn’t these tattoos be your designs? There is no NFT project that gives back to their community or creates opportunity like we do.
                    </motion.div>
                </div>
            </div>
            <div className="col-lg-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 50 }}
                    viewport={{ once: true, amount: 0 }}
                    className="row mt-5"
                >
                    <div className="col-cd-6 col-xls-12 five_layout">
                        <div className="d-flex justify-content-center align-items-center five_layout_img nft_img">
                            <img src={flower_stencil} width="100%" alt="" />
                        </div>
                        <div className="text-center text-pink font-bold d-flex justify-content-center">
                            STENCIL WALL :
                        </div>
                        <div className="text-center w-90 text-white mt-1 font-origin d-flex justify-content-center">
                            As a member you can leave your mark on our stencil wall.
                        </div>
                    </div>
                    <div className="col-cd-6 col-xls-12 five_layout">
                        <div className="d-flex justify-content-center align-items-center five_layout_img nft_img">
                            <img src={TATTOO_SCHOOL} width="100%" alt="" />
                        </div>
                        <div className="text-center text-pink font-bold d-flex justify-content-center">
                            VIRTUAL SCHOOL :
                        </div>
                        <div className="text-center w-90 text-white mt-1 font-origin d-flex justify-content-center">
                            The only tattoo school like it, live Q&A, Tutorials, feedback and much much more.
                        </div>
                    </div>
                    <div className="col-cd-6 col-xls-12 five_layout">
                        <div className="d-flex justify-content-center align-items-center five_layout_img nft_img">
                            <img src={tattoo_machine} width="100%" alt="" />
                        </div>
                        <div className="text-center text-pink font-bold d-flex justify-content-center">
                            GIFT GIVE AWAY :
                        </div>
                        <div className="text-center w-90 text-white mt-1 font-origin d-flex justify-content-center">
                            Tattoo Kits, and lots more.
                        </div>
                    </div>
                    <div className="col-cd-6 col-xls-12 five_layout">
                        <div className="d-flex justify-content-center align-items-center five_layout_img nft_img">
                            <img src={tradebot} width="100%" alt="" />
                        </div>
                        <div className="text-center text-pink font-bold d-flex justify-content-center">
                            BOTTRADE :
                        </div>
                        <div className="text-center w-90 text-white mt-1 font-origin d-flex justify-content-center">
                            For those who feel like changing <br />their bot.
                        </div>
                    </div>
                    <div className="col-cd-3 space_25"></div>
                    <div className="col-cd-6 col-xls-12 five_layout">
                        <div className="d-flex justify-content-center align-items-center five_layout_img nft_img">
                            <img src={blankbot} width="100%" alt="" />
                        </div>
                        <div className="text-center text-pink font-bold d-flex justify-content-center">
                            BLANK BOT :
                        </div>
                        <div className="text-center w-90 text-white mt-1 font-origin d-flex justify-content-center">
                            create your very own bespoke <br />Real Boy Bot.
                        </div>
                    </div>
                    <div className="col-cd-3 space_25"></div>
                </motion.div>
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
    );
};

export default Welldown;
