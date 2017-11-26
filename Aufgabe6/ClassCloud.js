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
    class CloudInfo extends Lektion06.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            if (this.x > 800) {
                this.x = 0;
            }
            this.x += Math.random() * 2;
        }
        draw() {
            Lektion06.crc2.beginPath();
            Lektion06.crc2.arc(this.x, this.y, 15, 0, 2 * Math.PI);
            Lektion06.crc2.fillStyle = "#D7FDFD";
            Lektion06.crc2.fill();
            Lektion06.crc2.beginPath();
            Lektion06.crc2.arc(this.x + 40, this.y, 15, 0, 2 * Math.PI);
            Lektion06.crc2.fillStyle = "#D7FDFD";
            Lektion06.crc2.fill();
            Lektion06.crc2.beginPath();
            Lektion06.crc2.arc(this.x + 20, this.y - 10, 25, 0, 2 * Math.PI);
            Lektion06.crc2.fillStyle = "#D7FDFD";
            Lektion06.crc2.fill();
        }
    }
    Lektion06.CloudInfo = CloudInfo;
})(Lektion06 || (Lektion06 = {}));
//# sourceMappingURL=ClassCloud.js.map