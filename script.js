const rock = document.querySelector('.rock');

function getComputerInput() {
    const computerChoices = ["rock", "paper", "scissor"];
    let randomizer = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[randomizer];
}
