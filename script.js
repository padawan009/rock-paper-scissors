
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
    let choice = ["Камень", "Ножницы", "Бумага"]
    const playerChoice = prompt("Введите значение:")
    const playerSelection = playerChoice[0].toUpperCase() + playerChoice.toLowerCase().slice(1)
    const computerSelection = getComputerChoice()

    function getComputerChoice() {
        return choice[Math.floor(Math.random() * 3)];
    }
    
    playRound(playerSelection, computerSelection);

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection)
            alert(`Ничья!
        Выбор компьютера: ${computerSelection}
        Выбор пользователя: ${playerSelection}`)

        else if (playerSelection !== "Камень" && playerSelection !== "Ножницы" && playerSelection !== "Бумага")
            alert("Неправильное значение")

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
}