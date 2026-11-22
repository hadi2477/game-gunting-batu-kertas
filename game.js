export function computerChoice() {

    const pilihan = [
        "batu",
        "kertas",
        "gunting"
    ];

    const acak = Math.floor(
        Math.random() * pilihan.length
    );

    return pilihan[acak];
}
export function determineWinner(player, computer) {
    if (player === computer) {
        return "seri";
    }

    const menang = {
        batu: "gunting",
        gunting: "kertas",
        kertas: "batu"
    };

    if (menang[player] === computer) {
        return "menang";
    }

    return "kalah";
}
