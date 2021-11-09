const userScoreCounter= document.querySelector('#user-score');
const cpuScoreCounter = document.querySelector('#cpu-score');
const winLoseMessage = document.querySelector('#win-lose-message');
const userIndicator = document.querySelector('#user-indicator');
const cpuIndicator = document.querySelector('#cpu-indicator');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
let user;
let cpu;
let userScore = 0;
let cpuScore = 0;
let decision;

//eventlisteners to receive user input and run game
//rock
rockBtn.addEventListener('click', function(){
    userChoice('rock');
    cpuChoice();
    compare();
    scoreUpdate();
    messageWriter();
    gameEnd();
    scoreUpdate();
})
//paper
paperBtn.addEventListener('click', function(){
    userChoice('paper');
    cpuChoice();
    compare();
    scoreUpdate();
    messageWriter();
    gameEnd();
    scoreUpdate();
})
//scissors
scissorsBtn.addEventListener('click', function(){
    userChoice('scissors');
    cpuChoice();
    compare();
    scoreUpdate();
    messageWriter();
    gameEnd();
    scoreUpdate();
})





//function that assigns the user's choice to the user variable and displays it in the indicator
function userChoice(choice) {
    user = choice;
    userIndicator.textContent = `You chose ${user}.`;
}
//function to assign the cpu a random choice and display it in the dom
function cpuChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    switch (randomNum){
        case 0:
            cpu = 'rock';
            break;
        case 1:
            cpu = 'paper';
            break;
        case 2:
            cpu = 'scissors';
            break;
    }
    cpuIndicator.textContent = `Computer chose ${cpu}.`;
}

//function to compare user and cpu and return the win/lose message
//it will also increment the appropriate score counter
function compare() {
    if (user === cpu) {
        decision = 'tie';
    }
    else if (user === 'rock') {
        if (cpu === 'paper') {
            cpuScore++;
            decision = "loss";
        }
        else {
            userScore ++;
            decision = "win";
        }
    }
    else if (user === 'paper') {
        if (cpu === 'scissors') {
            cpuScore++;
            decision = "loss";
        }
        else {
            userScore ++;
            decision = "win";
        }
    }
    else if (user === 'scissors') {
        if (cpu === 'rock') {
            cpuScore++;
            decision = "loss";
        }
        else {
            userScore ++;
            decision = "win";
        }
    }
}
//dsiplays a message to identify the winner of the round
function messageWriter() {
    if (decision === 'tie'){
        winLoseMessage.textContent = "It's a tie!";
    }
    else if (decision === 'loss') {
        winLoseMessage.textContent = 'Sorry! You lost this round.';
    }
    else if (decision === 'win') {
        winLoseMessage.itextContent = 'You won!';
    }
}
//updates the dom to reflect the appropriate scores
function scoreUpdate() {
    userScoreCounter.textContent = userScore;
    cpuScoreCounter.textContent = cpuScore;
}
//checks to see if the score goal has been reached and displays proper alert
function gameEnd() {
    if (userScore === 3) {
        alert(`You won the best of 5! \n Score: ${userScore} to ${cpuScore}`);
        userScore = 0;
        cpuScore = 0;
        winLoseMessage.textContent = '';
        cpuIndicator.textContent = '';
        userIndicator.textContent = '';
    }
    else if (cpuScore === 3){
        alert(
            `Oh no! You lost the best of 5! \n Score: ${userScore} to ${cpuScore}`
        );
        userScore = 0;
        cpuScore = 0;
        winLoseMessage.textContent = '';
        cpuIndicator.textContent = '';
        userIndicator.textContent = '';
    }
}