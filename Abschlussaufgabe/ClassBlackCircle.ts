/*
Aufgabe: Lektion08
Name: Alina Maaß
Matrikel: 256216
Datum: 08.12.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.
*/
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
            //schwarzen Kreis erzeigen
            crc2.beginPath();
            crc2.arc(this.x, this.y, 60, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();

            //Weiß: Augen und Mund
            crc2.beginPath();
            crc2.moveTo(this.x - 45, this.y - 10);
            crc2.lineTo(this.x - 5, this.y + 5);
            crc2.lineTo(this.x - 20, this.y + 15);
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(this.x + 45, this.y - 10);
            crc2.lineTo(this.x + 5, this.y + 5);
            crc2.lineTo(this.x + 20, this.y + 15);
            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(this.x, this.y + 30);
            crc2.lineTo(this.x + 20, this.y + 40);
            crc2.lineTo(this.x - 20, this.y + 40);
            crc2.stroke();
            crc2.fill();
            //Schwarz: Kreise in Augen
            crc2.beginPath();
            crc2.arc(this.x - 20, this.y + 5, 4, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "#000000";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 20, this.y + 5, 4, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fill();


        }


    }
}