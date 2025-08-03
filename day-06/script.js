// console.log("worked");

// function sum( a, b) {
//     const result = a + b;
//     return result;

// }

// function double (x) {
//     return 2 * x;
// }

// console.log(double(sum(4,5)));

// function calc (a,b=1) {
//     return (2* (a +b))
// }

// const resVar = calc(2);
// console.log(resVar);

// function calculateThis (x,y, ...rest) {
//     console.log(x,y,rest);
    
// }

// calculateThis(2,3,4,5,6,6,6,63,6);

// function outer () {
//     console.log("outer");

//     function inner() {
//         console.log("inner");
        
//     }

//     inner();
    
// }

// function foo (func) {
//     console.log("foo");

//     func();
    
// }

// foo(function () {
//     console.log("bux");
    
// })

// let greetMe = () => {
//     console.log("Hello");
    
// }

// greetMe();

// (function() {
//     console.log("IIFE");
    
// })()
//  1
function celsiusToFahrenheit (celsius) {
    return ((celsius * 9/5) + 32);
}

console.log(celsiusToFahrenheit(40));

//  2

function maxNumber(x,y) {
    if ( x > y) {
        return x;
    } else {
        return y;
    }
}

console.log(maxNumber(-5,-4));

//  3
// wob
function isPalindrome(str) {
    let forward = str;
    let backward = "";
    console.log(backward);
    
    for(let i = str.length-1; i >= 0; i--) {
        console.log(backward);
        console.log(str[i]);
        
        backward += str[i];
    }
    console.log(backward);
    

    if ( forward === backward) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("pop"));


function factorial(num) {
    let count = 1;
    for ( let i = 1; i <= num; i++ ) {
        count *= i;
    }
    return count;
}

console.log(factorial(6));



function countVowels(str) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        console.log(str[i]);
        
        if (str[i] === "a") {
            count++;  
        } else if ( str[i] === "e") {
            count++;
        } else if ( str[i] === "i") {
            count++;
        } else if ( str[i] === "o") {
            count++;
        } else if ( str[i] === "u") {
            count++;
        } 
    }

    return count;
}

console.log(countVowels("i am a boy"));


function capitalizeWords(str) {
    let capitalizeSentence = str[0].toUpperCase();
    for(let i = 1; i < str.length; i++) {
        capitalizeSentence += str[i]
        if ( str[i] === ' ') {
            capitalizeSentence += str[i+1].toUpperCase();
            i += 1;
        }
    }

    return capitalizeSentence;
}

console.log(capitalizeWords("here are you man"));


function greet(name, callback) {
    callback(name);
}

greet("Eshrak", function(name){
    console.log(name + " Greetings");
});




