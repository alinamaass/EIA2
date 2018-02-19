namespace Abschlussaufgabe {

    export class BlackCircle extends MovingCircle {

        dx: number; //Bewegung auf der x-Achse
        dy: number; //Bewegung auf der y-Achse
        color: string;

        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.dx = Math.random() * 5 - 2.5;
            this.dy = Math.random() * 5 - 2.5;
            this.color = "#000000";
        }


        move(): void {
            if (this.y > 540 || this.y < 60) {
                this.dy -= this.dy * 2;
            }
            if (this.x > 740 || this.x < 60) {
                this.dx -= this.dx * 2;
            }
            this.x += this.dx;
            this.y += this.dy;
        }


        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 60, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();
        }


    }
}