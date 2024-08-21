

function getComputerInput() {
    const computerChoices = ["rock", "paper", "scissor"];
    let randomizer = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[randomizer];
}


function getUserInput(){
    let choice = prompt("Gimme your input: ");

    if (choice === 'rock'){
        return choice;
    }

    else if (choice === 'paper'){
        return choice;
    }

    else if (choice === 'scissor'){
        return choice;
    }
}


const userInput = getUserInput();
const computerInput = getComputerInput();
console.log(computerInput);

switch(userInput){
    case 'rock':
        switch(computerInput){
            case 'rock':
                alert("It's a tie!");
                break;
            case 'paper':
                alert("You lost!");
                break;
            case 'scissor':
                alert("You won!");
                break;
        }
        break; 

    case 'paper':
        switch(computerInput){
            case 'rock':
                alert("You won!");
                break;
            case 'paper':
                alert("It's a tie!");
                break;
            case 'scissor':
                alert("You lost!");
                break;
        }
        break;

    case 'scissor':
        switch(computerInput){
            case 'rock':
                alert("You won!");
                break;
            case 'paper':
                alert("You lost!");
                break;
            case 'scissor':
                alert("It's a tie!")
                break;
        }
        break;
}


