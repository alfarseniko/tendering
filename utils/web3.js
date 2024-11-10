import { Web3 } from "web3";

if (window.ethereum) {
  let web3 = new Web3(window.ethereum);
  window.ethereum.request({ method: "eth_requestAccounts" });
} else if (window.web3) {
  web3 = new Web3(window.web3.currentProvider);
} else {
  alert("Please install MetaMask to use this dApp!");
}

export default web3;
