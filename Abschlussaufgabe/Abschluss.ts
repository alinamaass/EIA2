/*
Aufgabe: Lektion08
Name: Alina Maaß
Matrikel: 256216
Datum: 08.12.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Abschlussaufgabe {

    export let crc2: CanvasRenderingContext2D;
    window.addEventListener("load", init);
    let objects: RedCircle[] = [];
    let darkObjects: BlackCircle[] = [];
    let imgData: ImageData;
    let points: number = 0;
    var timeoutToken: any;
    let greencounter: number = 0;
                console.log(greencounter);




    function init(): void {
        
        alert("Triff die roten Kreise!\nMeide die schwarzen Kreise.\nViel Spaß!");
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log("Test, start init");
        canvas.addEventListener("click", shootBomb);
        crc2 = canvas.getContext("2d");

        crc2.fillStyle = "#FDFDE6";
        crc2.fillRect(0, 0, 1200, 800);

        //Hintergrund speichern
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        //Schleife für Animation
        //Red Circle
        for (let i: number = 0; i < 5; i++) {
            let s: RedCircle = new RedCircle(Math.random() * 1080 + 60, Math.random() * 680 + 60);
            objects.push(s);
        }

        //Black Circle
        for (let i: number = 0; i < 5; i++) {
            let r: BlackCircle = new BlackCircle(Math.random() * 1080 + 60, Math.random() * 680 + 60);
            darkObjects.push(r);
            console.log("black");
        }
        animate();
    }



    //Kreise per Klick färben
    function shootBomb(_event: MouseEvent): void {

        for (let i: number = 0; i < objects.length; i++) {
            console.log(_event.pageX, _event.pageY);
            if (_event.pageX > objects[i].x - 80 && _event.pageX < objects[i].x + 80 && objects[i].y - 80 < _event.pageY && _event.pageY < objects[i].y + 80) {

                objects[i].color = "#68FA7E";
                greencounter += 1;
                console.log(greencounter);
                console.log("grün!!");
                points += 10;
                objects[i].dx = objects[i].dx / 2;
                objects[i].dy = objects[i].dy / 2;
            }
            else if (_event.pageX > darkObjects[i].x - 80 && _event.pageX < darkObjects[i].x + 80 && darkObjects[i].y - 80 < _event.pageY && _event.pageY < darkObjects[i].y + 80) {
                for (let e: number = 0; e < objects.length; e++) {
                    objects[e].dx = objects[e].dx * 1.5;
                    objects[e].dy = objects[e].dy * 1.5;

                }
                points -= 20;
            }
        }

        let div: HTMLDivElement = <HTMLDivElement>document.getElementById("zusammenfassung");
        div.style.fontSize = "5em";
        div.innerText = "";
        div.innerText += "Punkte: ";
        div.innerText += points;
        div.style.margin = "2%";


        if (points < 0) {
            window.clearTimeout(timeoutToken);
            crc2.fillStyle = "#FF0000";
            crc2.fillRect(0, 0, 1200, 800);
            crc2.fillStyle = "black";
            crc2.font = "50px Verdana";
            crc2.fillText("You failed!", 450, 350);

            crc2.font = "30px Verdana";
            crc2.fillText("Lade die Seite neu und versuch's nochmal!", 250, 450);

        }

            if (greencounter == objects.length) {
                window.clearTimeout(timeoutToken);
                crc2.fillStyle = "#68FA7E";
                crc2.fillRect(0, 0, 1200, 800);
                crc2.fillStyle = "black";
                crc2.font = "50px Verdana";
                crc2.fillText("Congrats, Champ!", 400, 350);




        }
    }




    function animate(): void {
        console.log("animate");
        crc2.putImageData(imgData, 0, 0);//Hintergrund neu aufbauen

        //Red Objects
        for (let i: number = 0; i < objects.length; i++) {
            let s: RedCircle = objects[i];
            s.update();
        }

        //Black Objects
        for (let i: number = 0; i < objects.length; i++) {
            let r: BlackCircle = darkObjects[i];
            r.update();
        }

        timeoutToken = window.setTimeout(animate, 15);

        //animate wird alle 15 ms wiederholt


    }




}