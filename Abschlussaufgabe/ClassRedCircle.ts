/*
Aufgabe: Lektion08
Name: Alina Maaß
Matrikel: 256216
Datum: 08.12.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Abschlussaufgabe {

    export class RedCircle extends MovingCircle {

        dx: number; //Bewegung auf der x-Achse
        dy: number; //Bewegung auf der y-Achse
        color: string;

        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.dx = Math.random() * 5 - 2.5;
            this.dy = Math.random() * 5 - 2.5;
            this.color = "#F39228";
        }


        move(): void {
            if (this.y > 550 || this.y < 50) {
                this.dy -= this.dy * 2;
            }
            if (this.x > 750 || this.x < 50) {
                this.dx -= this.dx * 2;
            }
            this.x += this.dx;
            this.y += this.dy;
        }

        //(method) CanvasRenderingContext2D.bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void
        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 50, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();
            //crc2.bezierCurveTo(this.x +

            crc2.beginPath();
            crc2.bezierCurveTo(this.x, this.y - 50, this.x - 10, this.y, this.x + 49, this.y - 10);
            crc2.stroke();

            crc2.beginPath();
            crc2.bezierCurveTo(this.x - 48, this.y + 10, this.x, this.y - 10, this.x - 5, this.y + 50);
            crc2.stroke();


            crc2.beginPath();
            crc2.bezierCurveTo(this.x - 32, this.y + 38, this.x - 15, this.y - 15, this.x + 35, this.y - 37);
            crc2.stroke();


            crc2.beginPath();
            crc2.bezierCurveTo(this.x - 40, this.y - 30, this.x - 15, this.y - 15, this.x + 40, this.y + 30);
            crc2.stroke();
        }


    }
}