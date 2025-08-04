console.log("connected");

function rockPaperScissorsGame() {

    const userChoicePrompt = prompt("Enter Rock, Paper, Scissor");
    let userChoice = userChoicePrompt.toLowerCase();

    let computerChoice;

    const randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
        case 1:
            computerChoice = "rock";
            break;
        case 2: 
            computerChoice = "paper";
            break;
        case 3: 
            computerChoice = "scissors";
            break;
    }

    console.log("user selected", userChoice);
    console.log("computer selecte", computerChoice);


    if ( (userChoice === "rock" && computerChoice === "scissors") || 
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win, ya!!!!");
    } else if (userChoice === computerChoice) {
        console.log("It's a tie");
        
    } else if ( (userChoice === "scissors" && computerChoice === "rock") || 
        (userChoice === "rock" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "scissors")
    ) {
        console.log("Computer wins");
        
    } else {
        console.log("Please input a valid choice");
        
    }

    const playAgainPrompt = prompt("Do you want to play again? (y/n)");
    const playAgain = playAgainPrompt ? playAgainPrompt.toLocaleLowerCase(): "no";

    if (playAgain === "y") {
        rockPaperScissorsGame();
    } else {
        console.log("Thanks for playing");
        
    }
    
}

rockPaperScissorsGame();