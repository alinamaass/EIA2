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
    class SnowflakeInfo {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        move() {
            if (this.y > 600) {
                this.y = 0;
            }
            this.x += Math.random() * 2 - 1;
            this.y += Math.random() * 2;
        }
        draw() {
            Lektion05.crc2.beginPath();
            Lektion05.crc2.arc(this.x, this.y, 1.75, 0, 2 * Math.PI);
            Lektion05.crc2.fillStyle = "#ffffff";
            Lektion05.crc2.fill();
        }
        update() {
            this.move();
            this.draw();
        }
    }
    Lektion05.SnowflakeInfo = SnowflakeInfo;
})(Lektion05 || (Lektion05 = {}));
//# sourceMappingURL=ClassSnowflake.js.map