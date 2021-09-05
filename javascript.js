const userScoreCounter= document.getElementById('user-score');
const cpuScoreCounter = document.getElementById('cpu-score');
const winLoseMessage = document.getElementById('win-lose-message');
let user;
let cpu;
let userScore = 0;
let cpuScore = 0;
let decision;
//function that assigns the user's choice to the user variable
function userChoice(choice) {
    user = choice;
}
//function to assign the cpu choice
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
    console.log(cpu);
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