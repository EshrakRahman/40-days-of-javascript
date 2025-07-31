// 1. Odd or Even?
//  Take a number and find if the number is an odd or even number.
//  Print the number and result in the console.


let a = 10;
if ( a % 2 === 0) {
    console.log("Even");
    
} else {
    console.log("Odd");
    
}

let age = 19;
if (age >= 18) {
    console.log("U can drive");
    
} else {
    console.log("U can't drive for now");
    
}

let monthlySalary = 12300;
let yearlyBonus = (monthlySalary * 20) / 100
console.log( monthlySalary + yearlyBonus);


let color = "Red";
if (color === "Red") {
    console.log("Stop");
    
} else {
    console.log("Go");
    
}

let unitPrice = 150;
let unitsUsedByDay = 10;
let montlyBills = unitPrice * unitsUsedByDay;
console.log(montlyBills);
let yearlyReduce = (montlyBills * 12) * .20
console.log((montlyBills * 12) - yearlyReduce);

let checkLeapYear = 2025;

if (checkLeapYear % 4 === 0) {
    console.log("its a leap year");
    
} else {
    console.log("its not a leap year");
    
}




