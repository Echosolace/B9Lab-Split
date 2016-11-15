pragma solidity ^0.4.2;

contract Split {

	address owner;
	address address1 = 0x61a5534300bd7e1593f0ae7b899ceefdf3c05abd;
	address address2 = 0x220e055cf00ae77dc6e7ec224da5c6be4e99bcc0;

	function Split() {
		owner = msg.sender;
	}

	function() payable {
		uint amounttosend = msg.value / 2;
		if (!address1.send(amounttosend)) throw;
		if (!address2.send(amounttosend)) throw;
	}

}