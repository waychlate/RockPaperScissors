
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

function getHumanChoice () {
    let choice = prompt("Rock, Paper, or Scissors?")

    return choice
}

function playRound (humanChoice, computerChoice) {
    let humRestofChoice = (humanChoice.toLowerCase()).slice(1, humanChoice.length);
    let humFirstchar = humanChoice[0].toUpperCase();
    let humFinalChoice = `${humFirstchar}${humRestofChoice}`;

    console.log(humFinalChoice)

    let loserText = `Damn, you lost! ${computerChoice} beats ${humFinalChoice}`
    let winnerText = `Nice, you won! ${computerChoice} beats ${humFinalChoice}`
    let tieText = `Wow, you both tied with ${humFinalChoice}`
    
    if (humFinalChoice == computerChoice) {
        console.log(tieText)
        return null
    } else if ((humFinalChoice == 'Rock') && (computerChoice == 'Paper')) {
        console.log(loserText)
        return false
        
    } else if ((humFinalChoice == 'Rock') && (computerChoice == 'Scissors')) {
        console.log(winnerText)
        return true

    } else if ((humFinalChoice == 'Paper') && (computerChoice == 'Scissors')) {
        console.log(loserText)
        return false

    } else if ((humFinalChoice == 'Paper') && (computerChoice == 'Rock')) {
        console.log(winnerText)
        return true

    } else if ((humFinalChoice == 'Scissors') && (computerChoice == 'Paper')) {
        console.log(winnerText)
        return true

    } else if ((humFinalChoice == 'Scissors') && (computerChoice == 'Rock')) {
        console.log(loserText)
        return false
    }
}



function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let currentResult = playRound(getHumanChoice(), getComputerChoice())

        if (currentResult === true) {
            humanScore += 1;
        } else if (currentResult === false) {
            computerScore += 1;
        } else {

        }
    }

    if (humanScore > computerScore) {
        console.log(`Wow you won! ${humanScore} : ${computerScore}`)
    } else if (humanScore < computerScore) {
        console.log(`Damn... ${humanScore} : ${computerScore}`)
    }

}

playGame()