
var options = ["rock", "paper", "scissors"];

var playerScore = 0;
var computerScore = 0;

function computerPlay () {
    let randomIndex = Math.floor(Math.random() * 3);
    
    return options[randomIndex];
}

function playRound(e) {


    let playerSelection;
    let results;

    if(e.target.id === "rock-button") playerSelection = "rock"; 
    else if(e.target.id === "paper-button") playerSelection = "paper";
    else if (e.target.id === "scissors-button") playerSelection = "scissors";
    else return;

    let computerSelection = computerPlay();

    let pic;
    if(computerSelection === "rock") pic="rock.png";
    else if(computerSelection === "paper") pic="paper.webp"
    else if(computerSelection === "scissors") pic="scissors.jpg";

    document.getElementById("computer-selection").style.backgroundImage=`url(${pic})`;

    let playerSelectionIntValue = determineSelection(playerSelection);
    let computerSelectionIntValue = determineSelection(computerSelection);

    let difference = playerSelectionIntValue - computerSelectionIntValue;

    if(difference == 0) results = "Tie";
    else if (difference == -1 || difference == 2) {
        computerScore = computerScore + 1;
        results = `You lose. ${computerSelection} beats ${playerSelection}`;
    } else if(difference == 1 || difference == -2) {
        playerScore = playerScore + 1;
        results = `You win. ${playerSelection} beats ${computerSelection}`;
    }

    document.getElementById("result-container").textContent = results;

    document.getElementById("player-score").textContent = `PLAYER SCORE : ${playerScore}`;
    document.getElementById("computer-score").textContent = `COMPUTER SCORE : ${computerScore}`;

    if(playerScore === 5 || computerScore === 5) {
        let winner;
        if(playerScore === 5) winner = "PLAYER";
        else winner = "COMPUTER";

        alert(`${winner} WINS!`);
        computerScore = 0;
        playerScore = 0;
        results = "";
    }

    document.getElementById("result-container").textContent = results;

    document.getElementById("player-score").textContent = `PLAYER SCORE : ${playerScore}`;
    document.getElementById("computer-score").textContent = `COMPUTER SCORE : ${computerScore}`;


}

function determineSelection(selection) {
    if(selection === "rock") return 0;
    else if(selection === "paper") return 1;
    else if (selection === "scissors") return 2;
}

function game() {

    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt('Enter choice: ');
        const computerSelection = computerPlay();

        console.log(playRound(playerSelection, computerSelection));
    }

    if(computerScore == playerScore) {
        console.log("It is a tie");
    } else if(computerScore > playerScore) {
        console.log("Computer wins!");
    } else {
        console.log("You win!");
    }
}

function addListeners() {
    let playerButtons = document.getElementsByClassName("player-button");
    
    for(let i = 0; i < playerButtons.length; i++) {
        playerButtons[i].addEventListener("click", playRound);
    }
}

addListeners();

document.getElementById("player-score").textContent = `PLAYER SCORE : ${playerScore}`;
document.getElementById("computer-score").textContent = `COMPUTER SCORE : ${computerScore}`;