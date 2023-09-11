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
        return "It's a Draw !";
    }
    else if (playerSelection === "rock") {
        if (computerSelection == "paper") {
            return "You Lose! Paper beats Rock.";
        }
        else {
            return "You Won! Rock beats Scissor.";
        }
    }

    else if (playerSelection === "paper") {
        if (computerSelection == "rock") {
            return "You Won! Paper beats Rock.";
        }
        else {
            return "You Lose! Scissor beats Paper.";
        }
    }

    else if (playerSelection == "scissor") {
        if (computerSelection == "rock") {
            return "You Lose! Rock beats Scissor.";
        }
        else {
            return "You Won ! Scissor beats Paper.";
        }
    }
}

function setScore(playerScore, computerScore, message = ''){
const h1humanScore = document.querySelector('.humanScore');
const h1computerScore = document.querySelector('.computerScore');
const result = document.querySelector('.message');
h1humanScore.textContent = playerScore;
h1computerScore.textContent = computerScore;
result.textContent = message
if(message){
    result.style.padding = 10;
}
else{
    result.style.padding = 0;
}
}

function setDivFlex(left,right){
    var leftDiv = document.querySelector('.left');
    var rightDiv = document.querySelector('.right');
    if(!leftDiv && !rightDiv) return;

    leftDiv.style.flexGrow = left;
    rightDiv.style.flexGrow = right;
    setTimeout(() => {
        leftDiv.style.flexGrow = 1;
    rightDiv.style.flexGrow = 1;
    }, 3000);


    
}

function playSound(audio, clickedImage = ''){
    audio = '#' +audio + "Sound";
    let audioSound = document.querySelector(audio);
    const img = document.querySelector(`img[data-value="${clickedImage}"]`);

    if (audioSound) {
        audio.currentTime = 0;
        audioSound.play();
        if(!img) return;
        img.classList.add('playing');
        setTimeout(() => {
            img.classList.remove('playing');
        }, 50);

    }
}
let playerScore = 0;
let computerScore = 0;
const images = document.querySelectorAll('.image');
const resultDiv = document.querySelector('.result');
setScore(playerScore,computerScore)


images.forEach(image => {
    image.addEventListener('click', ()=>{
        playSound('tink', image.dataset.value);
        let computerChoice = getComputerChoice();
        const computerImage = document.querySelector(`#${computerChoice}`);
        if(computerImage){
            computerImage.classList.add('playing');
            computerImage.classList.add('hoverEffect');
            
            setTimeout(() => {
                computerImage.classList.remove('playing');
                computerImage.classList.remove('hoverEffect');
            }, 50);
        }


       let message = playRound(image.dataset.value, computerChoice);

    if (message.includes("Won")) {
                playerScore++;
            }
            else if (message.includes("Lose")) {
                    computerScore++;
                }
                setScore(playerScore,computerScore, message)

    if(playerScore == 5){
        message = "Player won!";
        playerScore = computerScore = 0;
        setScore(playerScore,computerScore,message)
        playSound('human')
        setDivFlex(3,1);
        

    }
    else if(computerScore == 5){
        message = "Computer won!"
        playerScore = computerScore = 0;
        setScore(playerScore,computerScore,message)
        playSound('robot')
        setDivFlex(1,3);


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
            