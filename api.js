const express = require('express')
const app = express();
const bodyParser = require('body-parser');
//const blockchain = require('./blockchain');

import Blockchain from './blockchain' 

const bitcoin = new blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
const port= process.env.PORT || 4003;

app.get('/', function (req, res) {
  res.send('API for blockchain')
}) 
app.get('/blockchain', function (req, res) {
  res.send(bitcoin);
})
app.post('/transaction', function (req, res) {
  console.log(req.body);
  res.send(`The amount of transaction is ${req.body.amount}`);
})
app.get('/mine', function (req, res) {
  res.send('mine')
})
 
app.listen(port,function(){
  console.log("Listening to port "+ port);
});