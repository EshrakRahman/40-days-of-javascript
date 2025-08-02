console.log("connected");
// for loop 


for ( let i = 1; i <= 5; i++) {
    console.log(i);
    
}

let total = 0;
for ( let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        total += i;
    }


}

console.log(total);

let language = "Javascript";

for( let i = 0; i < language.length; i++) {
    console.log(language[i]);
    
}

// Multiple counter 
for (let i = 1, j = 10; i <= 10 && j >= 1; i++, j--) {
    console.log( "*");
    
}

// printing star 


for(let i = 1; i <= 5; i++) {
    
    for(let j = 2; j <= 5; j++) {
        // console.log("");
        console.log("*");
        
    }
}