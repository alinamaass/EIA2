/*
Aufgabe: Lektion08
Name: Alina Maaß
Matrikel: 256216
Datum: 08.12.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.
*/
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class ConfettiInfo {
        constructor(_x, _y, _color) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
        }
        move() {
            if (this.y > 600) {
                this.y = 0;
                this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            }
            this.x += Math.random() * 10 - 5;
            this.y += Math.random() * 5 + 4;
        }
        draw() {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.fillStyle = this.color;
            Abschlussaufgabe.crc2.fillRect(this.x, this.y, 8, 8);
            Abschlussaufgabe.crc2.fill();
        }
        update() {
            this.move();
            this.draw();
        }
    }
    Abschlussaufgabe.ConfettiInfo = ConfettiInfo;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=ClassConfetti.js.map