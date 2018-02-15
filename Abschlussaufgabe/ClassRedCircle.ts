namespace Abschlussaufgabe {

    export class RedCircle extends MovingCircle {

        dx: number; //Bewegung auf der x-Achse
        dy: number; //Bewegung auf der y-Achse
        color: string;

        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.dx = Math.random() * 5 - 2.5;
            this.dy = Math.random() * 5 - 2.5;
            this.color = "#FA3D3C";
        }


        move(): void {
            if (this.y > 750 || this.y < 50) {
                this.dy -= this.dy * 2;
            }
            if (this.x > 1150 || this.x < 50) {
                this.dx -= this.dx * 2;
            }
            this.x += this.dx;
            this.y += this.dy;
        }


        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 50, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();
        }


    }
}