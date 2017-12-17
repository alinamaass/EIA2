/*
Aufgabe: Lektion09
Name: Alina Maaß
Matrikel: 256216
Datum: 17.12.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.
*/
var Lektion09;
(function (Lektion09) {
    window.addEventListener("load", init);
    let currentLetter;
    document.addEventListener("keydown", tastaturEingabe);
    //Buchstabenboxen zeichnen
    function init() {
        let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        let anzahl = letters.length;
        if (anzahl == letters.length) {
            for (let i = 0; i < letters.length; i++) {
                drawBox(letters[i]);
            }
        }
        writeLetter();
    }
    //Farbe ändern beim Klicken und Buchstaben auswählen
    function handleClick(_event) {
        let klicken = _event.target;
        klicken.style.color = "black";
        currentLetter = klicken.id;
        let divList = document.getElementsByClassName("letters");
        for (let i = 0; i < divList.length; i++) {
            if (currentLetter != divList[i].id) {
                divList[i].style.color = "white";
            }
        }
    }
    //divs mit Buchstaben erstellen
    function drawBox(_buchstaben) {
        let div = document.createElement("div");
        div.innerText = _buchstaben;
        div.style.backgroundColor = "pink";
        div.style.border = "1px solid grey";
        div.style.borderRadius = "10px 10px 10px 10px";
        div.style.width = "50px";
        div.style.height = "50px";
        div.style.marginTop = "4px";
        div.style.marginRight = "4px";
        div.style.marginBottom = "4px";
        div.style.marginLeft = "4px";
        div.style.fontSize = "40px";
        div.style.textAlign = "center";
        div.id = _buchstaben; //ID erstellt um divs zu vergleichen
        div.className = "letters";
        div.addEventListener("click", handleClick);
        document.body.appendChild(div);
    }
    //Box erstellen
    function writeLetter() {
        let letter = document.createElement("div");
        letter.style.backgroundColor = "#cdcdcd";
        letter.style.width = "1000px";
        letter.style.height = "500px";
        letter.style.marginTop = "10px";
        letter.style.marginRight = "4px";
        letter.addEventListener("click", setLetters);
        document.body.appendChild(letter);
    }
    //Buchstaben in den Brief setzen
    function setLetters(_event) {
        let box = document.createElement("div");
        box.innerText = currentLetter;
        box.style.backgroundColor = "pink";
        box.style.borderRadius = "10px 10px 10px 10px";
        box.style.width = "50px";
        box.style.height = "50px";
        box.style.marginLeft = "2px";
        box.style.marginRight = "2px";
        box.style.fontSize = "30px";
        box.style.textAlign = "center";
        box.style.position = "absolute";
        box.style.left = _event.pageX - 25 + "px";
        box.style.top = _event.pageY - 20 + "px";
        box.addEventListener("click", deleteLetter);
        document.body.appendChild(box);
        let click = _event.target;
    }
    //Funktion damit Buchstaben mit Tastaturklick ausgewählt werden können
    function tastaturEingabe(event) {
        if (event.key == "a" || event.key == "A") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "b" || event.key == "B") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "c" || event.key == "C") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "d" || event.key == "D") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "e" || event.key == "E") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "f" || event.key == "F") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "g" || event.key == "G") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "h" || event.key == "H") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "i" || event.key == "I") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "j" || event.key == "J") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "k" || event.key == "K") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "l" || event.key == "L") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "m" || event.key == "M") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "n" || event.key == "N") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "o" || event.key == "O") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "p" || event.key == "P") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "q" || event.key == "Q") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "r" || event.key == "R") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "s" || event.key == "S") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "t" || event.key == "T") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "u" || event.key == "U") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "v" || event.key == "V") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "w" || event.key == "W") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "x" || event.key == "X") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "y" || event.key == "Y") {
            currentLetter = event.key;
            setLetters;
        }
        else if (event.key == "z" || event.key == "Z") {
            currentLetter = event.key;
            setLetters;
        }
    }
    //mit gedrückter Alt-Taste .....
    function handleAlt(_event) {
        if (_event.keyCode == 18) {
            deleteLetter;
        }
    }
    //....buchstaben entfernen
    function deleteLetter(_event) {
        let _delete = _event.target;
        document.addEventListener("keypressed", handleAlt);
        document.body.removeChild(_delete);
    }
})(Lektion09 || (Lektion09 = {}));
//# sourceMappingURL=Lektion09.js.map