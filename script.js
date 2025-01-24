/* Реализация с помощью propmt */


// let counter = 0
// let playerCounter = 0;
// let computerCounter = 0;

// while (counter < 5) {
//     game();
//     counter++;
// }

// if (playerCounter === computerCounter)
//     alert("Ничья!")
// else if (playerCounter > computerCounter)
//     alert(`Победил пользователь! Со счетом ${playerCounter} - ${computerCounter}`)
// else
//     alert(`Победил компьютер! Со счетом ${playerCounter} - ${computerCounter}`)


// function game() {
//     let playerSelection = prompt("Введите значение (Камень, Ножницы или Бумага):");
//     playerSelection = playerSelection[0].toUpperCase() + playerSelection.toLowerCase().slice(1);

//     if (!["Камень", "Ножницы", "Бумага"].includes(playerSelection)) {
//         alert("Неправильное значение. Попробуйте снова.");
//         return;
//     }

//     const computerSelection = getComputerChoice();
//     playRound(playerSelection, computerSelection);
// }

// function getComputerChoice() {
//     const choice = ["Камень", "Ножницы", "Бумага"];
//     return choice[Math.floor(Math.random() * 3)];
// }

// function playRound(playerSelection, computerSelection) {
//     if (playerSelection === computerSelection)
//         alert(`Ничья!
//     Выбор компьютера: ${computerSelection}
//     Выбор пользователя: ${playerSelection}`)

//     else if ((playerSelection === "Камень" && computerSelection === "Ножницы") ||
//     (playerSelection === "Ножницы" && computerSelection === "Бумага") ||
//     (playerSelection === "Бумага" && computerSelection === "Камень")) {
//         playerCounter++;
//         alert (`Победил пользователь! Счет ${playerCounter} - ${computerCounter} 
//         Выбор компьютера: ${computerSelection} 
//         Выбор пользователя: ${playerSelection}`)
//     }
    
//     else {
//         computerCounter++;
//         alert(`Победил компьютер! Счет ${playerCounter} - ${computerCounter} 
//         Выбор компьютера: ${computerSelection}
//         Выбор пользователя: ${playerSelection}`)
//     }
// }



/* Реалиазция с визуалом */


let res = document.querySelector(".result")
let scoreUser = document.querySelector(".user-score");
let scoreComput = document.querySelector(".computer-score");
let choiceUser = document.querySelector(".user-choice");
let choiceComput = document.querySelector(".computer-choice");
const btns = document.querySelectorAll(".game-button");
const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
let resetButton = document.querySelector(".restart-button");
let player;
let computer;
let round = 0;


btns.forEach(button => button.addEventListener("click", () => {
    player = button.id.toUpperCase()
    getComputerChoice();
    game()
    console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
}))

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3) + 1;

    switch (randomNum) {
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}

let playerScore = 0;
let computerScore = 0;

function update() {
    choiceUser.textContent = `Ваш выбор: ${player}`;
    scoreUser.textContent = `${playerScore}`;
    round++;
    console.log(round);
    choiceComput.textContent = `Выбор компьютера: ${computer}`;
    scoreComput.textContent = `${computerScore}`;
    if (round == 5 && playerScore > computerScore) {
        res.textContent = "Игра окончена! Вы выиграли!";
        gameover()
    } 
    else if (round == 5 && computerScore > playerScore) {
        res.textContent = "Игра окончена! Вы проиграли!"
        gameover()
    }
    else if (round == 5 && playerScore == computerScore) {
        res.textContent = "Игра окончена! Ничья!"
        gameover()
    }

};


function game() {
    if (player == computer) {
        res.textContent = "Ничья!";
    }

    else if ((player == "ROCK" && computer == "SCISSORS") || 
        (player == "PAPER" && computer == "ROCK") ||
        (player == "SCISSORS" && computer == "PAPER")) 
    {
        res.textContent = "Вы выиграли!";
        playerScore++;
    } 
    
    else {
        res.textContent = "Вы проиграли!";
        computerScore++;
    }
    update();
}

function gameover() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    resetButton.addEventListener("click", refreshPage)
}

function refreshPage() {
    window.location.reload(true);
}
