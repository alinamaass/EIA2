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
            if (this.y > 720 || this.y < 80) {
                this.dy -= this.dy * 2;
            }
            if (this.x > 1120 || this.x < 80) {
                this.dx -= this.dx * 2;
            }
            this.x += this.dx;
            this.y += this.dy;
        }
        draw() {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x, this.y, 80, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.fillStyle = this.color;
            Abschlussaufgabe.crc2.fill();
        }
    }
    Abschlussaufgabe.BlackCircle = BlackCircle;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=ClassBlackCircle.js.map