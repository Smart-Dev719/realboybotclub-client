import Faq from "react-faq-component";
// import { FiPlus } from "react-icons/fi";
import { motion } from 'framer-motion/dist/framer-motion';

export default function AppFaq() {
  return (
    <div className="row pt-5" id="faq">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
        viewport={{ once: true, amount: 0 }}
      >
        <h1>
          <div className="text-white"><span className="text-white font-bold">FREQUENTLY ASKED QUESTIONS</span></div>
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
        viewport={{ once: true, amount: 0 }}
        className="font-bold"
      >
        <Faq
          data={data}
          config={{
            arrowIcon: "+"
          }}
        />
      </motion.div>
    </div>
  );
}

const data = {
  rows: [
    {
      title: "01 - What do you get when you invest in the real boy boy club?",
      content: "Not only do you get your very own unique tattooed avatar, you also become apart of our amazing community. When we open up shop in the meta verse, you can leave your mark on our very own stencil wall, and be apart of the owners club. Along with all these perks you will also have a FREE 3D avatar of your bot in the metaverse with a range of different tattoos depending on the rarity of your bot."
    },
    {
      title: "02 - How much will it cost to mint a RBBC BOT?",
      content: "We at the RBBC want our community to have there say on how much the mint price should be, we would like eveyone to have a say, so that we can generate a fair price, this way we can make this project affordable and build a great community with our investors."
    },
    {
      title: "03 - When is the mint?",
      content: "The whitelist sale will begin at the end of May 2022, with the public sale following shortly after. Once all BOTS have been hand drawn by our artist, a mint date will be scheduled."
    },
    {
      title: "04 - What makes the RBBC different to other nfts?",
      content: "At RBBC, we believe there is no other NFT project, doing what we’re doing, we’re giving away more than any other NFT project yet, helping artists build there skills and show there art-work to the world. Artists can leave there mark within our community, and can make money creating and selling their designs."
    }
  ]
};
