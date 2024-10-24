const hands = ["🪨","📃","✂️"];

let playerScore = 0;
let cpuScore = 0;
let roundsCounter = 0;
const maxPoints = 3;

const playerScoreDisplay = document.getElementById("playerScore");
const cpuScoreDisplay = document.getElementById("cpuScore");
const roundCount = document.getElementById("round-count");
const roundResult = document.getElementById("round-result");

const gameOverDisplay = document.getElementById("game-over");
const finalResult = document.getElementById("final-result");

const buttonContainer = document.getElementById("button-container");
const rockBtn = document.getElementsByClassName('rockBtn')[0];
const paperBtn = document.getElementsByClassName('paperBtn')[0];
const scissorBtn = document.getElementsByClassName('scissorsBtn')[0];
const playerOptions = [rockBtn, paperBtn, scissorBtn];

const cpuTry = () => Math.floor(Math.random() * hands.length);

    //Updates the player counter, and the cpu counter in the html file
function updateCounters(currentPlayerScore=0, currentCpuScore=0,){
    playerScoreDisplay.innerHTML = `${currentPlayerScore}`;
    cpuScoreDisplay.innerHTML = `${currentCpuScore}`;
}

function initializeButtons(){
    playerOptions.forEach(buttonOption => {
        buttonOption.addEventListener('click', function(){
            roundCount.innerText = `${++roundsCounter}`;

            const cpuChoice = cpuTry();
            checkResults(hands.indexOf(this.innerText), cpuChoice);

            if(playerScore >= maxPoints || cpuScore >= maxPoints){
                gameOver();
            }
        })
    })
}

function checkResults(playerChoice=0, cpuChoice=0){
    //After checking a tie, determines the state of the round
    if(playerChoice == cpuChoice){
        roundResult.innerHTML  = `🤖 ${hands[cpuChoice]}  VS  🙂 ${hands[playerChoice]} empatan!!`;
    }else{
        if(playerChoice == 0){
            if(cpuChoice == 1){
                roundResult.innerHTML  = `🤖 ${hands[cpuChoice]}  gana a 🙂 ${hands[playerChoice]}`;
                updateCounters(playerScore,++cpuScore);
            }else {
                roundResult.innerHTML  = `🤖 ${hands[cpuChoice]}  pierde frente a  🙂 ${hands[playerChoice]}`;
                updateCounters(++playerScore, cpuScore);
            }
        }else if(playerChoice == 1){
            if(cpuChoice == 0){
                roundResult.innerHTML  = `🤖 ${hands[cpuChoice]}  pierde frente a  🙂 ${hands[playerChoice]}`;
                updateCounters(++playerScore, cpuScore);
            }else{
                roundResult.innerHTML  = `🤖 ${hands[cpuChoice]}  gana a  🙂 ${hands[playerChoice]}`;
                updateCounters(playerScore, ++cpuScore);
            }
        }else if(playerChoice == 2){
            if(cpuChoice == 0){
                roundResult.innerHTML  = `🤖 ${hands[cpuChoice]}  gana a  🙂 ${hands[playerChoice]}`;
                updateCounters(playerScore, ++cpuScore);
            }else{
                roundResult.innerHTML  = `🤖 ${hands[cpuChoice]}  pierde frente a  🙂 ${hands[playerChoice]}`;
                updateCounters(++playerScore, cpuScore);
            }
        }
    }
}

//Replaces the buttons and prevents the user of keep playing
function gameOver(){
    buttonContainer.style.display = `none`;

    gameOverDisplay.style.display = 'block';
    
    if(playerScore > cpuScore){
        finalResult.innerHTML = "Ha ganado el jugador!! 😀";
    }else{
        finalResult.innerHTML = "Ha ganado la maquina!! 🤖";
    }
}

//The buttons get initialized at first!
initializeButtons();