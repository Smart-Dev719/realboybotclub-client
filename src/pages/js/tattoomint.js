import React, { Fragment, useEffect, useState } from "react";
import Header from "../../components/Landing/header";
import MetamaskError from "../../components/metamaskError";
import Welcome from "../../components/Landing/welcome";
import Footer from "../../components/Landing/footer";
import Web3 from "web3";
import "../css/landing.css";
import MintTattoo from "../../components/Landing/MintTattoo";

const Tattoomint = () => {
  const [metamaskConnected, setMetamaskConnnected] = useState(false);
  const [account, setAccount] = useState();
  const [networkId, setNetworkId] = useState();
  const [isMetamask, setIsMetamask] = useState(true);

  useEffect(async () => {
    await loadWeb3().then((data) => {
      if (data !== false) {
        loadBlockchainData();
      }
    });
  }, []);

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      setIsMetamask(false);
      return false;
    }
  };

  const loadBlockchainData = async () => {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    setNetworkId(networkId);
    if (accounts.length === 0) {
      setMetamaskConnnected(false);
    } else {
      setMetamaskConnnected(true);
      setAccount(accounts[0]);
    }

    window.ethereum.on("accountsChanged", (accounts) => {
      if (accounts.length > 0) setAccount(accounts[0]);
      else setAccount();
    });
    window.ethereum.on("networkChanged", (networkId) => {
      setNetworkId(networkId);
    });
  };

  return (
    <Fragment>
      <MetamaskError
        networkId={networkId}
        metamaskConnected={metamaskConnected}
        isMetamask={isMetamask}
      />
      <div>
        <Header
          networkId={networkId}
          isMetamask={isMetamask}
          metamaskConnected={metamaskConnected}
          setMetamaskConnnected={setMetamaskConnnected}
          account={account}
        />

        <div className="container">
          <h2 className="text-uppercase MintIntroText1">The Last 1000 Days</h2>
          <div className="minttatoos-container d-flex align-items-center justify-content-center">
            <MintTattoo mintType="01" />
            <MintTattoo mintType="02" />
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Tattoomint;
