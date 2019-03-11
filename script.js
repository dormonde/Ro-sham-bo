
var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("player-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randNumber = Math.floor(Math.random() * 3);
    return choices[randNumber];
}


function win(user, compuer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    
}
function lose(){
    computerScore++;
    compScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
}
function draw(){
    
}




function game(userChoice){
    const compChoice = getComputerChoice();
    switch(userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
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
