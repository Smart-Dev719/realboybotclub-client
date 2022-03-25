import React from "react";

const MetamaskError = (props) => {
    const { networkId, metamaskConnected, isMetamask } = props;
    var parseNetworkId = parseInt(networkId);
    return (
        <div>
            {parseNetworkId !== 1 && metamaskConnected && (
                <div className="network-err-msg fs-20 text-white text-center metamaskbell font-bold text-uppercase">
                    <span>To use realboybotclub, please switch to Ethereum mainnet!</span>
                </div>
            )}
            {!isMetamask && (
                <div className="network-err-msg fs-20 text-white text-center metamaskbell font-bold text-uppercase">
                    <span>Non-Ethereum browser detected. You should consider trying &nbsp;<a href="http://metamask.io/" target="_blank" rel="noreferrer" className="supportmetamask"> MetaMask</a>!</span>
                </div>
            )}
        </div>
    );
};

export default MetamaskError;
