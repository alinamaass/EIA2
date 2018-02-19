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
    class BlackCircle extends Abschlussaufgabe.MovingCircle {
        constructor(_x, _y) {
            super(_x, _y);
            this.dx = Math.random() * 5 - 2.5;
            this.dy = Math.random() * 5 - 2.5;
            this.color = "#000000";
        }
        move() {
            if (this.y > 540 || this.y < 60) {
                this.dy -= this.dy * 2;
            }
            if (this.x > 740 || this.x < 60) {
                this.dx -= this.dx * 2;
            }
            this.x += this.dx;
            this.y += this.dy;
        }
        draw() {
            //schwarzen Kreis erzeigen
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x, this.y, 60, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = this.color;
            Abschlussaufgabe.crc2.fill();
            //Weiß: Augen und Mund
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x - 45, this.y - 10);
            Abschlussaufgabe.crc2.lineTo(this.x - 5, this.y + 5);
            Abschlussaufgabe.crc2.lineTo(this.x - 20, this.y + 15);
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.fillStyle = "#ffffff";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x + 45, this.y - 10);
            Abschlussaufgabe.crc2.lineTo(this.x + 5, this.y + 5);
            Abschlussaufgabe.crc2.lineTo(this.x + 20, this.y + 15);
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x, this.y + 30);
            Abschlussaufgabe.crc2.lineTo(this.x + 20, this.y + 40);
            Abschlussaufgabe.crc2.lineTo(this.x - 20, this.y + 40);
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.fill();
            //Schwarz: Kreise in Augen
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x - 20, this.y + 5, 4, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.fillStyle = "#000000";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 20, this.y + 5, 4, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.fill();
        }
    }
    Abschlussaufgabe.BlackCircle = BlackCircle;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=ClassBlackCircle.js.map