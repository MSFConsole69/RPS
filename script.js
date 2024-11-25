

function getComputerInput() {
    const computerChoices = ["rock", "paper", "scissor"];
    let randomizer = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[randomizer];
}

let humanScore = 0;
let computerScore = 0;


let rock = document.createElement('button');
let paper = document.createElement('button');
let scissor = document.createElement('button');
let play = document.querySelector('.play');

let content = document.querySelector('.choices');
content.style.cssText = 'display: block;';

let scoreBoard = document.createElement('div');
scoreBoard.style.cssText = 'display: block;';

let human = document.createElement('span');
human.id = 'human';

let computer = document.createElement('span');
computer.id = 'computer';



play.addEventListener('click', () => {
    play.remove();
    content.appendChild(rock);
    rock.textContent = "Rock";
    rock.id = 'rock';
    content.appendChild(paper);
    paper.textContent = "Paper";
    paper.id = 'paper';
    content.appendChild(scissor);
    scissor.textContent = "Scissor";
    scissor.id = 'scissor';
    content.appendChild(scoreBoard);
    scoreBoard.appendChild(computer);
    scoreBoard.appendChild(human);
})

rock.addEventListener('click', () => {
    let computerInput = getComputerInput();

    switch(computerInput){
        case 'rock':
            alert("Tie!");
        break;

        case 'paper':
            console.log("Lost!");
            computerScore += 1;
            computer.textContent = "Computer: " + computerScore;
        break;

        case 'scissor':
            console.log("Won!");
            humanScore += 1;
            human.textContent = "Human: " + humanScore;
        break;
    }
})

paper.addEventListener('click', () => {
    let computerInput = getComputerInput();

    switch(computerInput){
        case 'rock':
            console.log("Won!");
            humanScore += 1;
            human.textContent = "Human: " + humanScore;
        break;

        case 'paper':
            alert("Tie!");
        break;

        case 'scissor':
            console.log("Lost!");
            computerScore += 1;
            computer.textContent = "Computer: " + computerScore;
        break;
    }
})

scissor.addEventListener('click', () => {
    let computerInput = getComputerInput();

    switch(computerInput){
        case 'rock':
            console.log("Won!");
            humanScore += 1;
            human.textContent = "Human: " + humanScore;
        break;

        case 'paper':
            alert("Tie!");
        break;

        case 'scissor':
            console.log("Lost!");
            computerScore += 1;
            computer.textContent = "Computer: " + computerScore;
        break;
    }
})


// score.addEventListener('click', () => {
//     alert(humanScore + ' ' + computerScore);
// })

// play.addEventListener('click', () => {
//     alert(humanScore + ' ' + computerScore);
// })















