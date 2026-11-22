import { computerChoice, determineWinner } from "./game.js";
 import { tambahSkor, resetSkor } from "./score.js";
import { tampilkanPilihan, tampilkanHasil } from "./ui.js";

const tombolBatu = document.getElementById("batu");
const tombolKertas = document.getElementById("kertas");
const tombolGunting = document.getElementById("gunting");

tombolBatu.addEventListener("click", () => mainGame("batu"));
tombolKertas.addEventListener("click", () => mainGame("kertas"));
tombolGunting.addEventListener("click", () => mainGame("gunting"));

function mainGame(playerChoice) {
    const compChoice = computerChoice();
    const hasil = determineWinner(playerChoice, compChoice);

    tampilkanPilihan(playerChoice, compChoice);
    tampilkanHasil(hasil);
    tambahSkor(hasil);
}
 
