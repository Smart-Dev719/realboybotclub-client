import React, { Fragment, useEffect, useState } from "react";
import Web3 from "web3";
import Header from '../../components/Home/header';
import MetamaskError from "../../components/metamaskError";
import Content from '../../components/Home/content';
import Footer from '../../components/Home/Footer';
import "../css/home.css";

const Home = () => {
    const [metamaskConnected, setMetamaskConnnected] = useState(false);
    const [account, setAccount] = useState();
    const [networkId, setNetworkId] = useState();
    const [isMetamask, setIsMetamask] = useState(true);

    useEffect(() => {
        async function fetchData() {
            await loadWeb3().then((data) => {
                if (data) {
                    loadBlockchainData();
                }
            });
        }
        fetchData();
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
            <div>
                <Header
                    networkId={networkId}
                    isMetamask={isMetamask}
                    metamaskConnected={metamaskConnected}
                />
                <MetamaskError
                    networkId={networkId}
                    metamaskConnected={metamaskConnected}
                    isMetamask={isMetamask}
                    account={account}
                />
                <div className="container">
                    <Content
                        networkId={networkId}
                        isMetamask={isMetamask}
                        metamaskConnected={metamaskConnected}
                    />
                </div>
                <Footer />
            </div>
        </Fragment>
    );
}

export default Home;