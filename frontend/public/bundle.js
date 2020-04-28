var contractABI =  [
    {
      "constant": true,
      "inputs": [],
      "name": "hello",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    }
  ];
var contractAddress =  '0x34384fd8e39e56968b7729f392D00cb27e92b22e';
var web3 = new Web3('http://localhost:9545')
var helloWorld = new web3.eth.Contract(contractABI, contractAddress);

document.addEventListener('DOMContentLoaded', () => {
	helloWorld.methods.hello().call()
		.then(result => {
		document.getElementById('hello').innerHTML = result
	});
});		