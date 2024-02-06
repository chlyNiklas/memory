// in dieser Variable werden die umgedrehten Karten gespeichert
let selected = []

let playerPointer = 0
let playersPoints = []

function restart() {
    // remove children
    document.getElementById("game").innerHTML = ""

    const nums = new Set();
    while (nums.size !== 12) {
        nums.add(Math.floor(Math.random() * 800) + 100);
    }
    let imageIds = []
    nums.forEach((num) => {
        imageIds.push(num, num)
    })
    // Farben mischen
    imageIds.sort((a, b) => 0.5 - Math.random())

    selected = []

    playerPointer = 0
    playersPoints = []

    for (let i = 0; i < parseInt(document.getElementById("players").value); i++) {
        playersPoints.push(0);
    }

    for (let i = 0; i < imageIds.length; i++) {
        const imageId = imageIds[i];
        // neues div (leeres Element) erstellen
        const div = document.createElement("div")
        // div ins html laden
        document.getElementById("game").appendChild(div)

        // definieren was auf Knopfdruck passiert
        div.onclick = (event) => {
            if (selected.length < 2) {
                div.style.backgroundColor = `#${imageId}0`
                selected.push(div);
                div.innerHTML = `<img src="https://picsum.photos/seed/${imageId}/200/200">`

                game()
            }
        }
    }

    updateScreen()
    document.getElementById("start").innerText = "Restart";
}


// in dieser Funktion ist die Spiellogik
function game() {
    // schauen ob 2 Karten umgedreht sind
    if (selected.length === 2) {
        // eine halbe Sekunde warten

        setTimeout(() => {
            if (selected[0].style.backgroundColor === selected[1].style.backgroundColor) {
                selected.forEach((div) => {
                    // hintergrund Farbe der Karte auf transparent
                    div.style.backgroundColor = "transparent"
                    div.innerHTML = ""
                    // onclick entfernen
                    div.onclick = null;
                })
                playersPoints[playerPointer] += 1;
            } else {
                // Karten verdecken
                selected.forEach((div) => {
                    div.style = ""
                    div.innerHTML = ""
                })

                nextPlayer()
            }
            // Variable leeren
            selected = []
            updateScreen()
        }, 900)
    }
}

// Elemente updaten
function updateScreen() {
    let points = "";

    playersPoints.forEach((p) => points += p + ":");
    points = points.substring(0, points.length - 1)

    document.getElementById("player").innerText = "Spieler*in " + (playerPointer + 1) + " ist am Zug."
    document.getElementById("score").innerText = points
}

function nextPlayer() {
    console.log(playersPoints.length)
    playerPointer += 1;
    if (playersPoints.length <= playerPointer) {
        playerPointer = 0;
    }
}