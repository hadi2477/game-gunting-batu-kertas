export function tampilkanPilihan(playerChoice, computerChoice) {
    document.getElementById("player-choice").textContent = emoji(playerChoice);
    document.getElementById("computer-choice").textContent = emoji(computerChoice);
}

export function tampilkanHasil(hasil) {
    const result = document.getElementById("result");

    if (hasil === "seri") {
        result.textContent = "Seri!";
    } else if (hasil === "menang") {
        result.textContent = "Kamu Menang!";
    } else {
        result.textContent = "Kamu Kalah!";
    }
}

function emoji(pilihan) {
    if (pilihan === "batu") return "✊";
    if (pilihan === "kertas") return "✋";
    return "✌️";
}
