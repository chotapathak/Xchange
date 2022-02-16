// SPDX-License-Identifier: MIT

import 'https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol';

pragma solidity ^0.8.0;

contract Token is ERC20 {
    address public minter;
    //add minter changed event
    event MinterChanged(address indexed from, address to);

    constructor()
    payable ERC20("Defi Interest ", "DI") {
        minter = msg.sender;
    }

    function passMinterRole(address dbank) public returns (bool) {
        require(msg.sender == minter, "Error: Only owner can pass minter role");
        minter = dbank;

        emit MinterChanged(msg.sender, dbank);
        return true;

    }

    function mint(address account, uint256 amount) public {
        require(msg.sender == minter, "Error: msg sender is not minter");
        _mint(account, amount);
    }
}