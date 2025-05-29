const prompt = require("prompt-sync")();

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


const getBetAmount = ()=>{
    while(true){
        let BetAmount = prompt("Enter the bet Amount : ");
        let numericBetAmount = parseFloat(BetAmount);
    
        if(isNaN(numericBetAmount) || numericBetAmount<=0 || numericBetAmount>depositAmount){
            console.log("Invalid deposit amount!")
        }
        else{
            return numericBetAmount;
        } 
    }
}

const getNewBalance = ()=>{
    
}

let depositAmount = deposit();
// console.log(depositAmount);
let noOfLines = getNumberOfLines();
// console.log(noOfLines);
let BetAmount = getBetAmount();
//  console.log(BetAmount);