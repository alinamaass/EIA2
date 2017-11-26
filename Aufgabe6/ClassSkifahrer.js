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
    class SkifahrerInfo extends Lektion06.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
            this.dx = Math.random() * 1.5 - 3.5;
            this.dy = Math.random() * 1 + 1;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
        move() {
            if (this.x < 0 || this.y > 600) {
                this.x = Math.random() * 200 + 800;
                this.y = Math.random() * 100;
                this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            }
            this.x += this.dx;
            this.y += this.dy;
        }
        draw() {
            Lektion06.crc2.fillStyle = this.color;
            Lektion06.crc2.fillRect(this.x, this.y, 9, -25);
            Lektion06.crc2.beginPath();
            Lektion06.crc2.arc(this.x + 5, this.y - 25, 7, 0, 2 * Math.PI);
            Lektion06.crc2.fillStyle = this.color;
            Lektion06.crc2.fill();
            Lektion06.crc2.fillStyle = this.color;
            Lektion06.crc2.beginPath();
            Lektion06.crc2.moveTo(this.x + 20, this.y - 4);
            Lektion06.crc2.lineTo(this.x - 20, this.y + 4);
            Lektion06.crc2.stroke();
        }
    }
    Lektion06.SkifahrerInfo = SkifahrerInfo;
})(Lektion06 || (Lektion06 = {}));
//# sourceMappingURL=ClassSkifahrer.js.map