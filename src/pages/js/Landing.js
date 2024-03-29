import React, { Fragment, useEffect, useState } from "react";
import Header from "../../components/Landing/header";
import MetamaskError from "../../components/metamaskError";
import Welcome from "../../components/Landing/welcome";
import Seat from "../../components/Landing/seat";
import Mint from "../../components/Landing/mint";
import Welldown from "../../components/Landing/welldown";
import Stencil from "../../components/Landing/stencil";
import Ourstory from "../../components/Landing/ourstory";
import Roadmap from "../../components/Landing/roadmap";
import Team from "../../components/Landing/team";
import Faq from "../../components/Landing/faq";
import Footer from "../../components/Landing/footer";
import Web3 from "web3";
import "../css/landing.css";


const Landing = () => {
  const [metamaskConnected, setMetamaskConnnected] = useState(false);
  const [account, setAccount] = useState();
  const [networkId, setNetworkId] = useState();
  const [isMetamask, setIsMetamask] = useState(true);
// eslint-disable-next-line
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
      <div className="Section1">
        <Header
          networkId={networkId}
          isMetamask={isMetamask}
          metamaskConnected={metamaskConnected}
          setMetamaskConnnected={setMetamaskConnnected}
          account={account}
        />
        <div className="container">
          <Welcome
            networkId={networkId}
            isMetamask={isMetamask}
            metamaskConnected={metamaskConnected}
          />
          {/* <Fixed /> */}
          <Seat />
          <Mint
            networkId={networkId}
            isMetamask={isMetamask}
            metamaskConnected={metamaskConnected}
            setMetamaskConnnected={setMetamaskConnnected}
            account={account}
          />
          <Welldown />
          <Stencil />
          <Ourstory />
          <Roadmap />
          <Team />
          <Faq />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Landing;
