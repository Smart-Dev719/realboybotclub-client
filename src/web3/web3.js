export const mintNft = async (price, tokenAmount, address) => {

    if (window.web3) {
        var web3 = window.web3;

        const RBBC = require("./RealBoyBotClub.json");
        const add = web3.utils.toChecksumAddress(process.env.REACT_APP_ADDRESS);
        const contract = new web3.eth.Contract(RBBC.abi, add);
        let e;
        try {
            var correctPrice = web3.utils.toBN(
                web3.utils.toWei('0.000000001', "ether").toString()
            );
        } catch (u) {
            console.log('err', u);
        }
        try {

            const price = await contract.methods.price(tokenAmount)

            e = await contract.methods.mint(tokenAmount).estimateGas({
                value: price,
                from: address
            })
        } catch (u) {
            console.log('error', u)
        }
        let d = await web3.eth.getGasPrice();
        let c;
        try {
            c = await contract.methods.mint(tokenAmount).send({
                from: address,
                gas: parseInt(e),
                gasPrice: parseInt(1.2 * d),
                value: correctPrice * tokenAmount,
                maxFeePerGas: null,
            })
        } catch (u) {
            console.log('send error', u);
        }

        if (c) {
            return c.status;
        }
    }
}