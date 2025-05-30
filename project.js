const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A : 2,
    B : 4,
    C : 6,
    D : 8
};

const SYMBOLS_VALUE = {
    A : 5,
    B : 4,
    C : 3,
    D : 2
};

const spin = ()=>{
    const symbols = [];
    for(const[symbol , count] of Object.entries(SYMBOLS_COUNT)){
       for(i=0 ; i<count ; i++){
        symbols.push(symbol);
       }
    }
    const reels = [];
for(let i=0 ; i<COLS ; i++){
    reels.push([]);
    const reelSymbols = [...symbols]
    for(let j=0 ; j<ROWS ; j++){
        const randomIndex = Math.floor( Math.random() * reelSymbols.length);
        const selectedSymbol = reelSymbols[randomIndex];
        reels[i].push(selectedSymbol);
        reelSymbols.splice(randomIndex,1);
    }
}
return reels;
};


const deposit = ()=>{
   while(true){
    let depositAmount = prompt("Enter a deposit Amount : ");
    let numericDepositAmount = parseFloat(depositAmount);

    if(isNaN(numericDepositAmount) || numericDepositAmount<=0){
        console.log("Invalid deposit amount!")
    }
    else{
        return numericDepositAmount;
    } 
}
};


const getNumberOfLines = ()=>{
    while(true){
        let noOfLines = prompt("Enter the number of Lines (1-3) : ");
        let numericNoOfLines = parseFloat(noOfLines);
    
        if(isNaN(numericNoOfLines) || numericNoOfLines<=0 || numericNoOfLines>=3){
            console.log("Invalid Number!")
        }
        else{
            return numericNoOfLines;
        } 
    }
}


const getBetAmount = (balance , lines)=>{
    while(true){
        let BetAmount = prompt("Enter the bet amount per line : ");
        let numericBetAmount = parseFloat(BetAmount);
    
        if(isNaN(numericBetAmount) || numericBetAmount<=0 || numericBetAmount>(balance/lines)){
            console.log("Invalid Bet amount!")
        }
        else{
            return numericBetAmount;
        } 
    }
}


let balance = deposit();
// console.log(balance);
let noOfLines = getNumberOfLines();
// console.log(noOfLines);
let BetAmount = getBetAmount(balance, noOfLines);
//  console.log(BetAmount);
const  reels = spin();
// console.log(reels);

