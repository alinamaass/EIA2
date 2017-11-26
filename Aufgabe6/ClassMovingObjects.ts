/*
Aufgabe: Lektion06
Name: Alina Maaß
Matrikel: 256216
Datum: 26.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Lektion06 {
    export class MovingObjects {
        x: number; //Position x-Achse
        y: number; //Position y-Achse

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            console.log("Constructor Moving Objects");
        }


        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            //Inhalt kommt aus den entsprechenden Klassen
        }

        draw(): void {
            //Inhalt kommt aus den entsprechenden Klassen
        }


    }
}