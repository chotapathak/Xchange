// SPDX-License-Identifier: MIT
//import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

//import 'https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol';
pragma solidity ^0.8.0;

import "./Token.sol";

contract dBank {

    Token private token;
    //adding mappings to get Balance of token , time of deposit and status
    mapping(address => uint) public getEtherBalance;
    mapping(address => uint) public depositStart;
    mapping(address => bool) public isDeposited;

    //adding main events
    event Deposit(address indexed user, uint etherAmount, uint timeStart);
    event Withdraw(address indexed user, uint userBalance, uint depositTime, uint interest);

    //passing Token address of deployed Token contract
    constructor(Token _token) public {
        token = _token;
    }

    function deposit() payable public {
        // checking user status , and value
        require(isDeposited[msg.sender] == false, " Deposit already active!");
        require(msg.value >= 10**16, " Deposit value must be >= 0.01 ETH");
       // getting owner balance and depositing value to it and Starting timestamp of transaction
        getEtherBalance[msg.sender] = getEtherBalance[msg.sender] + msg.value;
        depositStart[msg.sender] = depositStart[msg.sender] + block.timestamp;
        //activated deposit status successfully
        isDeposited[msg.sender] = true;
        emit Deposit(msg.sender, msg.value, block.timestamp);
    }

    function withdraw() public {
        //check if msg.sender deposit status is true
        require(isDeposited[msg.sender] == true, 'Error: No previous deposit');
        uint userBalance = getEtherBalance[msg.sender];

        uint depositTime = block.timestamp - depositStart[msg.sender];
        //calc accrued interest
        uint interestPerSecond = 31668017 * (userBalance / 1e16); // 10% APY per year for 0.01 ETH
        uint interest = interestPerSecond * depositTime;

        token.mint(msg.sender, interest);

        payable(msg.sender).transfer(userBalance);

        depositStart[msg.sender] = 0;
        getEtherBalance[msg.sender] = 0;
        isDeposited[msg.sender] = false;

        emit Withdraw(msg.sender, userBalance, depositTime, interest);

    }

    function borrow() payable public {
        //check if collateral is >= than 0.01 ETH
        //check if user doesn't have active loan

        //add msg.value to ether collateral

        //calc tokens amount to mint, 50% of msg.value

        //mint&send tokens to user

        //activate borrower's loan status

        //emit event
    }

    function payOff() public {
        //check if loan is active
        //transfer tokens from user back to the contract

        //calc fee

        //send user's collateral minus fee

        //reset borrower's data

        //emit event
    }
}
