/*
Aufgabe: Lektion06
Name: Alina Maaß
Matrikel: 256216
Datum: 26.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.
*/
var Lektion06;
(function (Lektion06) {
    class MovingObjects {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
            console.log("Constructor Moving Objects");
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
    Lektion06.MovingObjects = MovingObjects;
})(Lektion06 || (Lektion06 = {}));
//# sourceMappingURL=ClassMovingObjects.js.map