var createCounter = function(init) {
    let res = init;
    let current = init;
    return {
        increment: () => {
            ++current;
            // current = init;
            console.log(current);
            return current;
            
        },
        reset: () => {
            current = res;
            console.log(current);
            
            return res;
        },
        decrement: () => {
            init = current;
            --current;
            console.log(current);
            
            return current;
            
        }
    }
    
};

let count = createCounter(107);
console.log(count.increment());
console.log(count.increment());
console.log(count.decrement());
console.log(count.decrement());
console.log(count.increment());
console.log(count.reset());
console.log(count.increment());
console.log(count.increment());
console.log(count.decrement());
console.log(count.decrement());
