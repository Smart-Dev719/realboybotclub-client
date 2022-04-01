import React from "react";
import story_1 from "../../assets/image/our_story/story_1.png";
import story_2 from "../../assets/image/our_story/story_2.png";
import story_3 from "../../assets/image/our_story/story_3.png";
import { motion } from 'framer-motion/dist/framer-motion';

const Ourstory = () => {
    const storyimg1 = () => {
        document.querySelector(".storyimg1").classList.add('showstoryimg1');
        document.querySelector(".storyimg2").classList.remove('showstoryimg2');
        document.querySelector(".storyimg3").classList.remove('showstoryimg3');
    }
    const storyimg2 = () => {
        document.querySelector(".storyimg1").classList.remove('showstoryimg1');
        document.querySelector(".storyimg1").classList.add('storyimgfirst');
        document.querySelector(".storyimg2").classList.add('showstoryimg2');
        document.querySelector(".storyimg3").classList.remove('showstoryimg3');
    }
    const storyimg3 = () => {
        document.querySelector(".storyimg1").classList.remove('showstoryimg1');
        document.querySelector(".storyimg1").classList.add('storyimgfirst');
        document.querySelector(".storyimg2").classList.remove('showstoryimg2');
        document.querySelector(".storyimg3").classList.add('showstoryimg3');
    }
    return (
        <div className="pt-5">
            <div className="row desktop">
                <div className="col-lg-6 col-md-12 mb-5">
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
                    <div className="mt-4 ourstory">
                        <ul>
                            <motion.li
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ type: "spring", stiffness: 50 }}
                                viewport={{ once: true, amount: 0 }}
                                className="text-white fs-20 font-origin text-one cursor-pointer storytext1"
                                onMouseOver={storyimg1}
                            >
                                <span>
                                    EARTH 2050. . .
                                    <br />
                                    All of our fears have come to light,  unfortunately the science was accurate and the math was correct. The Elite have fled Earth to colonise  Mars
                                    and the planet has been listed as an unfit for human life, what was once our home, is now a registered factory planet. The work here is carried out by advanced AI,  and the air is dangerously polluted, the few humans that remain are slowly adapting to their dystopian wasteland.
                                    Everything seems to be decaying, but the one thing that thrives is the art. Humans that remain on earth are determined to preserve their culture and express their beliefs through the art of tattooing.
                                </span>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ type: "spring", stiffness: 50 }}
                                viewport={{ once: true, amount: 0 }}
                                className="text-white fs-20 font-origin text-two cursor-pointer storytext2"
                                onMouseOver={storyimg2}
                            >
                                <span>
                                    Humans are not the only beings on this planet with the desire to express themselves.
                                    The Robots were left on the Earth with the sole purpose of fulfilling customers orders from Mars.
                                    However the AI have advanced and grown bored of their mundane jobs on this planet. . .
                                </span>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ type: "spring", stiffness: 50 }}
                                viewport={{ once: true, amount: 0 }}
                                className="text-white fs-20 font-origin text-three cursor-pointer storytext3"
                                onMouseOver={storyimg3}
                            >
                                <span>
                                    A V-01 Bot finished his shift as normal, nothing was different about this day. . . Other than the bots decision to take a different direction home, as a result the bot discovered a human being tattooed inside a neon lit tattoo studio. Intrigued by its discovery the bot rummaged through a near-by bin where he was able to create himself a body of makeshift skin.
                                    Filled with curiosity  the bot entered the shop and began to scan through the tattoo designs advertised on the walls, he suddenly felt something new. . . A sense of excitement and inspiration, the bot chose his design and eventually took a seat in the tattoo chair, the rest is history and the Real Boy Bot Club was born. . .
                                </span>
                            </motion.li>
                        </ul>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 50 }}
                    viewport={{ once: true, amount: 0 }}
                    className="col-lg-6 col-md-12 d-flex justify-contetn-center align-items-center"
                >
                    <img src={story_1} alt="" width="100%" className="test_image storyimg1" />
                    <img src={story_2} alt="" width="100%" className="test_image storyimg2" />
                    <img src={story_3} alt="" width="100%" className="test_image storyimg3" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                >
                    <div className="content_line mt-5"></div>
                </motion.div>
            </div>
            <div className="row mobile">
                <div className="col-lg-6 col-md-12 mb-5">
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
                    <div className="mt-4 ourstory">
                        <ul>
                            <motion.li
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ type: "spring", stiffness: 50 }}
                                viewport={{ once: true, amount: 0 }}
                                className="text-white fs-20 font-origin text-one cursor-pointer storytext1"
                            >
                                <span>
                                    EARTH 2050. . .
                                    <br />
                                    All of our fears have come to light,  unfortunately the science was accurate and the math was correct. The Elite have fled Earth to colonise  Mars.
                                    And the planet have been listed as an unfit for human life, what was once our home is now a registered factory planet. The work here is carried out by advanced AI,  and the air is dangerously polluted, the few humans that remain are slowly adapting to their dystopian wasteland.
                                    Whilst everything seems to be decaying, one thing that  thrives. . .Is art, the humans that remain on earth are determined to preserve their culture and express their beliefs through the art of tattooing.
                                </span>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ type: "spring", stiffness: 50 }}
                                viewport={{ once: true, amount: 0 }}
                                className="text-white fs-20 font-origin text-two cursor-pointer storytext2"
                            >
                                <span>
                                    Humans are not the only beings on this planet with the desire to express themselves.
                                    The Robots were left on the Earth with the sole purpose of fulfilling customers orders from Mars.
                                    However the AI have advanced and grown bored of their mundane Jobs on this planet. . .
                                </span>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ type: "spring", stiffness: 50 }}
                                viewport={{ once: true, amount: 0 }}
                                className="text-white fs-20 font-origin text-three cursor-pointer storytext3"
                            >
                                <span>
                                    A V-01 Bot finished his shift as normal, nothing was different about this day. . . Other than the bots decision to take a different direction home, as a result the bot discovered a human being tattooed inside a neon lit tattoo studio. Intrigued by its discovery the bot rummaged through a near-by bin where he was able to create himself a body of makeshift skin.
                                    Filled with curiosity  the bot entered the shop and began to scan through the tattoo designs advertised on the walls, he suddenly felt something new. . . A sense of excitement and inspiration, the bot chose his design and eventually took a seat in the tattoo chair, the rest is history and the Real Boy Bot Club was born. . ..
                                </span>
                            </motion.li>
                        </ul>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 50 }}
                    viewport={{ once: true, amount: 0 }}
                    className="col-lg-6 col-md-12"
                >
                    <img src={story_1} alt="" width="100%" className="test_image" />
                    <img src={story_2} alt="" width="100%" className="test_image" />
                    <img src={story_3} alt="" width="100%" className="test_image" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0, type: "spring", stiffness: 100 }}
                >
                    <div className="content_line mt-5"></div>
                </motion.div>
            </div>
        </div>
    );
};

export default Ourstory;

