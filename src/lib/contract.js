
import Web3Utils from 'web3-utils';
import Web3 from 'web3';
import { abi } from './abi';

export const sendTransaction = async(myAddress, contractAddress, amount) => {
    window.web3 = new Web3(window.web3.currentProvider);
    await window.ethereum.enable();
    const decimals = 18;
    const abiInterface = new window.web3.eth.Contract(abi, contractAddress)
    console.log(abiInterface);
    const token_amount =  Web3Utils.numberToHex(amount * Math.pow(10, decimals));

    const encodedData = abiInterface.methods.donate().encodeABI();
    try {

        const transactionHash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [
            {
            from: myAddress,  // The error was here!
            to: contractAddress,
            data: encodedData,
            value: token_amount,
            chainId: 5
            },
        ],
        });
        console.log('success');
        console.log(transactionHash);
    } catch (error) {
        console.error(error);
    }
}