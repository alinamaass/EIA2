/*
Aufgabe: Lektion05
Name: Alina Maaß
Matrikel: 256216
Datum: 17.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Lektion05 {

    export class CloudInfo {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }
        
        
        move(): void{
            if(this.x > 800){
                this.x = 0;
                }
            this.x += Math.random() * 2;
            console.log("class cloud move");
            }
        
        
        
        draw(): void{
             crc2.beginPath();
            crc2.arc(this.x, this.y, 15, 0, 2 * Math.PI);
            crc2.fillStyle = "#D7FDFD";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 40, this.y, 15, 0, 2 * Math.PI);
            crc2.fillStyle = "#D7FDFD";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 20, this.y - 10, 25, 0, 2 * Math.PI);
            crc2.fillStyle = "#D7FDFD";
            crc2.fill();
            }
        
        update(): void{
            this.move();
            this.draw();
            }


    }
}