/*
Aufgabe: Lektion06
Name: Alina Maaß
Matrikel: 256216
Datum: 26.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.
*/
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class MovingCircle {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
            console.log("Constructor Moving Circle");
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            //Inhalt kommt aus den entsprechenden Klassen
        }
        draw() {
            //Inhalt kommt aus den entsprechenden Klassen
        }
    }
    Abschlussaufgabe.MovingCircle = MovingCircle;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=ClassCircle.js.map