// // You need to wrap a function so that:

// // It can be called only once.

// // Any further calls within 3 seconds will return undefined.

// // After 3 seconds, it resets — meaning it can be called once again.

// // Then the cycle repeats.

// function onceWithTimeout(fn, delay) {
//     let run = true;

//     return function () {
//         if ( !run) {
//             run = true;

//             setTimeout(() => {
//                 run = false;
//             }, 3000);
            
//             return fn(...args);
//         }
//         return undefined;
//     }
// }

// function wrapper(fn) {
//   console.log("wrapper called");

//   return function (...args) {
//     console.log("inner function called with args:", args);
//     return fn(...args);
//   };
// }

// function greet(name) {
//   return `Hello, ${name}`;
// }

// const wrappedGreet = wrapper(greet); // logs: "wrapper called"
// console.log(wrappedGreet("Eshrak")); // logs: "inner function called with args: ['Eshrak']"
//                                      // returns: "Hello, Eshrak"

// function greeting(name) {
//     return `hello, ${name}`;
// }

// function delayLogger(fn) {
//     return function (...args) {
//         console.log(`this is the main function parameter returning:`, args);

//         setTimeout(() => {
//             const result = fn(...args);
//             console.log(result);
//         }, 2000);
//     }
// }

// const delayedGreet = delayLogger(greeting);

// console.log(delayedGreet("Eshrak"));


// function onceWithReset(fn) {
//   let run = false;

//   return function (...args) {
//     if (!run) {
//       run = true;

//       // Call the function immediately
//       const result = fn(...args);

//       // Reset the flag after 3 seconds
//       setTimeout(() => {
//         run = false;
//       }, 3000);

//       return result;
//     }

//     // If it's already run and not yet reset
//     return undefined;
//   };
// }


// const onceFn = onceWithReset((x) => x * 2, 3000);
// console.log(onceFn(10));

// function greetMe (name) {
//     return `hello, ${name}`;
// }


// function atMost(fn, limit) {
//     let count = 0;

//     return function (...args) {
//         console.log(args);
        
//         console.log(count);
        
//         if (count < limit) {
//             count++;
//             console.log(count);
            
//             return fn(...args);
//         }
//         return undefined;
//     }
// }

// const limitedHello = atMost(greetMe, 2);
// console.log(limitedHello("eshrak"));
// console.log(limitedHello("eshrak"));
// console.log(limitedHello("eshrak"));


// function atMostPerInterval (fn, limit, interval) {
//     let count = 0;

//         setInterval(() => {
//             count = 0;
//         }, interval);
    
    

//     return function(...args) {
//         if ( limit > count) {
//             count++;
//             return fn(...args);
//         }
//         return undefined;
//     }
    
// }

// const greetLimiter = atMostPerInterval(greetMe, 2, 3000);

// console.log(greetLimiter("Eshrak")); // "Hi, Eshrak!"
// console.log(greetLimiter("Rahman")); // "Hi, Rahman!"
// console.log(greetLimiter("Rahman")); // "Hi, Rahman!"
// console.log(greetLimiter("Rahman")); // "Hi, Rahman!"
// console.log(greetLimiter("Rahman")); // "Hi, Rahman!"
// console.log(greetLimiter("Rahman")); // "Hi, Rahman!"

// console.log(greetLimiter("Again"));  
// console.log(greetLimiter("Again"));  
// console.log(greetLimiter("Again"));  


function limitCallsInWindow(fn, limit, interval) {
    const timeStamps = [];

    return function (...args) {
        const now = Date.now;

        // timeStamps = timeStamps.filter(() => )
    }
}

const sayHi = (name) => `Hi, ${name}`;
const limitedHi = limitCallsInWindow(sayHi, 2, 5000); 



console.log(limitedHi("David"));
console.log(limitedHi("rahman"));
console.log(limitedHi("karim"));

console.log(limitedHi("karmaran"));


console.log(Date.now);
