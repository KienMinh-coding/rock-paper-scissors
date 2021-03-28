console.log("Let's do rock paper scissors!");

let playOption = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    return playOption[Math.floor(Math.random() * 3)];
}

console.log(computerPlay());
