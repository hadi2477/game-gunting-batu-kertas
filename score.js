let playerScore = 0;
let computerScore = 0;

export function tambahSkor(hasil) {
    if (hasil === "menang") {
        playerScore++;
    } else if (hasil === "kalah") {
        computerScore++;
    }

    tampilkanSkor();
}

function tampilkanSkor() {
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
}

export function resetSkor() {
    playerScore = 0;
    computerScore = 0;
    tampilkanSkor();
}
