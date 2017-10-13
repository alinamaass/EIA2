/*
Aufgabe: 0 Arbeitsfähigkeit
Name: Alina Maaß
Matrikel: 256216
Datum: 11.10.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/


function alert(): void {
    let eingabe: string = prompt("Bitte gib deinen Namen ein.", "Spongebob Schwammkopf");
    if (eingabe != null) {
        document.getElementById("hi").innerHTML =
            "Hallo " + eingabe + "! Das ist eine Miniseite.";
    }
}