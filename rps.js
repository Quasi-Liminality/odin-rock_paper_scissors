function getComputerChoice() {
    let random = Math.floor(Math.random() * 3)
    let choice = !random
                    ? 'rock' 
                    : random == 1 
                        ? 'paper' 
                        : 'scissors';
    return choice;
}

function getHumanChoice() {
    let choice = ''; 
    while (!(/^(rock|paper|scissors)$/).test(choice)) {
        choice = prompt('Rock, paper or scissors?').trim().toLowerCase();
    }
    return choice;
}

function playGame() {
    function playRound() {
        function choiceToValue(choice) {
            let choiceValues = {
                'rock': 0,
                'paper': 1,
                'scissors': 2
            };
            return choiceValues[choice];    
        }
        
        function getWinner(humanChoice, computerChoice) {
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
        
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let winner = getWinner(humanChoice, computerChoice);
        
        if (winner == 'human') {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        } else if (winner == 'computer') {
            computerScore++; 
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        } else {
            console.log('It\'s a draw.');
        }
    }
    
    let computerScore = 0;
    let humanScore = 0;

    for (let rounds = 0; rounds < 5; rounds++) playRound();

    if (humanScore > computerScore) {
        console.log(`Victory! ${humanScore} rounds to ${computerScore}.`);
    } else {
        console.log(`Defeat! ${computerScore} rounds to ${humanScore}.`);        
    }
}

playGame();

