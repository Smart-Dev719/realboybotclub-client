import React from "react";
import mainImg from "../../assets/image/landing_content_img.jpg";
import { motion } from 'framer-motion/dist/framer-motion';

const Content = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            viewport={{ once: true, amount: 0 }}
        >
            <div className="pb-3">
                <div><img src={mainImg} width="100%" alt="" /></div>
            </div>
        </motion.div >
    );
}

export default Content;