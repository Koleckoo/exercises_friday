const scoreHuman = document.querySelector(".score-human");
const scoreBot = document.querySelector(".score-bot");
const buttonRock = document.querySelector(".rock");
const buttonPaper = document.querySelector(".paper");
const buttonScissors = document.querySelector(".scissors");
const choiceHuman = document.querySelector(".choice-human");
const choiceBot = document.querySelector(".choice-bot");
const resultEl = document.querySelector(".result-current");

let humanScore = 0;
let botScore = 0;
let result = "";
// computer random plays
const getComputerPlay = () => {
    const options = ["rock", "paper", "scissors"];
    let randomOption = Math.floor(Math.random() * options.length);
    return options[randomOption];
}

// player plays

const play = (humanPlay) => {
    const computerPlay = getComputerPlay();

    if (humanPlay === "rock") {
        if (computerPlay === "paper") {
            botScore += 1;
            result = "Lost";
        } else if (computerPlay === "scissors") {
            humanScore += 1;
            result = "Win";
        } else {
            result = "Tie";
        }
    } else if (humanPlay === "scissors") {
        if (computerPlay === "rock") {
            botScore += 1;
            result = "Lost";
        } else if (computerPlay === "paper") {
            humanScore += 1;
            result = "Win";
        } else {
            result = "Tie";
        }
    } else if (humanPlay === "paper") { 
        if (computerPlay === "scissors") {
            botScore += 1;
            result = "Lost";
        } else if (computerPlay === "rock") {
            humanScore += 1;
            result = "Win";
        } else {
            result = "Tie";
        }
    } else {
        return false;
    }
    resultEl.textContent = result;
    choiceBot.textContent = computerPlay;
    choiceHuman.textContent = humanPlay;
    scoreBot.textContent = botScore;
    scoreHuman.textContent = humanScore;
}

buttonRock.addEventListener(("click"), () => {
    play("rock");
})

buttonPaper.addEventListener(("click"), () => {
    play("paper");
})

buttonScissors.addEventListener(("click"), () => {
    play("scissors");
})
