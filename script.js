function getComputerChoice()
{
    const choice = Math.floor(Math.random() * 3);
    
    switch(choice)
    {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            console.warn("There is some issue with the random generator.");
    }
}

function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    let playerSelectionNumber;
    let computerSelectionNumber;

    switch(playerSelection)
    {
        case "rock":
            playerSelectionNumber = 0;
            break;
        case "paper":
            playerSelectionNumber = 1;
            break;
        case "scissors":
            playerSelectionNumber = 2;
            break;
         
        default:
            console.error("Invalid input");
            return;
    }

    switch(computerSelection)
    {
        case "rock":
            computerSelectionNumber = 1;
            break;
        case "paper":
            computerSelectionNumber = 2;
            break;
        case "scissors":
            computerSelectionNumber = 0;
            break;
         
        default:
            console.error("Invalid input for computer");
            return;
    }

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

    if(playerSelectionNumber === computerSelectionNumber)
    {
        return("You Won! " + playerSelection + " beats "  + computerSelection + "!");
    }

    computerSelectionNumber -= 1;
    if(computerSelectionNumber < 0) computerSelectionNumber = 2;
    
    if(playerSelectionNumber === computerSelectionNumber)
    {
        return("Nobody Won! " + playerSelection + " is same as "  + computerSelection + "!");
    }

    computerSelectionNumber += 1;
    if(computerSelectionNumber > 2) computerSelectionNumber = 0;
    playerSelectionNumber -= 1;
    if(playerSelectionNumber < 0) playerSelectionNumber = 2;

    if(playerSelectionNumber === computerSelectionNumber)
    {
        return("You Lost! " + computerSelection + " beats "  + playerSelection + "!");
    }
}


const buttonContainer = document.querySelector("#button-container");
const resultDiv = document.querySelector("#result");
const scoreDiv = document.querySelector("#score");
const winnerDiv = document.querySelector("#winner");


let playerScore = 0;
let computerScore = 0;

function updateScore()
{
    resultDiv.textContent = `Your Score: ${playerScore}  |  Computer Score: ${computerScore}`;
}


function onClick(e)
{
    const outputMessage = playRound(e.target.id, getComputerChoice());
    scoreDiv.textContent = outputMessage;
    if(outputMessage.startsWith("You Won"))
    {
        playerScore++;
        if(playerScore == 5)
        {
            winnerDiv.textContent = "YOU ARE THE FINAL WINNER!";
            buttonContainer.removeEventListener("click", onClick);
        }
    }
    else if(outputMessage.startsWith("You Lost"))
    {
        computerScore++;
        if(computerScore == 5)
        {
            winnerDiv.textContent = "THE COMPUTER IS THE FINAL WINNER!";
            buttonContainer.removeEventListener("click", onClick);
        }
    }
    updateScore();
}

buttonContainer.addEventListener("click", onClick);


