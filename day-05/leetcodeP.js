console.log("connected");

var compose = function(functions) {
    
    return function(x) {
            return functions.reduceRight((acc, fn) => fn(acc), x);

    }
};


 const fn = compose([x => x + 1, x => x * x, x => 2 * x],8);
 console.log(fn(4));
//  fn(4) 


