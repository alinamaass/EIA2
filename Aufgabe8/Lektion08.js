/*
Aufgabe: Lektion08
Name: Alina Maaß
Matrikel: 256216
Datum: 08.12.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.
*/
var Lektion08;
(function (Lektion08) {
    window.addEventListener("load", giveNumber);
    function giveNumber() {
        let anzahlBoxes = prompt("Gib eine Zahl zwischen 10 und 100 ein"); //Eingabefenster
        if (parseInt(anzahlBoxes) < 10 || parseInt(anzahlBoxes) > 100 || isNaN(parseInt(anzahlBoxes))) {
            alert("Hoppla! Hier ist etwas schief gelaufen, versuche es noch einmal."); //erscheint ein alert Fenster und (beim Klick von ok)...
            giveNumber(); //wird die Funktion abgebrochen und neu gestartet.
        }
        else {
            for (let i = 0; i < parseInt(anzahlBoxes); i++) {
                randomBoxes(Math.random() * window.innerWidth, Math.random() * window.innerHeight, Math.random() * 400); //Aufruf der Funktion randomBoxes, einsetzen von individuellen/random Werten für Höhe, Breite und Farbe
            }
        }
    }
    function randomBoxes(_x, _y, _color) {
        let box = document.createElement("div"); // Box (hier: div-Element) wird erzeugt – Name div wird vergeben damit in css darauf zugegriffen werden kann
        box.style.backgroundColor = "hsl(" + _color + ",100%, 50%)"; //hier wird Farbe, Breite, Höhe und Position definiert. Die in giveNumber random gesetzten Werte werden eingefügt
        box.style.width = "40px"; //dir Breite und Höhe beträgt konstant 40px
        box.style.height = "40px";
        box.style.left = _x + "px"; //Hinzufügen von px zur eingegebenen Zahl
        box.style.top = _y + "px";
        document.body.appendChild(box); //neuer Kindknoten word am Bodyknoten eingefügt
    }
})(Lektion08 || (Lektion08 = {}));
//# sourceMappingURL=Lektion08.js.map