# JavaScript

**Inhalt**
- [Kommentare](#kommentare)
- [HTML Inhalte mit JavaScript ändern](#html-inhalte-mit-javascript-ändern)
- [Output Optionen](#output-optionen)
- [Variablen](#variablen)
  - [Was sind Variablen?](#was-sind-variablen?)
  - [Deklaration](#deklaration)
  - [Initialisierung](#initialisierung)
  - [Deklaration & Initialisierung](#deklaration--initialisierung)
- [Datentypen](#datentypen)
  - [Number](#number)
  - [String](#string)
  - [Boolean](#boolean)
- [Arrays](#arrays)
  - [Verwendung eines Arrays](#verwendung-eines-arrays)
- [Operatoren](#operatoren)
  - [Zuweisungsoperator](#zuweisungsoperator)
  - [Vergleichsoperatoren](#vergleichsoperatoren)
  - [Addition](#addition)
  - [Subtraktion](#subtraktion)
  - [Multiplikation](#multiplikation)
  - [Division](#division)
  - [Negation](#negation)
  - [Und](#und)
  - [Oder](#oder)
  - [Inkrement](#inkrement)
  - [Dekrement](#dekrement)
- [Verzweigungen](#verzweigungen)
- [Loops](#loops)
- [Funktionen](#funktionen)


## Kommentare

## HTML Inhalte mit JavaScript ändern
Mit der Methode getElementById() kann ein HTML-Element via seiner Id selektiert werden und dessen Inhalt verändert werden. 
```js
document.getElementById("demo").innerText = "Hello JavaScript";
```

## Output Optionen
1. Ins HTML schreiben mit innerText.
2. Ins HTML schreiben mit document.write().
3. In eine Alertbox schrieben mit window.alert().
4. In die Konsole des Browsers schreiben mit console.log().

## Variablen 
### Was sind Variablen?
Eine Variable ist ein Platzhalter / eine Leerstelle in einem logischen oder mathematischen Ausdruck. Der Variable kann ein beliebiger Wert zugewiesen werden. 
### Deklaration
Die Variable x erstellen:
```js
let x;
```
### Initialisierung
Der eben erstellten Variable x den Wert 5 zuweisen:
```js
x = 5;
```
### Deklaration & Initialisierung
Es ist auch möglich eine Variable zu erstellen und ihr direkt einen Wert zuzuweisen (meist wird das auch ganeu so gemacht).
```js
let x = 5;
```

## Datentypen
In JavaScript gibt es unter anderem die Datentypen string, number und boolean. Wenn einer Variable nun ein bestimmter Wert zugewiesen wird, nimmt diese automatisch den Datentypen des Wertes an. 

### Number
Der Datentyp number kann sowohl eine ganze Zahl (10), als auch eine Fliesskommazahl (1.5) sein. Wenn also der Variable x der Wert 5 vom Type number zugewiesen wird, ist nun die Variable x ebenfalls vom Typ number. 
```js
let x = 5; // Der Datentyp der Variable x ist number
```

### String
Der Datentyp string ist eine Aneinanderreihung von Zeichen ("Die Stadt ist 100 Jahre alt.") und kann sowohl Buchstaben, als auch Zahlen enthalten. 
```js
let z = "Die Erde"; // Der Datentyp der Variable z ist string
```

### Boolean
Der Datentyp boolean ist binär, das bedeutet er kann entweder "true" oder "false" sein. 
```js
let y = true; // Der Datentyp der Variable y ist boolean
```

## Arrays
Ein Array ist eine spezielle Variable, welche mehrere Elemente beinhalten kann. Die Drei Car Variablen (car1, car2 und car3) können entweder wie unten gezeigt einzeln erstellt werden oder sie können zusammen gruppiert in einem Array erstellt werden.
```js
let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";

const cars = ["Saab", "Volvo", "BMW"]; // Array
```

### Verwendung eines Arrays
Mit dem Index kann auf ein Element eines Arrays zugegriffen werden. Der Index beginnt bei 0, deshalb hat das erste Element eines Arrays den Index 0. 
```js
const cars = ["Saab", "Volvo", "BMW"]; 

// Das erste Element "Saab" des Arrays in die Konsole schreiben
conosle.log(cars[0]); 

// Element am Ende des bestehenden Arrays hinzufügen
let car4 = "Ford";
cars.push(car4);

// Das letzte Element vom bestehenden Array löschen
cars.pop();

// Das erste Element im bestehenden Array überschreiben
cars[0] = "Sharan";

// Länge eines Arrays herausfinden und in der Variable size speichern
let size = cars.length;
```

## Operatoren
### Zuweisungsoperator
Mit dem Zuweisungsoperator (=) kann einer Variable ein Wert zugeordnet werden. 
```js
let z = "Die Erde"; 
```

### Vergleichsoperatoren
Mit den Vergleichsoperatoren (<, <=, > >=) können zwei Variablen verglichen werden. 
```js
let x = 5;
let y = 10;
let isTrue = x > y; // isTrue ist false, da 5 kleiner als 10 ist
```

### Addition
```js
let x = 5; // x den Wert 5 zuweisen
let y = 2; // y den Wert 3 zuweisen
let z = x + y; // z das Resultat (7) von x + y zuweisen
```

### Subtraktion
```js
let x = 5; // x den Wert 5 zuweisen
let y = 2; // y den Wert 3 zuweisen
let z = x - y; // z das Resultat (3) von x - y zuweisen
```

### Multiplikation
```js
let x = 5; // x den Wert 5 zuweisen
let y = 2; // y den Wert 3 zuweisen
let z = x * y; // z das Resultat (10) von x * y zuweisen
```

### Division
```js
let x = 6; // x den Wert 6 zuweisen
let y = 2; // y den Wert 3 zuweisen
let z = x / y; // z das Resultat (3) von x / y zuweisen
```

### Negation
```js
let x = true; // x den Wert true zuweisen
let y = !x; // y den Wert das Gegenteil (false) von x zuweisen
```

### Und
Beim "&&" Operator ist das Ergebnis nur true, wenn beide Variablen auch true sind. Sonst ist das Ergebnis false. 
```js
let x = true; // x den Wert true zuweisen
let y = false; // y den Wert false zuweisen
let z = x && y; // z das Resultat (false) von x und y zuweisen
```

### Oder
Beim "||" Operator ist das Ergebnis true, wenn mindestens eine der beiden Variablen true ist. Sonst ist das Ergebnis false. 
```js
let x = true; // x den Wert true zuweisen
let y = false; // y den Wert false zuweisen
let z = x && y; // z das Resultat (true) von x und y zuweisen
```

### Inkrement


### Dekrement


## Verzweigungen


## Loops


## Funktionen
