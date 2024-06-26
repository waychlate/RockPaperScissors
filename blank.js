
function getComputerChoice () {
    let choice = Math.floor(Math.random() * 3) + 1

    if (choice == 1) {
        return "Rock"
    } else if (choice == 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function playRound (humanChoice, computerChoice) {
    let humFinalChoice = humanChoice;

    let loserText = `Damn, you lost! ${computerChoice} beats ${humFinalChoice}`
    let winnerText = `Nice, you won! ${humFinalChoice} beats ${computerChoice}`
    let tieText = `Wow, you both tied with ${humFinalChoice}`
    
    if (humFinalChoice == computerChoice) {
        console.log(tieText)
        return tieText;
    } else if ((humFinalChoice == 'Rock') && (computerChoice == 'Paper')) {
        console.log(loserText)
        computerScore += 1;
        return loserText;
        
    } else if ((humFinalChoice == 'Rock') && (computerChoice == 'Scissors')) {
        console.log(winnerText)
        humanScore += 1;
        return winnerText;

    } else if ((humFinalChoice == 'Paper') && (computerChoice == 'Scissors')) {
        console.log(loserText)
        computerScore += 1;
        return loserText;

    } else if ((humFinalChoice == 'Paper') && (computerChoice == 'Rock')) {
        console.log(winnerText)
        humanScore += 1;
        return winnerText

    } else if ((humFinalChoice == 'Scissors') && (computerChoice == 'Paper')) {
        console.log(winnerText)
        humanScore += 1;
        return winnerText;

    } else if ((humFinalChoice == 'Scissors') && (computerChoice == 'Rock')) {
        console.log(loserText)
        computerScore += 1;
        return loserText;
    }
}

const buttonContainer = document.querySelector("div.button-container")

buttonContainer.addEventListener("mouseover", (event) => {
    let button = event.target;

    if (button.nodeName == 'BUTTON') {
        button.classList.toggle("hover");
    }
});

buttonContainer.addEventListener("mouseout", (event) => {
    let button = event.target;

    if (button.nodeName == 'BUTTON') {
        button.classList.toggle("hover");
        if (button.classList.contains("pressed")) {
            button.classList.remove("pressed");
        }
    }
});

buttonContainer.addEventListener("mousedown", (event) => {
    let button = event.target;
    if (button.nodeName == 'BUTTON') {
        button.classList.add("pressed");
    }
});

buttonContainer.addEventListener("mouseup", (event) => {
    let button = event.target
    if (button.nodeName == 'BUTTON') {
        button.classList.remove("pressed");
    }
});

let humanScore = 0;
let computerScore = 0;
let scoreText = document.querySelector(".score-text");
let resultText = document.querySelector(".result")

buttonContainer.addEventListener("click", (event) => {
    let button = event.target;
    let result;
    if (button.nodeName != 'BUTTON') return false;
    switch (button.className) {
        case 'Rock hover':
            result = playRound('Rock', getComputerChoice())
            break
        case 'Paper hover':
            result = playRound('Paper', getComputerChoice())
            break
        case 'Scissors hover':
            result = playRound('Scissors', getComputerChoice())
            break
    }

    scoreText.textContent = `Player ${humanScore} : ${computerScore} AI`
    resultText.textContent = result;
});