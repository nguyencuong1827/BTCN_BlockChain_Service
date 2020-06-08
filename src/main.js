const {BlockChain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('66944e6e5c3a51e8fc96c88430836d34714d8b6ccac2bf7249e95c116606a76a');
const myWalletAdress = myKey.getPublic('hex');

let doubleSevenCoin = new BlockChain();

const txl = new Transaction(myWalletAdress, 'public key go here', 10);
txl.signTransaction(myKey);
doubleSevenCoin.addTransaction(txl);


console.log("\n Starting the miner...");
doubleSevenCoin.minePendingTransactions(myWalletAdress);

console.log("\n Balance of xavier is: ", doubleSevenCoin.getBalanceOfAddress(myWalletAdress));

doubleSevenCoin.chain[1].transactions[0].amount = 1;
console.log("Is chain vaild? ", doubleSevenCoin.isChainValid());
