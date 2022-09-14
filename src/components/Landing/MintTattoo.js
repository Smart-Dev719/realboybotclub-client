import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion/dist/framer-motion";
import { onCheckMintable, onGetMintData } from "../../redux/actions";
import { mintNft } from "../../web3/web3";
import "../../pages/css/MintTattoo.css";
import swal from 'sweetalert';
import Modal from "react-modal";
import { CloseOutlined } from '@ant-design/icons';

import HeaderLogo from "../../assets/image/modal.jpg";

const MintTattoo = (props) => {

  const { account } = props;

  const dispatch = useDispatch();
  // eslint-disable-next-line
  const [preLoading, setPreLoading] = useState(false);

  const mintable = useSelector((state) => state.mint);
  // eslint-disable-next-line
  const [mintLoading, setMintLoading] = useState(false);
  const [mintStatus, setMintStatus] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  // const [networkId, setNetworkId] = useState();
  // const [modal, setModal] = useState(false);

  useEffect(() => {
    if (account) {
      setPreLoading(true);
      dispatch(
        onCheckMintable({
          address: account,
        })
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

 // eslint-disable-next-line
  useEffect(async () => {
    if (mintable.count || mintable.failedMsg) {
      setPreLoading(false);
    }
    if (mintable.failedMsg && props.mintType === "01") {
      setMintLoading(false);
      swal("Sorry!", mintable.failedMsg, "warning");
    }
    if (mintable.mintData.success === true && props.mintType === "01") {
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
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mintable]);

  useEffect(() => {
    if (mintStatus) {
      setViewModal(true);
    }
  }, [mintStatus]);

  // eslint-disable-next-line
  const handleMint = () => {
    // alert(selectedCount);
    setMintLoading(true);
    dispatch(onGetMintData({ address: account, count: selectedCount }));
    // setType(props.mintType);
  };

  // eslint-disable-next-line
  const handleClose = () => {
    setViewModal(false);
  };

  let introTxt = "Under";
  let max = 4;
  let min = 1;
  let initalPrice = 0.28;
  const Decimal = 2;

  if (props.mintType === "02") {
    introTxt = "Over";
    max = 20;
    min = 5;
    initalPrice = 0.28;
  }
  console.log(Math.pow);
  const [selectedCount, setSelectedCount] = useState(min);
  const [totalPrice, setTotalPrice] = useState((min * initalPrice).toFixed(Decimal));
  const imgUrl = "/assets/image/tattoo_mint" + props.mintType + ".jpg";
  const plus_nft = (e_nft) => {
    var p_nft = e_nft + 1;
    if (p_nft >= max) {
      setTotalPrice((max * initalPrice).toFixed(Decimal));
      setSelectedCount(max);
    } else {
      setTotalPrice((p_nft * initalPrice).toFixed(Decimal));
      setSelectedCount(p_nft);
    }
  };
  const minus_nft = (e_nft) => {
    var p_nft = e_nft - 1;
    if (p_nft < min) {
      setTotalPrice((min * initalPrice).toFixed(Decimal));
      setSelectedCount(min);
    } else {
      setTotalPrice((p_nft * initalPrice).toFixed(Decimal));
      setSelectedCount(p_nft);
    }
  };
  const max_nft = () => {
    setTotalPrice((max * initalPrice).toFixed(Decimal));
    setSelectedCount(max);
  };

  return (
    <div className="PageMintTattoo align-items-center">

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
              <span className="ModalHeaderText"><img src={HeaderLogo} className="ModalLogo" alt='' /></span><span onClick={() => setViewModal(false)}><CloseOutlined className="ModalCloseBtn" /></span>
            </div>
            <div className="ModalDescription d-flex flex-column align-items-center">
              <span className="ModalTitle">Congratulations!</span>
              <a href="https://opensea.io/collection/realboybotclub-v2" className="ModalText" target="_blank"
                rel="noreferrer">You have successfully minted your RealBoyBotClub !</a>
            </div>
          </div>

        </div>
      </Modal>


      <div className="MintIntroImg">
        <img src={imgUrl} alt="mint-intro-img01" />
      </div>

      <div className="MintMainSection d-flex flex-column justify-content-center align-items-center">
        <div className="MintLine"></div>

        <h3 className="text-uppercase MintIntroText2">
          Booking<br></br>
          {introTxt} 5 Days
        </h3>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          viewport={{ once: true, amount: 0 }}
          className="count_panel MintCountPanel d-flex align-items-center font-bold"
        >
          <div className="mint_space"></div>
          <div className="d-flex flex-column text-white justify-content-center align-items-center price_area MintPricePanel">
            <div className="price-label">Price</div>
            <div>
              <span className="fs-30 text-pink totalprice total-price">{totalPrice}</span>{" "}
              ETH
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
              className="mint_btn MintSoonBtn"
              // onClick={handleMint}
              disabled
            >
              <span className="fs-30 ls-4 text-white font-bold MintSoonBtnText">
                MINT
              </span>
            </motion.button>
          ) : (
            <>
              <motion.button
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 50 }}
                viewport={{ once: true, amount: 0 }}
                className="mint_btn MintSoonBtn"
                disabled
              >
                <span className="fs-30 ls-4 text-white font-bold MintSoonBtnText disable">
                  MINT NOW
                </span>
              </motion.button>
              <p style={{ color: "#fff" }}>Make sure to connect wallet first.</p>
            </>
          )
        }
      </div>
    </div>
  );
};

export default MintTattoo;
