var getUserChoice = function (userInput) {
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('You must enter either "rock", "paper", or "scissors" or "bomb"');
    }
};

var getComputerChoice = function () {
    var randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else if (randomNumber === 2) {
        return 'scissors';
    }
};

var determineWinner = function (userChoice, computerChoice) {
    if (userChoice === 'bomb') {
        return 'The user won by the nuclear option';
    }

    if (userChoice === computerChoice) {
        return 'Game was a tie!';
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won!';

        }
        if (computerChoice === 'scissors') {
            return 'The computer won!';

        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer won!';
        }
        if (computerChoice === 'rock') {
            return 'The user won!';
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'paper') {
            return 'The user won!';
        }
        if (computerChoice === 'rock') {
            return 'The computer won!';
        }
    }
};

var playGame = function (userInput) {
    var userChoice = getUserChoice(userInput);
    var computerChoice = getComputerChoice();

    console.log('Computer Choice', computerChoice);
    console.log('User Choice', userChoice);

    var winnerText = determineWinner(userChoice, computerChoice);
    console.log(winnerText);
};


var userInput = prompt();

playGame(userInput);







