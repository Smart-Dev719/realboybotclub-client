import React from "react";

const MetamaskError = (props) => {
    const { networkId, metamaskConnected, isMetamask } = props;
    return (
        <div>
            {networkId !== 1 && metamaskConnected && (
                <div className="network-err-msg fs-25 text-white text-center metamaskbell font-bold text-uppercase">
                    To use master9eyes, please switch to main network
                </div>
            )}
            {!isMetamask && (
                <div className="network-err-msg fs-25 text-white text-center metamaskbell font-bold text-uppercase">
                    Non-Ethereum browser detected. You should consider trying MetaMask!
                </div>
            )}
        </div>
    );
};

export default MetamaskError;