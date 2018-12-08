// play rock, paper, scissors until computer or player reaches 5 wins

let playerWin = 0; // how many rounds player wins
let computerWin = 0; // how many rounds computer wins

// buttons to press in game
let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");

// change display after pressing begin to start game
let beginButton = document.querySelector(".begin");
let gameButtons = document.querySelectorAll(".game-button");
let pOpen = document.querySelector(".open");
let playerScore = document.querySelector(".player");
let computerScore = document.querySelector(".computer");
let message = document.querySelector(".message");
beginButton.addEventListener('click', () => {
    playerWin = 0;
    computerWin = 0;
    playerScore.textContent = "Player: 0";
    computerScore.textContent = "Computer: 0";
    pOpen.style.display = 'none';
    beginButton.style.display = 'none';
    gameButtons.forEach((button) => {
        button.style.display = 'block';
    });
    playerScore.style.display = 'block';
    computerScore.style.display = 'block';
    message.style.display = 'none';
});

// play round for each button press
rockButton.addEventListener('click', playRound);

paperButton.addEventListener('click', playRound);

scissorsButton.addEventListener('click', playRound);

// computer randomly chooses rock, paper, or scissors
function computerPlay() {
    const play = Math.floor(Math.random() * 3);
    if (play === 0) {
        return "rock";
    } else if (play === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// determine whether player or computer wins round. returns [i, j]
// where i is how much is added to player's score and j is how much
// is added to computer's score
function getScores(playerSelection, computerSelection) {
    let scores;
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            message.textContent = "It's a draw with rock and rock!";
            scores = [0, 0];
        } else if (computerSelection === "paper") {
            message.textContent = "You lose! Paper beats rock.";
            scores = [0, 1];
        } else {
            message.textContent = "You win! Rock beats scissors";
            scores = [1, 0];
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            message.textContent = "It's a draw with paper and paper!";
            scores = [0, 0];
        } else if (computerSelection === "scissors") {
            message.textContent = "You lose! Scissors beats paper.";
            scores = [0, 1];
        } else {
            message.textContent = "You win! Paper beats rock";
            scores = [1, 0];
        }
    } else {
        if (computerSelection === "scissors") {
            message.textContent = "It's a draw with scissors and scissors!";
            scores = [0, 0];
        } else if (computerSelection === "rock") {
            message.textContent = "You lose! Rock beats scissors.";
            scores = [0, 1];
        } else {
            message.textContent = "You win! Scissors beats paper";
            scores = [1, 0];
        }
    }
    message.style.display = "block";
    return scores;
}


// play a after button press and update score for player and computer
function playRound(e) {
    let computerSelection = computerPlay();
    let playerSelection = e.target.id;
    scores = getScores(playerSelection, computerSelection);
    playerWin += scores[0];
    computerWin += scores[1];
    playerScore.textContent = "Player: " + playerWin;
    computerScore.textContent = "Computer: " + computerWin;
    if (computerWin === 5) {
        message.textContent = "Computer wins the game! Better luck next time. Play again?"
        gameButtons.forEach((button) => {
            button.style.display = 'none';
        });
        beginButton.style.display = 'block';
    }
    if (playerWin === 5) {
        message.textContent = "Player wins the game! Congratulations! Play again?"
        gameButtons.forEach((button) => {
            button.style.display = 'none';
        });
        beginButton.style.display = 'block';
    }
}

