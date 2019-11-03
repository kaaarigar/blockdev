import Blockchain from './blockchain.js';

const bitcoin = new Blockchain();
bitcoin.createNewBlock(2389,'OR8YWO','2469944TFULG');
bitcoin.createNewTransaction(10000,'ERDYDJJYKH','XG5EIO8LG');
bitcoin.createNewBlock(2348,'DTYCG','ETURYCKU');

console.log(bitcoin);