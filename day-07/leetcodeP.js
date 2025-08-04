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
