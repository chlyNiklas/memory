# Memory

Wir programmieren zusammen ein Memory.

## Vorbereitung

Erstelle auf dem Desktop (oder einem Ordner deiner Wahl) ein Order namens: "memory"
In diesem erstellst du folgende Dateien:

 - index.html
 - index.js
 - style.css

### index.html

Im ```index.html``` ist die Struktur unseres Spieles gespeichert. 

Wikipedia definiert HTML so:

> Die Hypertext Markup Language (HTML) ist eine textbasierte Auszeichnungssprache zur Strukturierung elektronischer Dokumente 
> wie Texte mit Hyperlinks, Bildern und anderen Inhalten. HTML-Dokumente sind die Grundlage des World Wide Web und 
> werden von Webbrowsern dargestellt.

Die Elemente die im Browser angezeigt werden sollen, werden in den sogenannten Tags definiert.
Tags welche Inhalt haben können wie z.B. Knöpfe, Überschriften oder Paragraphen, werden geöffnet (```<tag>```) und geschlossen (```</tag>```).

Beispiel:

``` html
<h1>Ich bin eine Überschrift!</h1>
<h2>Ich bin eine kleinere Überschrift!</h2>
<p>Ich bin ein Paragraph<p>
<button>Ich bin ein Knopf</button>
```

<div style="background-color: #fff; color: #000; font-family: serif; padding: 1rem; margin: 1rem 0rem; border-radius: 1rem; box-shadow: 0px 0px 20px #000a;">
    <h1>Ich bin eine Überschrift!</h1>
    <h2>Ich bin eine kleinere Überschrift!</h2>
    <p>Ich bin ein Paragraph<p>
    <button>Ich bin ein Knopf</button>
</div>

Kopiere nun folgenden Code in dein ```index.html```:

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Memory</title>
</head>
<body>
    <h1 id="player">Spieler*in 1 ist am Zug.</h1>
    <h2 id="score">0 : 0</h2>
    <div id="game"></div>
</body>
</html>
```

Wenn du dein ```index.html``` nun im browser öffnest, solltest du 

### style.css

Im ```style.css``` ist das Aussehen für das Spiel gespeichert. 

Wikipedia definiert CSS so:

> Cascading Style Sheets (für ‚gestufte Gestaltungsbögen‘; kurz: CSS) ist eine Stylesheet-Sprache für 
> elektronische Dokumente und zusammen mit HTML und JavaScript eine der Kernsprachen des World Wide Webs. Sie ist ein sogenannter living standard 
> ‚lebendiger Standard‘ und wird vom World Wide Web Consortium (W3C) beständig weiterentwickelt. Mit CSS werden Gestaltungsanweisungen erstellt, die vor 
> allem zusammen mit den Auszeichnungssprachen HTML und XML (zum Beispiel bei SVG) eingesetzt werden.

Im CSS kannst Regeln für das darstellen vom HTML machen - so genannte rules.
Diese sind folgendermassen aufgebaut:

```
[Selektor] {
    [Eigenschaft]: [Wert];
    [Eigenschaft]: [Wert];
    ...
}
```
Ein Selektor wäre z.B ```h1```. Damit würde dann die Regel auf alle grossen Überschriften zutreffen.
Ein Beispiel fü eine Eigenschaft ist die Farbe: ```color: red```

Also wenn wir alle grossen Überschriften rot haben wollen müssen wir folgende Regel schreiben:

``` css
h1 {
    color: red;
}
```

Dann sieht unser html so aus:

<div style="background-color: #fff; color: #000; font-family: serif; padding: 1rem; margin: 1rem 0rem; border-radius: 1rem; box-shadow: 0px 0px 20px #000a;">
    <h1 style="color: red;">Ich bin eine Überschrift!</h1>
    <h2>Ich bin eine kleinere Überschrift!</h2>
    <p>Ich bin ein Paragraph<p>
    <button>Ich bin ein Knopf</button>
</div>

Nun kannst du folgendes CSS in den ```style.css``` kopieren:

``` css
#game {
    /*
    Stelle die Memory-Karten in einem Raster dar.
    */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
}

#game div {
    /*
    Mache die Memory-Karten Kartenartig
    */
    min-width: 2rem;
    min-height: 10rem;
    background-color: rgb(225, 225, 225);
    border-radius: 0.5rem;
}
```

Um das CSS anzuwenden, müssen wir das im HTML verlinken. Dafür kannst du im head tag von deinem ```index.html``` folgenden Tag einfügen:

``` html
<link rel="stylesheet" href="./style.css">
```

Dein ```index.html``` sollte nun so aussehen:

``` html 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Memory</title>
</head>
<body>
    <h1 id="player">Spieler*in 1 ist am Zug.</h1>
    <h2 id="score">0 : 0</h2>
    <div id="game"></div>
</body>
</html>
```

### index.js

Im ```index.js``` ist die Logik für das Spiel gespeichert. 

Wikipedia definiert JavaScript so:

> JavaScript (kurz JS) ist eine Skriptsprache, die ursprünglich 1995 von Netscape für dynamisches HTML in Webbrowsern entwickelt 
> wurde, um Benutzerinteraktionen auszuwerten, Inhalte zu verändern, nachzuladen oder zu generieren und so die Möglichkeiten von HTML 
> zu erweitern. Heute wird JavaScript auch außerhalb von Browsern angewendet, etwa auf Servern und in Microcontrollern.

Nun kannst du folgenden Code in dein ```index.js``` einfügen:

``` JavaScript
const COLORS = ["maroon", "red", "purple", "fuchsia", "lime", "black", "yellow", "navy"]

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
    div.onclick = (ev) => {
        // Farbe anzeigen
        div.style.backgroundColor = color

        // zu den umgedrehten Karten hinzufügen
        selected.push(div)

        game()       
    }
}

// in dieser Funktion ist die Spiellogik
function game() {
    if (selected.length === 2) {
        setTimeout(() => {
            // T
        }, 500)
    }
}
```

Damit das Javascript auch ausgeführt wird, müssen wir es noch im ```index.html``` verlinken.
Füge dazu folgenden Script-Tag nach dem Body ein:

``` html
<script src="./index.js"></script>
```

Wenn du nun ```index.html``` in einem browser deiner Wahl öffnest, solltest du 16 Memory-Karten sehen,
die, wenn du sie anklickst, ihre Farbe zeigen. Falls das nicht der fall sein sollte, überprüfe ob alle Dokumente im selben Ordner
sind und ob alle imports im HTML hast (für JavaScript und CSS).    