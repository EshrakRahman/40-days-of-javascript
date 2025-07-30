// var createCounter = function(init) {
//     let res = init;
//     let current = init;
//     return {
//         increment: () => {
//             ++current;
//             // current = init;
//             console.log(current);
//             return current;
            
//         },
//         reset: () => {
//             current = res;
//             console.log(current);
            
//             return res;
//         },
//         decrement: () => {
//             init = current;
//             --current;
//             console.log(current);
            
//             return current;
            
//         }
//     }
    
// };

// let count = createCounter(107);
// console.log(count.increment());
// console.log(count.increment());
// console.log(count.decrement());
// console.log(count.decrement());
// console.log(count.increment());
// console.log(count.reset());
// console.log(count.increment());
// console.log(count.increment());
// console.log(count.decrement());
// console.log(count.decrement());

// leetcode day 3 problem 

// console.log(
//     "I am js file"
// );


// document.getElementById("someId").innerHTML = "I am something";

var map = function(arr, fn) {
    let narr = [];
    for(let i = 0; i < arr.length; i++) {
        narr[i] = fn(arr[i], i);

    }
    return narr;
    
};
let arr = [1,2,3];
// let plusone = function plusone(n) { return n + 1; };
// let plusI = function plusI(n, i) { return n + i; };
// let constant = function constant() { return 42; };
console.log(map(arr, function plusone(n) { return n + 1; }));

