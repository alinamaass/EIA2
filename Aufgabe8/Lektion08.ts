/*
Aufgabe: Lektion08
Name: Alina Maaß
Matrikel: 256216
Datum: 08.12.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Lektion08 {


    window.addEventListener("load", giveNumber);
    
    
    function giveNumber(): void {       //Funktion zur Abfrage einer Zahl zwischen 10 und 100
        let anzahlBoxes: string = prompt("Gib eine Zahl zwischen 10 und 100 ein")       //Eingabefenster
        if (parseInt(anzahlBoxes) < 10 || parseInt(anzahlBoxes) > 100 || isNaN(parseInt(anzahlBoxes))) {        //wenn keine Zahl bzw. eine Zahl über 100 / unter 10 eingegeben wurde, dann...
            alert("Hoppla! Hier ist etwas schief gelaufen, versuche es noch einmal.");      //erscheint ein alert Fenster und (beim Klick von ok)...
            giveNumber();                             //wird die Funktion abgebrochen und neu gestartet.
        }
        else { // ANDERNFALLS (bei richtiger Eingabe)...
            for (let i: number = 0; i < parseInt(anzahlBoxes); i++) { //wird die for-Schleife ausgeführt. So oft, wie die Zahl die eingegeben hoch ist
                randomBoxes(Math.random() * window.innerWidth, Math.random() * window.innerHeight, Math.random() * 400); //Aufruf der Funktion randomBoxes, einsetzen von individuellen/random Werten für Höhe, Breite und Farbe
            }
        }
    }

    
    function randomBoxes(_x: number, _y: number, _color: number): void {

        let box: HTMLDivElement = document.createElement("div");    // Box (hier: div-Element) wird erzeugt – Name div wird vergeben damit in css darauf zugegriffen werden kann
        box.style.backgroundColor = "hsl(" + _color + ",100%, 50%)"; //hier wird Farbe, Breite, Höhe und Position definiert. Die in giveNumber random gesetzten Werte werden eingefügt
        box.style.width = "40px";   //dir Breite und Höhe beträgt konstant 40px
        box.style.height = "40px";
        box.style.left = _x + "px";       //Hinzufügen von px zur eingegebenen Zahl
        box.style.top = _y + "px";

        document.body.appendChild(box);     //neuer Kindknoten word am Bodyknoten eingefügt
    }
    
    
}