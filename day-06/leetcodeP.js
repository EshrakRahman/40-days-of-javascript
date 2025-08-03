var argumentsLength = function(...args) {
    let count = 0;
    args.forEach((s) => {
        count++;
    })

    return count;
    
};
