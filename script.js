const finalResult = document.querySelector("#finalResult");
const displayScore = document.querySelector("#displayScore");
const buttons = document.querySelectorAll("button");
let playerScore = 0;
let computerScore = 0;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const container = document.querySelector("#container");
    const result = document.createElement("p");
    let playRoundResult = playRound(button.id, computerPlay());
    result.textContent = playRoundResult;
    container.appendChild(result);
    console.log(playRoundResult);

    calcScore(playRoundResult);

    displayScore.textContent = `YOU: ${playerScore} / COMPUTER: ${computerScore}`;

    if (playerScore === 5) {
      finalResult.textContent = "You Won";
    } else if (computerScore === 5) {
      finalResult.textContent = "You losed";
    }
  });
});

function calcScore(score) {
  if (playerScore < 5 && computerScore < 5) {
    if (score.indexOf("Win") === 4) {
      playerScore++;
    } else if (score.indexOf("Lose") === 4) {
      computerScore++;
    }
  }
}

function computerPlay() {
  const playOption = ["rock", "paper", "scissors"];
  return playOption[Math.floor(Math.random() * 3)];
}

function toCapital(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function playRound(playerSelection, computerSelection) {
  if (playerScore < 5 && computerScore < 5) {
    switch (true) {
      case playerSelection === "rock" && computerSelection === "paper":
      case playerSelection === "paper" && computerSelection === "scissors":
      case playerSelection === "scissors" && computerSelection === "rock":
        return `You Lose! ${toCapital(computerSelection)} beats ${toCapital(
          playerSelection
        )}`;
        break;

      case playerSelection === "paper" && computerSelection === "rock":
      case playerSelection === "scissors" && computerSelection === "paper":
      case playerSelection === "rock" && computerSelection === "scissors":
        return `You Win! ${toCapital(playerSelection)} beats ${toCapital(
          computerSelection
        )}`;
        break;

      default:
        return "Draw! Let's play more";
    }
  }
}
