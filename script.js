console.log("Let's do rock paper scissors!");

let playOption = ["rock", "paper", "scissors"];

function computerPlay() {
    return playOption[Math.floor(Math.random() * 3)];
}

function toCapital(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/*
2 params: 
+ playerSelection
+ computerSelection
======
Rock - Paper || Paper - Scissors || Scissors - Rock => lose
Paper - Rock || Scissors - Paper || Rock - Scissors => win

output result: Paper beats Rock
*/

function playRound(playerSelection, computerSelection) {
    let playerSelectionLowerCase = playerSelection.toLowerCase();
    
    switch(true) {
        case playerSelectionLowerCase === "rock" && computerSelection === "paper":
        case playerSelectionLowerCase === "paper" && computerSelection === "scissors":
        case playerSelectionLowerCase === "scissors" && computerSelection === "rock":
            return `You Lose! ${toCapital(computerSelection)} beats ${toCapital(playerSelectionLowerCase)}`;
            break;
        
        case playerSelectionLowerCase === "paper" && computerSelection === "rock":
        case playerSelectionLowerCase === "scissors" && computerSelection === "paper":
        case playerSelectionLowerCase === "rock" && computerSelection === "scissors":
        return `You Win! ${toCapital(playerSelectionLowerCase)} beats ${toCapital(computerSelection)}`;
        break;

        default:
            return "Draw! Let's play more";
    }

}

let playerSelection = "rOck";
let computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));