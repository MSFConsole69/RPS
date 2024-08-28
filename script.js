

function getComputerInput() {
    const computerChoices = ["rock", "paper", "scissor"];
    let randomizer = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[randomizer];
}


function getUserInput() {
    let choice = prompt("Gimme your input: ").toLowerCase();

    if (choice === 'rock') {
        return choice;
    }

    else if (choice === 'paper') {
        return choice;
    }

    else if (choice === 'scissor') {
        return choice;
    }
}





let humanScore = 0;
let computerScore = 0;

function playRound(user, computer) {
    switch (user) {
        case 'rock':
            switch (computer) {
                case 'rock':
                    alert("It's a tie!");
                    break;
                case 'paper':
                    alert("You lost!");
                    computerScore += 1;
                    break;
                case 'scissor':
                    alert("You won!");
                    humanScore += 1;
                    break;
            }
            break;

        case 'paper':
            switch (computer) {
                case 'rock':
                    alert("You won!");
                    humanScore += 1;
                    break;
                case 'paper':
                    alert("It's a tie!");
                    break;
                case 'scissor':
                    alert("You lost!");
                    computerScore += 1;
                    break;
            }
            break;

        case 'scissor':
            switch (computer) {
                case 'rock':
                    alert("You won!");
                    humanScore += 1;
                    break;
                case 'paper':
                    alert("You lost!");
                    computerScore += 1;
                    break;
                case 'scissor':
                    alert("It's a tie!")
                    break;
            }
            break;

        default:
            alert("Invalid input!");
    }

}


function playGame() {
    for (let roundCounter = 0; roundCounter < 5; roundCounter++) {
        const userInput = getUserInput();
        const computerInput = getComputerInput();
        playRound(userInput, computerInput);
    }
    alert("User: " + humanScore);
    alert("Computer: " + computerScore);
}

playGame();



