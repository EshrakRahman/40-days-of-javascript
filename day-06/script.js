console.log("worked");

function sum( a, b) {
    const result = a + b;
    return result;

}

function double (x) {
    return 2 * x;
}

console.log(double(sum(4,5)));

function calc (a,b=1) {
    return (2* (a +b))
}

const resVar = calc(2);
console.log(resVar);

function calculateThis (x,y, ...rest) {
    console.log(x,y,rest);
    
}

calculateThis(2,3,4,5,6,6,6,63,6);

function outer () {
    console.log("outer");

    function inner() {
        console.log("inner");
        
    }

    inner();
    
}

function foo (func) {
    console.log("foo");

    func();
    
}

foo(function () {
    console.log("bux");
    
})

let greetMe = () => {
    console.log("Hello");
    
}

greetMe();

(function() {
    console.log("IIFE");
    
})()