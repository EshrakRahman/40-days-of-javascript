var filter = function(arr, fn) {
    let narr = [];
    for (let i = 0; i < arr.length; i++) {
        console.log(fn(arr[i]));
        
        

        if (fn(arr[i], i)) {
            narr.push(arr[i]);
        }
        if (fn(arr[i])) {


            narr.push(arr[i]);

        }


        
    }
    return narr;
};

let narr = filter([1,2,3], function firstIndex(n, i) { return i === 0; })

console.log(narr);
