const button = document.querySelector('#btn');
let numChoice = 0;
let humanScore = 0;
let computerScore = 0;
const human = document.getElementById("humanScore");
const computer = document.getElementById("compScore");
const humanHeader = document.querySelector(".humanHeader");
const compHeader = document.querySelector(".compHeader");


function getComputerChoice(num){
    numChoice = Math.floor(Math.random() * num);
    if(numChoice === 0){
        return "rock";
    }
    else if(numChoice === 1){
        return "paper";
    }
    else if(numChoice === 2){
        return "scissor";
    }
}

function getHumanChoice(){
    let answer = prompt("Rock paper scissor says..", "choice");
    return answer;
}

function playRound(humanChoice, computerChoice){
    if (humanChoice.toLowerCase() === "rock"){
        if (computerChoice === "rock"){

        }
        else if (computerChoice === "paper"){
            computerScore++;
            computer.innerHTML = computerScore.toString();
            if (humanScore === 5){
                humanHeader.style.color = "green";
                compHeader.style.color = "red";
                button.disabled = true;
            }
            if(computerScore === 5){
                compHeader.style.color = "green";
                humanHeader.style.color = "red";
                button.disabled = true;

            }

        }
        else if (computerChoice === "scissor"){
            humanScore++;
            human.innerHTML = humanScore.toString();
            if (humanScore === 5){
                humanHeader.style.color = "green";
                compHeader.style.color = "red";
                button.disabled = true;
            }
            if(computerScore === 5){
                compHeader.style.color = "green";
                humanHeader.style.color = "red";
                button.disabled = true;
            }
        }
    }
    else if (humanChoice.toLowerCase() === "paper"){
        if (computerChoice === "paper"){

        }
        else if (computerChoice === "scissor"){
            computerScore++;
            computer.innerHTML = computerScore.toString();
            if (humanScore === 5){
                human.style.color = "green";
                computer.style.color = "red";
                button.disabled = true;
            }
            if(computerScore === 5){
                computer.style.color = "green";
                human.style.color = "red";
                button.disabled = true;
            }
        }
        else if (computerChoice === "rock"){
            humanScore++;
            human.innerHTML = humanScore.toString();
            if (humanScore === 5){
                human.style.color = "green";
                computer.style.color = "red";
                button.disabled = true;
            }
            if(computerScore === 5){
                computer.style.color = "green";
                human.style.color = "red";
                button.disabled = true;
            }
        }
    }
    else if (humanChoice.toLowerCase() === "scissor"){
        if (computerChoice === "scissor"){

        }
        else if (computerChoice === "rock"){
            computerScore++;
            computer.innerHTML = computerScore.toString();
            if (humanScore === 5){
                human.style.color = "green";
                computer.style.color = "red";
            }
            if(computerScore === 5){
                computer.style.color = "green";
                human.style.color = "red";
            }
        }
        else if (computerChoice === "paper"){
            humanScore++;
            human.innerHTML = humanScore.toString();
            if (humanScore === 5){
                human.style.color = "green";
                computer.style.color = "red";
            }
            if(computerScore === 5){
                computer.style.color = "green";
                human.style.color = "red";
            }
        }
    }
}

button.addEventListener("click", function(e){
    let humanAnswer = getHumanChoice();
    let compAnswer = getComputerChoice(3);
    playRound(humanAnswer, compAnswer);
});