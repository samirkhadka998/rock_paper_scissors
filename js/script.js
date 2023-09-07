let gameValues = ['Rock', 'Paper', 'Scissor'];
function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3);

    // console.log(gameValues[randomNumber].toLowerCase())

    return gameValues[randomNumber].toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "It's a Draw";
    }
    else if (playerSelection === "rock") {
        if (computerSelection == "paper") {
            return "You Lose! Paper beats Rock";
        }
        else {
            return "You Won! Rock beats Scissor";
        }
    }

    else if (playerSelection === "paper") {
        if (computerSelection == "rock") {
            return "You Won! Paper beats Rock";
        }
        else {
            return "You Lose! Scissor beats Paper";
        }
    }

    else if (playerSelection == "scissor") {
        if (computerSelection == "rock") {
            return "You Lose! Rock beats Scissor";
        }
        else {
            return "You Won ! Scissor beats Paper";
        }
    }
}

const buttons = document.querySelectorAll('button');
const resultDiv = document.querySelector('.result');
let playerScore = 0;
let computerScore = 0;
buttons.forEach(button => {
    let computerSelection = getComputerChoice();
    
    button.addEventListener('click', ()=>{
       let message = playRound(button.dataset.value, getComputerChoice());
    //    let para = document.createElement('p');
    //    let playerPara = document.createElement('p');
    //    playerPara.textContent = `Player Score : ${playerScore}`
    //    let computerPara = document.createElement('p');
    //    computerPara.textContent = `Computer Score : ${computerScore}`
    //    para.textContent = message;
    //    resultDiv.appendChild(para);
    //    resultDiv.appendChild(playerPara);
    //    resultDiv.appendChild(computerPara);
    if (message.includes("Won")) {
                playerScore++;
            }
            else if (message.includes("Lose")) {
                    computerScore++;
                }
                resultDiv.textContent = `${message}  player score: ${playerScore}  computer score : ${computerScore}` ;
    if(playerScore == 5){
        resultDiv.textContent = "Player won!";
        playerScore = computerScore = 0;
    }
    else if(computerScore == 5){
        resultDiv.textContent = "Computer won!"
        playerScore = computerScore = 0;

    }
    })
})

// let playerScore = 0;
// let computerScore = 0;
// let wrongInput = false;
// for (let i = 0; i < 5; i++) {
    
    //     let computerSelection = getComputerChoice()
    //     let playerSelection = prompt("Enter Rock , Paper , or Scissor");
    //     if (!gameValues.toLowerCase().includes(playerSelection.toLowerCase())) {
        //         console.log("Wrong input.Play again.");
        //         wrongInput = true;
        //         break;
        //     }
        //     let message = playRound(playerSelection, computerSelection);
        //     console.log(message);
        //     if (message.includes("Won")) {
            //         playerScore++;
            //     }
            //     else if (message.includes("Lose")) {
                //         computerScore++;
                //     }
// }

// if (!wrongInput) {
//     if (playerScore > computerScore) {
    //         console.log("You won.");
    //     }
    //     else if (playerScore < computerScore) {
        //         console.log("Computer won.");
        //     }
        //     else {
            //         console.log("It's a tie");
            //     }
            // }
            