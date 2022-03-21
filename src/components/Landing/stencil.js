import React from "react";
import stencil_wall from "../../assets/image/stencil_wall.png";
import { motion } from 'framer-motion/dist/framer-motion';

const Stencil = () => {
    return (
        <div className="row pt-5">
            <div className="col-lg-7 col-cd-12 col-md-6 mb-5">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 50 }}
                    viewport={{ once: true, amount: 0 }}
                >
                    <h1>
                        <div className="text-white"><span className="text-white">THE <br />STENCIL WALL</span></div>
                    </h1>
                </motion.div>
                <div className="mt-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 50 }}
                        viewport={{ once: true, amount: 0 }}
                        className="text-white fs-20"
                    >
                        The RBBC  STENCIL WALL will become operational once the presale period is over. It contains a canvas accessible only to wallets containing at least one bot. This is  the chance for you to
                        flex your design skills or just draw huge dicks and turds.
                    </motion.div>
                </div>
                <div className="mt-5">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 50 }}
                        viewport={{ once: true, amount: 0 }}
                        className="text-white fs-20"
                    >
                        By flexing your skills you may get our attention and gain yourself an opportunity to earn some currency for your talent.
                    </motion.div>
                </div>
                <div className="mt-5">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 50 }}
                        viewport={{ once: true, amount: 0 }}
                        className="text-white fs-20"
                    >
                        So as tempting as it may be, try to keep the dick drawing to a minimum unless of-course you are the Dali of dick drawing…
                    </motion.div>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 50 }}
                viewport={{ once: true, amount: 0 }}
                className="col-lg-5 col-cd-12 col-md-6 d-flex justify-content-end stencil_img_area"
            >
                <img src={stencil_wall} alt="" width="100%" className="test_image" />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0, type: "spring", stiffness: 100 }}
            >
                <div className="mt-5 content_line" id="ourstory"></div>
            </motion.div>
        </div>
    );
};

export default Stencil;
