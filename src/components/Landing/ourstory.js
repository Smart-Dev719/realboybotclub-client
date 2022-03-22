import React from "react";
import story_1 from "../../assets/image/our_story/story_1.png";
import story_2 from "../../assets/image/our_story/story_2.png";
import story_3 from "../../assets/image/our_story/story_3.png";
import { motion } from 'framer-motion/dist/framer-motion';

const Ourstory = () => {
    return (
        <div className="row pt-5">
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-6 col-cd-12 col-md-6 ourstory_main">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 50 }}
                            viewport={{ once: true, amount: 0 }}
                        >
                            <h1>
                                <div className="text-white"><span className="text-white font-bold">OUR STORY</span></div>
                            </h1>
                        </motion.div>
                        <div className="mt-4">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ type: "spring", stiffness: 50 }}
                                viewport={{ once: true, amount: 0 }}
                                className="text-white fs-20 font-origin mt-5 text-one"
                            >
                                EARTH 2050…
                                <br />
                                All of our fears have come to light,  unfortunately the science was accurate and the math was correct. The Elite have fled Earth to colonise  Mars.
                                And the planet have been listed as an unfit for human life, what was once our home is now a registered factory planet. The work here is carried out by advanced AI,  and the air is dangerously polluted, the few humans that remain are slowly adapting to their dystopian wasteland.
                                Whilst everything seems to be decaying, one thing that  thrives…Is art, the humans that remain on earth are determined to preserve their culture and express their beliefs through the art of tattooing.
                            </motion.div>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5 col-cd-12 col-md-6 d-flex flex-column align-items-end ourstory_img_area image-one">
                        <img
                            src={story_1} alt="" width="100%"
                        />
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-5 col-cd-12 col-md-6 ourstory_main story_2 image-two">
                        <img
                            src={story_2} alt="" width="100%"
                        />
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-6 col-cd-12 col-md-6 d-flex flex-column align-items-end ourstory_img_area">
                        <div className="mt-4">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ type: "spring", stiffness: 50 }}
                                viewport={{ once: true, amount: 0 }}
                                className="text-white fs-20 font-origin mt-4 text-two"
                            >
                                Humans are not the only beings on this planet with the desire to express themselves.
                                The Robots were left on the Earth with the sole purpose of fulfilling customers orders from Mars.
                                However the AI have advanced and grown bored of their mundane Jobs on this planet…
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-6 col-cd-12 col-md-6 ourstory_main">
                        <div className="mt-4">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ type: "spring", stiffness: 50 }}
                                viewport={{ once: true, amount: 0 }}
                                className="text-white fs-20 font-origin mt-5 text-three"
                            >
                                A V-01 Bot finished his shift as normal, nothing was different about this day… Other than the bots decision to take a different direction home, as a result the bot discovered a human being tattooed inside a neon lit tattoo studio. Intrigued by its discovery the bot rummaged through a near-by bin where he was able to create himself a body of makeshift skin.
                                Filled with curiosity  the bot entered the shop and began to scan through the tattoo designs advertised on the walls, he suddenly felt something new… A sense of excitement and inspiration, the bot chose his design and eventually took a seat in the tattoo chair, the rest is history and the Real Boy Bot Club was born….
                            </motion.div>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5 col-cd-12 col-md-6 d-flex flex-column align-items-end ourstory_img_area story_3 image-three">
                        <img
                            src={story_3} alt="" width="100%"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ourstory;
