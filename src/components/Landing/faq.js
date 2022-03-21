import Faq from "react-faq-component";
// import { FiPlus } from "react-icons/fi";
import { motion } from 'framer-motion/dist/framer-motion';

export default function AppFaq() {
  return (
    <div className="row pt-5" id="members">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
        viewport={{ once: true, amount: 0 }}
      >
        <h1>
          <div className="text-white"><span className="text-white">FREQUENTLY ASKED QUESTIONS</span></div>
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
        viewport={{ once: true, amount: 0 }}
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
      title: "01 - Lorem ipsum dolor sit amet,",
      content: "Lorem ipsum dolor sit amet, consectetur "
    },
    {
      title: "02 - Nunc maximus, magna at ultricies elementum",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
    },
    {
      title: "03 - Curabitur laoreet, mauris vel blandit fringilla",
      content:
        "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
    },
    {
      title: "04 - What is the package version",
      content: "v1.0.5"
    }
  ]
};
