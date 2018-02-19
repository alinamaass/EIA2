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
    class RedCircle extends Abschlussaufgabe.MovingCircle {
        constructor(_x, _y) {
            super(_x, _y);
            this.dx = Math.random() * 5 - 2.5;
            this.dy = Math.random() * 5 - 2.5;
            this.color = "#F39228";
        }
        move() {
            if (this.y > 550 || this.y < 50) {
                this.dy -= this.dy * 2;
            }
            if (this.x > 750 || this.x < 50) {
                this.dx -= this.dx * 2;
            }
            this.x += this.dx;
            this.y += this.dy;
        }
        //(method) CanvasRenderingContext2D.bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void
        draw() {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x, this.y, 50, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = this.color;
            Abschlussaufgabe.crc2.fill();
            //crc2.bezierCurveTo(this.x +
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.bezierCurveTo(this.x, this.y - 50, this.x - 10, this.y, this.x + 49, this.y - 10);
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.bezierCurveTo(this.x - 48, this.y + 10, this.x, this.y - 10, this.x - 5, this.y + 50);
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.bezierCurveTo(this.x - 32, this.y + 38, this.x - 15, this.y - 15, this.x + 35, this.y - 37);
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.bezierCurveTo(this.x - 40, this.y - 30, this.x - 15, this.y - 15, this.x + 40, this.y + 30);
            Abschlussaufgabe.crc2.stroke();
        }
    }
    Abschlussaufgabe.RedCircle = RedCircle;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=ClassRedCircle.js.map