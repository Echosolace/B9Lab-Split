var accounts;
var account;

var contractaddress = "0xd2f15a2014d3a4136dc90e6b264b2aae7a811b38";
var address1;
var address2;

function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};

function refreshBalance() {
  contractbalance = web3.fromWei(web3.eth.getBalance(contractaddress));
  address1balance = web3.fromWei(web3.eth.getBalance(address1));
  address2balance = web3.fromWei(web3.eth.getBalance(address2));
  document.getElementById("contractaddress").innerHTML = contractaddress;
  document.getElementById("contractbalance").innerHTML = contractbalance;
  document.getElementById("address1").innerHTML = address1;
  document.getElementById("address1balance").innerHTML = address1balance;
  document.getElementById("address2").innerHTML = address2;
  document.getElementById("address2balance").innerHTML = address2balance;
};

function send(ether) {
  var txn = web3.eth.sendTransaction({ 
    from: web3.eth.coinbase, 
    to: contractaddress,
    value: web3.toWei(ether, "ether") 
  });
  window.location.reload(true); 
}

window.onload = function() {
  web3.eth.getAccounts(function(err, accounts) {
    if (err != null) {
      alert("There was an error fetching your accounts.");
      return;
    }

    if (accounts.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }

    account = accounts[0];
    address1 = accounts[1];
    address2 = accounts[2];
    refreshBalance();
  });
}
