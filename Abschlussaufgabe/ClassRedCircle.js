var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class RedCircle extends Abschlussaufgabe.MovingCircle {
        constructor(_x, _y) {
            super(_x, _y);
            this.dx = Math.random() * 5 - 2.5;
            this.dy = Math.random() * 5 - 2.5;
            this.color = "#FA3D3C";
        }
        move() {
            if (this.y > 750 || this.y < 50) {
                this.dy -= this.dy * 2;
            }
            if (this.x > 1150 || this.x < 50) {
                this.dx -= this.dx * 2;
            }
            this.x += this.dx;
            this.y += this.dy;
        }
        draw() {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x, this.y, 50, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = this.color;
            Abschlussaufgabe.crc2.fill();
        }
    }
    Abschlussaufgabe.RedCircle = RedCircle;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=ClassRedCircle.js.map