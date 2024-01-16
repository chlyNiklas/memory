const COLORS = ["maroon", "red", "purple", "fuchsia", "lime", "black", "yellow", "navy"]

// boolean erklären
let isPlayerOne = true;
let pointsPlayerOne = 0;
let pointsPlayerTwo = 0;

// in dieser Variable werden die umgedrehten Karten gespeichert
let selected = []

// alle Farben noch einmal hinzufügen
COLORS.push(...COLORS)
// Farben mischen
COLORS.sort((a, b) => 0.5 - Math.random())

for (let i = 0; i < COLORS.length; i++) {
    const color = COLORS[i];

    // neues div (leeres Element) erstellen
    const div = document.createElement("div")

    // div ins html laden
    document.getElementById("game").appendChild(div)

    // definieren was auf Knopfdruck passiert
    div.onclick = (event) => {
        // Code nur ausführen, wenn noch nicht 2 Karten umgedreht sind
        if (selected.length < 2) {
            // Farbe anzeigen
            div.style.backgroundColor = color

            // zu den umgedrehten Karten hinzufügen
            selected.push(div)

            game()
        }
    }
}

// in dieser Funktion ist die Spiellogik
function game() {
    if (selected.length === 2) {
        setTimeout(() => {
            // überprüfen, ob es zwei gleiche Karten sind
            if (selected[0].style.backgroundColor === selected[1].style.backgroundColor) {
                // Karten deaktivieren
                selected.forEach((div) => {
                    div.style.backgroundColor = "#fff"
                    div.onclick = null;
                })
                // Punkte hinzufügen
                if (isPlayerOne) {
                    pointsPlayerOne++
                } else {
                    pointsPlayerTwo++
                }
            } else {
                // Karten verdecken
                selected.forEach((div) => {
                    div.style = ""
                })

                // Player wechseln
                isPlayerOne = !isPlayerOne
            }
            updateScreen()

            // Variable leeren
            selected = []
        }, 500)
    }
}
function updateScreen() {
    document.getElementById("player").innerText = `Spieler*in ${isPlayerOne ? "1" : "2"} ist am Zug.`
    document.getElementById("score").innerText = `${pointsPlayerOne} : ${pointsPlayerTwo}`
}