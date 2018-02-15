/*
Aufgabe: Lektion06
Name: Alina Maaß
Matrikel: 256216
Datum: 26.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Abschlussaufgabe {
    export class MovingCircle {
        x: number; //Position x-Achse
        y: number; //Position y-Achse
        dx: number; //Bewegung auf der x-Achse
        dy: number; //Bewegung auf der y-Achse
        color: string;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            console.log("Constructor Moving Circle");
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