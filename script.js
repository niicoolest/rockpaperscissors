
const RockPaperScissors = function() {
    const ROCK = "rock";
    const PAPER = "paper";
    const SCISSORS = "scissors";
    
    var options = [ROCK, PAPER, SCISSORS];
    
    var playerScore = 0;
    var computerScore = 0;
 
    function computerPlay () {
        let randomIndex = Math.floor(Math.random() * 3);
        
        return options[randomIndex];
    }
    
    function playRound(e) {
    
        let playerSelection;
        let results;
    
        const ROCK_BUTTON_ID = "rock-button";
        const PAPER_BUTTON_ID = "paper-button";
        const SCISSORS_BUTTON_ID = "scissors-button";
    
        if(e.target.id === ROCK_BUTTON_ID) playerSelection = ROCK; 
        else if(e.target.id === PAPER_BUTTON_ID) playerSelection = PAPER;
        else if (e.target.id === SCISSORS_BUTTON_ID) playerSelection = SCISSORS;
        else return;
    
        increaseSize(e.target.id);
        let computerSelection = computerPlay();
    
        let pic;
    
        if(computerSelection === ROCK) pic="rock.png";
        else if(computerSelection === PAPER) pic="paper.webp"
        else if(computerSelection === SCISSORS) pic="scissors.jpg";
    
        document.getElementById("computer-selection").style.backgroundImage =`url(${pic})`;
    
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
        setScores();
        
        if(playerScore === 5 || computerScore === 5) {

            setTimeout(() => {
                let winner;
                if(playerScore === 5) winner = "PLAYER";
                else winner = "COMPUTER";
    
                alert(`${winner} WINS!`)
                computerScore = 0;
                playerScore = 0;
                results = "";
                pic = "";
                document.getElementById("result-container").textContent = results;
                setScores();
                reset();
            }, 1);
        }
    }
    
    function determineSelection(selection) {
        if(selection === ROCK) return 0;
        else if(selection === PAPER) return 1;
        else if (selection === SCISSORS) return 2;
    }
    
    function addListeners() {
        let playerButtons = document.getElementsByClassName("player-button");
        
        for(let i = 0; i < playerButtons.length; i++) {
            playerButtons[i].addEventListener("click", playRound);
        }
    }

    function increaseSize(buttonId) {
        let playerButtons = document.getElementsByClassName("player-button");
        
        for(let i = 0; i < playerButtons.length; i++) {
            if(playerButtons[i].getAttribute('id') == buttonId) {
                playerButtons[i].style.width = '12vw';
                playerButtons[i].style.height = '22vh';
                playerButtons[i].style.border = 'solid';
                playerButtons[i].style.borderColor = 'red';
            } else {
                playerButtons[i].style.width = '10vw';
                playerButtons[i].style.height = '20vh';
                playerButtons[i].style.border = 'none';
            }
        }
    }

    function reset() {
        let playerButtons = document.getElementsByClassName("player-button");
        
        for(let i = 0; i < playerButtons.length; i++) {
            playerButtons[i].style.width = '10vw';
            playerButtons[i].style.height = '20vh';
            playerButtons[i].style.border = 'none';
        }

        document.getElementById('computer-selection').style.backgroundImage = '';
    }

    function setScores() {
        document.getElementById("player-score").textContent = `PLAYER SCORE : ${playerScore}`;
        document.getElementById("computer-score").textContent = `COMPUTER SCORE : ${computerScore}`;    
    }
    
    addListeners();
    setScores();
}

RockPaperScissors();