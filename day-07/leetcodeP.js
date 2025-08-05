console.log("connected");

function once(fn) {
  let called = false;
  return function (...args) {
    if (!called) {
      called = true;
      return fn(...args);
    }
    return undefined;
  }
}


 let fn = (a,b,c) => (a + b + c)
 let onceFn = once(fn)
 console.log(onceFn);
 
 
 console.log(onceFn(1,2,3));
 console.log(onceFn(2,3,6));
function add(a, b) {
  return a + b;
}

const onceAdd = once(add);

console.log(onceAdd(2, 3));  // ?
console.log(onceAdd(5, 6));  // ?
console.log(onceAdd(100, 200)); // ?

function outer(){
    let count = 0;

    return function inner() {
        count++;
        console.log(count);
        
    }
}

const inc = outer();
inc();
inc();
inc();
inc();
// function outer() {
//   let count = 0;
//   return function inner() {
//     count++;
//     console.log(count);
//   }
// }

// const inc = outer();
// inc(); // 1
// inc(); // 2
// inc(); // 3


function greet (name) {
    return function () {
        console.log("Hello " + name);
        
    }
}

let greetEshrak = greet("Eshrak");
greetEshrak();