
let counter = 0
let playerCounter = 0;
let computerCounter = 0;

while (counter < 5) {
    game();
    counter++;
}

if (playerCounter === computerCounter)
    alert("Ничья!")
else if (playerCounter > computerCounter)
    alert(`Победил пользователь! Со счетом ${playerCounter} - ${computerCounter}`)
else
    alert(`Победил компьютер! Со счетом ${playerCounter} - ${computerCounter}`)


function game() {
    let playerSelection = prompt("Введите значение (Камень, Ножницы или Бумага):");
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.toLowerCase().slice(1);

    if (!["Камень", "Ножницы", "Бумага"].includes(playerSelection)) {
        alert("Неправильное значение. Попробуйте снова.");
        return;
    }

    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}

function getComputerChoice() {
    const choice = ["Камень", "Ножницы", "Бумага"];
    return choice[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection)
        alert(`Ничья!
    Выбор компьютера: ${computerSelection}
    Выбор пользователя: ${playerSelection}`)

    else if ((playerSelection === "Камень" && computerSelection === "Ножницы") ||
    (playerSelection === "Ножницы" && computerSelection === "Бумага") ||
    (playerSelection === "Бумага" && computerSelection === "Камень")) {
        playerCounter++;
        alert (`Победил пользователь! Счет ${playerCounter} - ${computerCounter} 
        Выбор компьютера: ${computerSelection} 
        Выбор пользователя: ${playerSelection}`)
    }
    
    else {
        computerCounter++;
        alert(`Победил компьютер! Счет ${playerCounter} - ${computerCounter} 
        Выбор компьютера: ${computerSelection}
        Выбор пользователя: ${playerSelection}`)
    }
}
