/*
Aufgabe: Abschlussaufgabe WS 17/18
Name: Alina Maaß
Matrikel: 256216
Datum: 22.02.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Abschlussaufgabe {

    export let crc2: CanvasRenderingContext2D;
    window.addEventListener("load", init);

    let objects: RedCircle[] = [];
    let darkObjects: BlackCircle[] = [];
    let confetti: ConfettiInfo[] = [];

    let imgData: ImageData;
    let points: number = 0;
    var timeoutToken: any;
    let greencounter: number = 0;
    let blackcounter: number = 0;
    let klickcounter: number = 0;
    console.log(greencounter);
    console.log(blackcounter);
    let erlaubtefehler: number = 3;




    function init(): void {

        alert("Triff die Basketbälle, meide die schwarzen Kreise.\n\nDu darfst dir " + erlaubtefehler + " Fehler erlauben.\n\nMit JEDEM Klick wird das Spiel etwas schneller!\n\nTriffst du alle Basketbälle, gewinnst du das Spiel.\n\nViel Spaß!");
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log("Test, start init");
        canvas.addEventListener("click", shootBomb);
        crc2 = canvas.getContext("2d");

        crc2.fillStyle = "#FDFDE6";
        crc2.fillRect(0, 0, 800, 600);


        //Hintergrund speichern
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        //Schleife für Animation
        //Red Circle
        for (let i: number = 0; i < 8; i++) {
            let s: RedCircle = new RedCircle(Math.random() * 700 + 50, Math.random() * 500 + 50);
            objects.push(s);
        }

        //Black Circle
        for (let i: number = 0; i < 12; i++) {
            let r: BlackCircle = new BlackCircle(Math.random() * 640 + 80, Math.random() * 440 + 80);
            darkObjects.push(r);
            console.log("black");
        }



        animate();
    }



    function shootBomb(_event: MouseEvent): void {

        klickcounter += 1;
        console.log(klickcounter);

        for (let i: number = 0; i < objects.length; i++) {
            //console.log(_event.pageX, _event.pageY);

            objects[i].dx = objects[i].dx * 1.1;//Die Geschwindigkeit der Basketbälle durch 1.25 geteilt (also etwas verlangsamt)
            objects[i].dy = objects[i].dy * 1.1;

            
            if (_event.pageX >= objects[i].x && _event.pageX <= objects[i].x + 100 && objects[i].y <= _event.pageY && _event.pageY <= objects[i].y + 100 && objects[i].color != "#68FA7E") {
                //WENN der Klick im Bereich eines Basketballs liegt
                //UND der Basketball noch nicht grün ist
                objects[i].color = "#68FA7E";//wird die Farbe zu grün geändert,
                greencounter += 1;//die Punkte zum Sieg werden hochgezählt
                console.log("Treffer " + greencounter);//und auf der Konsole ausgegeben.

            }
        }

        for (let i: number = 0; i < darkObjects.length; i++) {
            //console.log(_event.pageX, _event.pageY);

            darkObjects[i].dx = darkObjects[i].dx * 1.1;//und ihre Geschwindigkeit mit 1.25 multipliziert (also etwas erhöht).
            darkObjects[i].dy = darkObjects[i].dy * 1.1;
            
            
            if (_event.pageX >= darkObjects[i].x && _event.pageX <= darkObjects[i].x + 100 && darkObjects[i].y <= _event.pageY && _event.pageY <= darkObjects[i].y + 100 && darkObjects[i].color != "#DF0101") {
                //WENN der Klick im Bereich eines schwarzen Balls liegt
                //UND der Ball noch nicht rot ist
                darkObjects[i].color = "#DF0101";//wird die Farbe zu rot geändert,
                blackcounter += 1;//die Treffer auf schwarze Bälle werden hochgezählt
                console.log("Fehler " + blackcounter);//und auf der Konsole ausgegeben.
            }
        }

        //Box füe aktuellen Stand: Treffer, Fehler, Klicks
        let div: HTMLDivElement = <HTMLDivElement>document.getElementById("zusammenfassung");
        div.style.padding = "1em";
        div.style.margin = "2%";
        div.innerHTML = "";
        div.innerHTML += "Treffer: ";
        div.innerHTML += greencounter + " von " + objects.length;
        div.innerHTML += "<br>Fehler: ";
        div.innerHTML += blackcounter + " von " + erlaubtefehler;
        div.innerHTML += "<br>Klicks: ";
        div.innerHTML += klickcounter;


        if (klickcounter == 10) {

            for (let i: number = 0; i < 3; i++) {
                let s: RedCircle = new RedCircle(Math.random() * 700 + 50, Math.random() * 500 + 50);
                objects.push(s);
            }

            for (let i: number = 0; i < 2; i++) {
                let r: BlackCircle = new BlackCircle(Math.random() * 640 + 80, Math.random() * 440 + 80);
                darkObjects.push(r);
                console.log("black");
            }
        }


        if (blackcounter == erlaubtefehler + 1) {
            window.clearTimeout(timeoutToken);
            crc2.fillStyle = "#FF0000";
            crc2.fillRect(0, 0, 1200, 800);
            crc2.fillStyle = "black";
            crc2.font = "40px Verdana";
            crc2.fillText("You failed!", 300, 250);

            crc2.font = "30px Verdana";
            crc2.fillText("Lade die Seite neu und versuch's nochmal!", 100, 300);

        }

        if (greencounter == objects.length) {
            calculateScore();
            window.clearTimeout(timeoutToken);
            crc2.clearRect(0, 0, 800, 600);
            crc2.fillStyle = "#68FA7E";
            crc2.fillRect(0, 0, 1200, 800);
            crc2.fillStyle = "black";
            crc2.font = "40px Verdana";
            crc2.fillText("Congrats, Champ!", 200, 250);
            crc2.font = "30px Verdana";
            crc2.fillText("Dein Score: " + points, 250, 350);


            imgData = crc2.getImageData(0, 0, 800, 600);

            //Konfetti erzeugen
            for (let i: number = 0; i < 300; i++) {
                confetti[i] = new ConfettiInfo(Math.random() * 800, Math.random() * 600, "hsl(" + Math.random() * 360 + ", 100%, 50%)");
            }

            animateConfetti();

        }
    }



    function calculateScore(): void {
        //*******Punkte für Fehler Anzahl*******
        if (blackcounter == 0) {
            points += 1000;
        }
        if (blackcounter == 1) {
            points += 50;
        }
        if (blackcounter == 2) {
            points += 30;
        }
        if (blackcounter == 3) {
            points += 0;
        }

        //******Punkte für Klick Anzahl *******
        for (let i: number = 0; i < objects.length; i++) {
            if (klickcounter == objects.length + i) {
                points += 10000 - i * 100;
            }
        }

    }

    function animateConfetti(): void {
        crc2.putImageData(imgData, 0, 0);//Hintergrund neu aufbauen

        //Konfetti bewegen
        for (let i: number = 0; i < confetti.length; i++) {
            confetti[i].update();
        }
        window.setTimeout(animateConfetti, 20);
        //animate wird alle 20 ms wiederholt
    }



    function animate(): void {
        //console.log("animate");
        crc2.putImageData(imgData, 0, 0);//Hintergrund neu aufbauen

        //Red Objects (Basketbälle)
        for (let i: number = 0; i < objects.length; i++) {
            let s: RedCircle = objects[i];
            s.update();
        }

        //Black Objects
        for (let i: number = 0; i < darkObjects.length; i++) {
            let r: BlackCircle = darkObjects[i];
            r.update();

        }

        timeoutToken = window.setTimeout(animate, 15);
        //animate wird alle 15 ms wiederholt


    }




}