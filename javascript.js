const userScoreCounter= document.getElementById('user-score');
const cpuScoreCounter = document.getElementById('cpu-score');
const winLoseMessage = document.getElementById('win-lose-message');
const userIndicator = document.getElementById('user-indicator');
const cpuIndicator = document.getElementById('cpu-indicator');
let user;
let cpu;
let userScore = 0;
let cpuScore = 0;
let decision;

//function that assigns the user's choice to the user variable and displays it in the indicator
function userChoice(choice) {
    user = choice;
    userIndicator.innerHTML = `You chose ${user}.`;
}
//function to assign the cpu choice and display it in the indicator
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
    cpuIndicator.innerHTML = `Computer chose ${cpu}.`;
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
function messageWriter() {
    if (decision === 'tie'){
        winLoseMessage.innerHTML = "It's a tie!";
    }
    else if (decision === 'loss') {
        winLoseMessage.innerHTML = 'Sorry! You lost this round.';
    }
    else {
        winLoseMessage.innerHTML = 'You won!';
    }
}
function scoreUpdate() {
    userScoreCounter.innerHTML = userScore;
    cpuScoreCounter.innerHTML = cpuScore;
}
function gameEnd() {
    if (userScore === 3) {
        winLoseMessage.innerHTML = 'You won the best of 5!'
        userScore = 0;
        cpuScore = 0;
    }
    else if (cpuScore === 3){
        winLoseMessage.innerHTML = 'Oh  no! You lost the best of 5.'
        userScore = 0;
        cpuScore = 0;
    }
}