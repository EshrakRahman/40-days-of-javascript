console.log("connected");



function gussingANumberGame () {
    let userPrompt = Number(prompt("Guess a number between 1 to 10"));

    const minNum = 1;
    const maxNum = 10;
    console.log(userPrompt);
    
    let randomNumber = Math.floor(Math.random() * maxNum) + 1;
    console.log(randomNumber);

    let count = 1;
    for( let i = minNum; i <= maxNum; i++) {

        if (userPrompt > randomNumber) {
            console.log("Your guess is high");
            let newPromtp = Number(prompt("Guess a number between 1 to 10 again"));
            count++;
            if (randomNumber === newPromtp) {
                console.log(`your won with ${count} times`);
                break;
            }
            
        } 
        if (userPrompt < randomNumber) {
            console.log("Your guess is low");
            let newPromtp = Number(prompt("Guess a number between 1 to 10 again"));
            count++;
            if (randomNumber === newPromtp) {
                console.log(`your won with ${count} times`);
                break;
            }
        }
        
    }
}

gussingANumberGame();