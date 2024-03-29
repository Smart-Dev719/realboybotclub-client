import React, { useState, useEffect } from "react";
import FlipCountdown from "@rumess/react-flip-countdown";
import calculator from "../../assets/image/calculator.png";
import { motion } from "framer-motion/dist/framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { mintNft } from "../../web3/web3";
import { onCheckMintable, onGetMintData } from "../../redux/actions";
import swal from "sweetalert";
import Modal from "react-modal";
import { CloseOutlined } from "@ant-design/icons";

import HeaderLogo from "../../assets/image/modal.jpg";

const Mint = (props) => {
  const toDateTypeString = (mdate) => {
    if (mdate < 10) return "0" + mdate;
    else return "" + mdate;
  };
  const EndAtUTC = new Date(2022, 9, 1, 0, 0, 0, 0);
  const endAt = new Date(EndAtUTC.getTime() - (new Date()).getTimezoneOffset()*60000);
  const { account } = props;

  const dispatch = useDispatch();
  // eslint-disable-next-line
  const [preLoading, setPreLoading] = useState(false);
  const [selectedCount, setSelectedCount] = useState(1);
  const mintable = useSelector((state) => state.mint);
  // eslint-disable-next-line
  const [mintLoading, setMintLoading] = useState(false);
  const [mintStatus, setMintStatus] = useState(false);
  const [viewModal, setViewModal] = useState(false);

  useEffect(() => {
    if (account) {
      setPreLoading(true);
      dispatch(
        onCheckMintable({
          address: account
        })
      );
    }
  // eslint-disable-next-line
  }, [account]);

  // eslint-disable-next-line
  useEffect(async () => {
    if (mintable.count || mintable.failedMsg) {
      setPreLoading(false);
    }
    if (mintable.failedMsg) {
      setMintLoading(false);
      swal("Sorry!", mintable.failedMsg, "warning");
    }
    if (mintable.mintData.success === true) {
      const price = mintable.mintData.price;
      const tokenAmount = mintable.mintData.tokenAmount;
      await mintNft(price, tokenAmount, account)
        .then((data) => {
          setMintStatus(data);
          setMintLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  // eslint-disable-next-line
  }, [mintable]);

  useEffect(() => {
    if (mintStatus) {
      setViewModal(true);
    }
  }, [mintStatus]);

  const handleMint = () => {
    setMintLoading(true);
    dispatch(onGetMintData({ address: account, count: selectedCount }));
  };

  const plus_nft = (e_nft) => {
    var p_nft = e_nft + 1;
    if (p_nft >= 10) {
      // setTotalPrice((10 * initalPrice).toFixed(1));
      setSelectedCount(10);
    } else {
      // setTotalPrice((p_nft * initalPrice).toFixed(1));
      setSelectedCount(p_nft);
    }
  };
  const minus_nft = (e_nft) => {
    var p_nft = e_nft - 1;
    if (p_nft < 1) {
      // setTotalPrice(initalPrice);
      setSelectedCount(1);
    } else {
      // setTotalPrice((p_nft * initalPrice).toFixed(1));
      setSelectedCount(p_nft);
    }
  };
  const max_nft = () => {
    // setTotalPrice((10 * initalPrice).toFixed(1));
    setSelectedCount(10);
  };

  return (
    <div className="row mt-5 justify-content-center">
      <Modal
        isOpen={viewModal}
        onRequestClose={() => setViewModal(false)}
        contentLabel="Example Modal"
        className="ConnectModal"
        overlayClassName="ConnectModalOverlay"
      >
        <div className="ConnectModalMain d-flex flex-column justify-content-center align-items-center">
          <div className="ModalHeader d-flex flex-column justify-content-between">
            <div className="d-flex justify-content-between">
              <span className="ModalHeaderText">
                <img src={HeaderLogo} className="ModalLogo" alt="" />
              </span>
              <span onClick={() => setViewModal(false)}>
                <CloseOutlined className="ModalCloseBtn" />
              </span>
            </div>
            <div className="ModalDescription d-flex flex-column align-items-center">
              <span className="ModalTitle">Congratulations!</span>
              <a
                href="https://opensea.io/collection/realboybotclub-v2"
                className="ModalText"
                target="_blank"
                rel="noreferrer"
              >
                You have successfully minted your RealBoyBotClub !
              </a>
            </div>
          </div>
        </div>
      </Modal>

      <div className="col-lg-7 col-cd-12 col-xs-12 d-flex flex-column justify-content-between main_mint">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          viewport={{ once: true, amount: 0 }}
          className="bg-pink date_panel"
        >
          <FlipCountdown hideYear hideMonth endAt={endAt} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          viewport={{ once: true, amount: 0 }}
          className="count_panel d-flex align-items-center font-bold"
        >
          <div className="mint_space"></div>
          <div className="d-flex flex-column text-white justify-content-center align-items-center price_area">
            <div>Price</div>
            <div>
              <span className="fs-30 text-pink totalprice">Free!</span>
              {/* ETH */}
            </div>
          </div>
          <div className="d-flex justify-content-end align-items-center minus_btn">
            <span
              className="fs-20 text-white cursor-pointer"
              onClick={() => minus_nft(selectedCount)}
            >
              <i className="fa fa-minus" />
            </span>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column cnt">
            <input type="text" value={selectedCount} disabled />
          </div>
          <div className="d-flex align-items-center plus_btn">
            <span
              className="fs-20 text-white cursor-pointer"
              onClick={() => plus_nft(selectedCount)}
            >
              <i className="fa fa-plus" />
            </span>
          </div>
          <div className="d-flex align-items-center justify-content-center max_area">
            <span
              className="d-flex align-items-center justify-content-center fs-20 cursor-pointer max_btn"
              onClick={max_nft}
            >
              max
            </span>
          </div>
          <div className="mint_space"></div>
        </motion.div>
        {
          account ? (
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 50 }}
              viewport={{ once: true, amount: 0 }}
              className="mint_btn"
              onClick={handleMint}
            >
              <span className="fs-30 ls-4 text-white font-bold">MINT NOW</span>
            </motion.button>
          ) : (
            <>
              <motion.button
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 50 }}
                viewport={{ once: true, amount: 0 }}
                className="mint_btn"
                disabled
              >
                <span className="fs-30 ls-4 text-white font-bold">MINT</span>
              </motion.button>
              <p style={{ color: "#fff", textAlign: "center" }}>Make sure to connect wallet first.</p>
            </>
          )
        }
        {/* <motion.button
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          viewport={{ once: true, amount: 0 }}
          className="mint_btn"
          // onClick={handleMint}
          disabled
        >
          <span className="fs-30 ls-4 text-white font-bold">MINT NOW</span>
        </motion.button> */}
      </div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0, type: "spring", stiffness: 100 }}
        viewport={{ once: true, amount: 0 }}
        className="col-lg-3 col-cd-6 col-md-6 col-xs-12 d-flex justify-content-end calculator_area"
      >
        <img src={calculator} alt="" width="90%" className="mint_calculator" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
        viewport={{ once: true, amount: 0 }}
        className="col-lg-2 col-cd-6 col-md-6 d-flex flex-column justify-content-end mint_main_text font-bold"
      >
        <h1>
          <div className="text-white">REAL</div>
        </h1>
        <h1>
          <div className="text-white">BOY</div>
        </h1>
        <h1>
          <div className="text-white">BOTS</div>
        </h1>
        <div className="text-white ls-3">AVAILABLE</div>
      </motion.div>
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

export default Mint;
