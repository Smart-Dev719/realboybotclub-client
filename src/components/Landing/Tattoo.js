import React from "react";
// import mainImg from "../assets/image/landing_content_img.jpg";
import tattooImg from "../../assets/image/BlankBot.jpg";
// import NFT_Pink from "../assets/image/legendary_bots/legendary_pink.png";
// import NFT_Green from "../assets/image/legendary_bots/legendary_green.png";
// import NFT_Brown from "../assets/image/legendary_bots/legendary_brown.png";
// import NFT_Yellow from "../assets/image/legendary_bots/legendary_yellow.png";
import { motion } from 'framer-motion/dist/framer-motion';
import FileSaver from "file-saver";

const Tattoo = (props) => {
    const { networkId, isMetamask, metamaskConnected } = props;
    var parseNetworkId = parseInt(networkId);

    function download() {
        FileSaver.saveAs("https://www.realboybotclub.com/static/media/BlankBot.97cd6775.jpg", "BlankBot.jpg")
    }

    return (
        <div
            className={parseNetworkId !== 1 && metamaskConnected || !isMetamask ? "pb-3 root_welcome root_welcome_top TattooInRow" : "pb-3 root_welcome TattooInRow"}
        >
            <motion.div
                initial={{ opacity: 0, y: -200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 30 }}
                viewport={{ once: true, amount: 0 }}
            >
                <div className="d-flex justify-content-center fixed-panel DownloadIntroImg">
                    <img src={tattooImg} className="TattooImg" alt="" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </motion.div>
            <div className="row pt-5 d-flex justify-content-center">
                <span
                    className="connecthover connect DownloadBtn font-bold fs-13 text-uppercase"
                    onClick={download}
                >
                    Download
                </span>
            </div>
        </div >
    );
};

export default Tattoo;

