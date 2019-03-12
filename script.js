
var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("player-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const results_p = document.querySelector(".results");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const compScissors_div = document.getElementById("comp-s");
const compPaper_div = document.getElementById("comp-p");
const compRock_div = document.getElementById("comp-r");

function getComputerChoice() {
    const choices = ['cr', 'cp', 'cs'];
    const randNumber = Math.floor(Math.random() * 3);
    return choices[randNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    results_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". Winner Winner!";
    document.getElementById(userChoice).classList.add('green-glow');
    document.getElementById(computerChoice).classList.add('red-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')}, 2000)
    setTimeout(function() {document.getElementById(computerChoice).classList.remove('red-glow')}, 2000);
}
function lose(userChoice, computerChoice){
    computerScore++;
    compScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    results_p.innerHTML = convertToWord(userChoice) + " loses to " + convertToWord(computerChoice) + ". Sorry.";
    document.getElementById(userChoice).classList.add('green-glow');
    document.getElementById(computerChoice).classList.add('red-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')}, 3000)
    setTimeout(function() {document.getElementById(computerChoice).classList.remove('red-glow')}, 3000);
}
function draw(){
    results_p.innerHTML = "Draw!";
}




function game(userChoice){
    const compChoice = getComputerChoice();
    switch(userChoice + compChoice) {
        case "rcs":
        case "pcr":
        case "scp":
            win(userChoice, compChoice);
            break;
        case "rcp":
        case "pcs":
        case "scr":
            lose(userChoice, compChoice);
            break;
        default:
            draw(userChoice, compChoice);
            break;
    }
    
}


function main() {

    rock_div.addEventListener('click', function(){
        game("r");
    });
    paper_div.addEventListener('click', function(){
        game("p");
    });
    scissors_div.addEventListener('click', function(){
        game("s");
    });

}
main();
