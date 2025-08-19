function outer() {
    let x = 10;

    return function inner() {
        console.log(x);
        
    }

}

const func = outer();
console.log(func());

function outerCount() {
    let count = 0;

    return function innerCount() {
        count++;
        console.log(count);
        
    }
}


const retVal = outerCount();
retVal();

