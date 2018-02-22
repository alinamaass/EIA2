
/*
Aufgabe: Abschlussaufgabe WS 17/18
Name: Alina Maaß
Matrikel: 256216
Datum: 22.02.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Abschlussaufgabe {

    export class ConfettiInfo {
        x: number;
        y: number;
        color: string;

        constructor(_x: number, _y: number, _color: string) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
        }


        move(): void {
            if (this.y > 600) {
                this.y = 0;
                this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            }
            this.x += Math.random() * 10 - 5;
            this.y += Math.random() * 5 + 4;
        }


        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.fillRect(this.x, this.y, 8, 8);
            crc2.fill();
        }

        update(): void {
            this.move();
            this.draw();
        }


    }
}