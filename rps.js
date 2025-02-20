function getComputerChoice() {
    let random = Math.floor(Math.random() * 3)
    let choice = !random
                    ? 'rock' 
                    : random == 1 
                        ? 'paper' 
                        : 'scissors';
    return choice;
}

function showGameResults() {
    if (humanScore > computerScore) {
        gameInfo.textContent = `Victory! ${humanScore} rounds to ${computerScore}.`;
    } else if (humanScore < computerScore) {
        gameInfo.textContent =`Defeat! ${computerScore} rounds to ${humanScore}.`;        
    } else {
        gameInfo.textContent =`Draw! ${computerScore} rounds to ${humanScore}.`;                
    }
    resetGame();
}

function resetGame() {
    round = 0;
    computerScore = 0;
    humanScore = 0;
    spanHumanScore.textContent = 0; 
    spanComputerScore.textContent = 0;
}

function playRound(e) {
    function getWinner(humanChoice, computerChoice) {
        let choiceToValue = (choice) => {
            let choiceValues = {
                'rock': 0,
                'paper': 1,
                'scissors': 2
            };
            return choiceValues[choice];    
        };
        let human = choiceToValue(humanChoice);
        let computer = choiceToValue(computerChoice);
        let winner;
        
        if (human == computer) {
            winner = 'draw';
        } else if ((human == computer - 2) || (human == computer + 1)) {
            winner = 'human';
        } else {
            winner = 'computer';
        }
        return winner;
    }

    let humanChoice = e.target.id;
    let computerChoice = getComputerChoice();
    let winner = getWinner(humanChoice, computerChoice);
    
    if (winner == 'human') {
        humanScore++;
        spanHumanScore.textContent = humanScore;
        gameInfo.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else if (winner == 'computer') {
        computerScore++;
        spanComputerScore.textContent = computerScore;
        gameInfo.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    } else {
        gameInfo.textContent = 'It\'s a draw.';
    }

    round++;

    if (round == 5) showGameResults();
}

let round = 0;
let computerScore = 0;
let humanScore = 0;
let spanHumanScore = document.querySelector('#human');
let spanComputerScore = document.querySelector('#computer');
let gameInfo = document.querySelector('.info');

document.querySelectorAll('button').forEach(el => {
    el.addEventListener('click', playRound);
});

