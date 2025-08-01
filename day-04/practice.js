console.log("this is comming from practice js");

let catchingBus = true;

if (catchingBus) {
    console.log("I will reach home on time.");
    
} else {
    console.log("I will be late to reach.");
    
} 

let poisition = 1;

switch (poisition) {
    case 1:
        console.log("Print 1");
        
        break;

    default:
        console.log("Comming form default");
        
        break;
}

let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}

/* 
*2. Build an ATM Cash Withdrawal System
Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.
*/

let amount = 700;

if ( amount % 100 === 0 ) {
    console.log("Withdrawn successfull");
    
} else {
    console.log("Invalid amount");
    
}

// Write a simple calculator that takes an operator (+, -, , /, %) as input, and performs the operation on two numbers. Print the output on the console.

let x = 10;
let y = 50;

let equationSign = "+";

switch (equationSign) {
    case "+": 
        console.log( x + y);
    break;
    case "-": 
        console.log( x - y);
    break;
    case "*": 
        console.log( x * y);
    break;
    case "/": 
        console.log( x / y);
    break;
    case "%": 
        console.log( x % y);
    break;

    default: 
        console.log("type valid equation sign");
        
}

let aries = "March" && "April" ? true : false
let tarus = "April" && "May" ? true : false
let check = "aries"

switch (check) {
    case aries:
        console.log("You are aries");
        break;
    case tarus: 
        console.log("You are tarus");
        break;
    default: 
        console.log("Invallid input");
        
}
