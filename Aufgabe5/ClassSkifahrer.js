/*
Aufgabe: Lektion05
Name: Alina Maaß
Matrikel: 256216
Datum: 17.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.
*/
var Lektion05;
(function (Lektion05) {
    class SkifahrerInfo {
        constructor(_x, _y, _dx, _dy, _color) {
            this.x = _x;
            this.y = _y;
            this.dx = _dx;
            this.dy = _dy;
            this.color = _color;
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
            Lektion05.crc2.fillStyle = this.color;
            Lektion05.crc2.fillRect(this.x, this.y, 9, -25);
            Lektion05.crc2.beginPath();
            Lektion05.crc2.arc(this.x + 5, this.y - 25, 7, 0, 2 * Math.PI);
            Lektion05.crc2.fillStyle = this.color;
            Lektion05.crc2.fill();
            Lektion05.crc2.fillStyle = this.color;
            Lektion05.crc2.beginPath();
            Lektion05.crc2.moveTo(this.x + 20, this.y - 4);
            Lektion05.crc2.lineTo(this.x - 20, this.y + 4);
            Lektion05.crc2.stroke();
        }
        update() {
            console.log("move Skifahrer.ts");
            this.move();
            this.draw();
        }
    }
    Lektion05.SkifahrerInfo = SkifahrerInfo;
})(Lektion05 || (Lektion05 = {}));
//# sourceMappingURL=ClassSkifahrer.js.map