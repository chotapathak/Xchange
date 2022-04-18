
// import './style.css';


    // <title>My DEX</title>
    function Swap () {  

// const serverUrl = "https://rinkeby.infura.io/v3/da8d5f6e4f1046d39fcf4adcae0a5c25"; //Server url from moralis.io
// const appId = "da8d5f6e4f1046d39fcf4adcae0a5c25"; // Application id from moralis.io

// let currentTrade = {};
// let currentSelectSide;
// let tokens;

// async function init() {
//   await Moralis.start({ serverUrl, appId });
//   await Moralis.enableWeb3();
//   await listAvailableTokens();
//   currentUser = Moralis.User.current();
//   if (currentUser) {
//     document.getElementById("swap_button").disabled = false;
//   }
// }


// function selectToken(address) {
//   closeModal();
//   console.log(tokens);
//   currentTrade[currentSelectSide] = tokens[address];
//   console.log(currentTrade);
//   renderInterface();
//   getQuote();
// }

// function renderInterface() {
//   if (currentTrade.from) {
//     document.getElementById("from_token_img").src = currentTrade.from.logoURI;
//     document.getElementById("from_token_text").innerHTML = currentTrade.from.symbol;
//   }
//   if (currentTrade.to) {
//     document.getElementById("to_token_img").src = currentTrade.to.logoURI;
//     document.getElementById("to_token_text").innerHTML = currentTrade.to.symbol;
//   }
// }

// async function login() {
//   try {
//     currentUser = Moralis.User.current();
//     if (!currentUser) {
//       currentUser = await Moralis.authenticate();
//     }
//     document.getElementById("swap_button").disabled = false;
//   } catch (error) {
//     console.log(error);
//   }
// }

// function openModal(side) {
//   currentSelectSide = side;
//   document.getElementById("token_modal").style.display = "block";
// }
// function closeModal() {
//   document.getElementById("token_modal").style.display = "none";
// }

// async function getQuote() {
//   if (!currentTrade.from || !currentTrade.to || !document.getElementById("from_amount").value) return;

//   let amount = Number(document.getElementById("from_amount").value * 10 ** currentTrade.from.decimals);

//   const quote = await Moralis.Plugins.oneInch.quote({
//     chain: "eth", // The blockchain you want to use (eth/bsc/polygon)
//     fromTokenAddress: currentTrade.from.address, // The token you want to swap
//     toTokenAddress: currentTrade.to.address, // The token you want to receive
//     amount: amount,
//   });
//   console.log(quote);
//   document.getElementById("gas_estimate").innerHTML = quote.estimatedGas;
//   document.getElementById("to_amount").value = quote.toTokenAmount / 10 ** quote.toToken.decimals;
// }

// async function trySwap() {
//   let address = Moralis.User.current().get("ethAddress");
//   let amount = Number(document.getElementById("from_amount").value * 10 ** currentTrade.from.decimals);
//   if (currentTrade.from.symbol !== "ETH") {
//     const allowance = await Moralis.Plugins.oneInch.hasAllowance({
//       chain: "eth", // The blockchain you want to use (eth/bsc/polygon)
//       fromTokenAddress: currentTrade.from.address, // The token you want to swap
//       fromAddress: address, // Your wallet address
//       amount: amount,
//     });
//     console.log(allowance);
//     if (!allowance) {
//       await Moralis.Plugins.oneInch.approve({
//         chain: "eth", // The blockchain you want to use (eth/bsc/polygon)
//         tokenAddress: currentTrade.from.address, // The token you want to swap
//         fromAddress: address, // Your wallet address
//       });
//     }
//   }
//   try {
//     let receipt = await doSwap(address, amount);
//     alert("Swap Complete");
//   } catch (error) {
//     console.log(error);
//   }
// }

// function doSwap(userAddress, amount) {
//   return Moralis.Plugins.oneInch.swap({
//     chain: "eth", // The blockchain you want to use (eth/bsc/polygon)
//     fromTokenAddress: currentTrade.from.address, // The token you want to swap
//     toTokenAddress: currentTrade.to.address, // The token you want to receive
//     amount: amount,
//     fromAddress: userAddress, // Your wallet address
//     slippage: 1,
//   });
// }

// init(); 
// document.getElementById("modal_close").onclick = closeModal;
// document.getElementById("from_token_select").onclick = () => {
//   openModal("from");
// };
// document.getElementById("to_token_select").onclick = () => {
//   openModal("to");
// };
// document.getElementById("login_button").onclick = login;
// document.getElementById("from_amount").onblur = getQuote;
// document.getElementById("swap_button").onclick = trySwap;

  return(

  <div class='Swap'>
    {/* <script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js" />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/moralis/dist/moralis.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script> */}
  {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"> */}
  {/* <div className="app"> */}
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">My DEX</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
            </ul>
            <button id="login_button" class="btn btn-outline-primary my-2 my-sm-0" type="submit">Sign in with Metamask</button>
        </div>
      </nav>
    <div class="container">
        <div class="row">
            <div class="col col-md-6 offset-md-3" id="window">
                <h4>Swap</h4>
                <div id="form">
                    <div class="swapbox">
                        <div class="swapbox_select token_select" id="from_token_select">
                            <img class="token_image" id="from_token_img" />
                            <span id="from_token_text"></span>
                        </div>
                        <div class="swapbox_select">
                            <input class="number form-control" placeholder="amount" id="from_amount" />
                        </div>
                    </div>
                    <div class="swapbox">
                        <div class="swapbox_select token_select"  id="to_token_select">
                            <img class="token_image" id="to_token_img" />
                            <span id="to_token_text"></span>
                        </div>
                        <div class="swapbox_select">
                            <input class="number form-control" placeholder="amount" id="to_amount" />
                        </div>
                    </div>
                    <div>Estimated Gas: <span id="gas_estimate"></span></div>
                    <button disabled class="btn btn-large btn-primary btn-block" id="swap_button">
                        Swap
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal" id="token_modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Select token</h5>
              <button id="modal_close" type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div id="token_list"></div>
            </div>
          </div>
        </div>
        </div>
        {/* </div> */}
      </div>
    // <script type="text/javascript" src="./index.js"></script>
)
}


export default Swap