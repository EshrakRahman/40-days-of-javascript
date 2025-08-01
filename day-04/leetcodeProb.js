var reduce = function(nums, fn, init) {
    let total = 0;
    if ( nums.length === 0 ) {
        return init;
        
    } else {
        for ( let i = 0; i < nums.length; i++) {
        total = fn(init, nums[i])

        init = total;
        
        }   
        return total;
        console.log(total);
        
    }
    
    
};

let c = reduce([1,2,3,4],function sum(accum, curr) { return accum + curr * curr; }, 100);

console.log(c);
console.log(8);

let ar = [];
console.log(ar.length);
