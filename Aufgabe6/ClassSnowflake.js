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
    class SnowflakeInfo extends Lektion06.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            if (this.y > 600) {
                this.y = 0;
            }
            this.x += Math.random() * 2 - 1;
            this.y += Math.random() * 2;
        }
        draw() {
            Lektion06.crc2.beginPath();
            Lektion06.crc2.arc(this.x, this.y, 1.75, 0, 2 * Math.PI);
            Lektion06.crc2.fillStyle = "#ffffff";
            Lektion06.crc2.fill();
        }
    }
    Lektion06.SnowflakeInfo = SnowflakeInfo;
})(Lektion06 || (Lektion06 = {}));
//# sourceMappingURL=ClassSnowflake.js.map