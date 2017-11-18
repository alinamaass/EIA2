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
    class CloudInfo {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        move() {
            if (this.x > 800) {
                this.x = 0;
            }
            this.x += Math.random() * 2;
            console.log("class cloud move");
        }
        draw() {
            Lektion05.crc2.beginPath();
            Lektion05.crc2.arc(this.x, this.y, 15, 0, 2 * Math.PI);
            Lektion05.crc2.fillStyle = "#D7FDFD";
            Lektion05.crc2.fill();
            Lektion05.crc2.beginPath();
            Lektion05.crc2.arc(this.x + 40, this.y, 15, 0, 2 * Math.PI);
            Lektion05.crc2.fillStyle = "#D7FDFD";
            Lektion05.crc2.fill();
            Lektion05.crc2.beginPath();
            Lektion05.crc2.arc(this.x + 20, this.y - 10, 25, 0, 2 * Math.PI);
            Lektion05.crc2.fillStyle = "#D7FDFD";
            Lektion05.crc2.fill();
        }
        update() {
            this.move();
            this.draw();
        }
    }
    Lektion05.CloudInfo = CloudInfo;
})(Lektion05 || (Lektion05 = {}));
//# sourceMappingURL=ClassCloud.js.map