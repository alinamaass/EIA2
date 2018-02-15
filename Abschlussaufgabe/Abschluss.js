/*
Aufgabe: Lektion08
Name: Alina Maaß
Matrikel: 256216
Datum: 08.12.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.
*/
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", init);
    let objects = [];
    let darkObjects = [];
    let imgData;
    let points = 0;
    var timeoutToken;
    let greencounter = 0;
    console.log(greencounter);
    function init() {
        alert("Triff die roten Kreise!\nMeide die schwarzen Kreise.\nViel Spaß!");
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log("Test, start init");
        canvas.addEventListener("click", shootBomb);
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        Abschlussaufgabe.crc2.fillStyle = "#FDFDE6";
        Abschlussaufgabe.crc2.fillRect(0, 0, 1200, 800);
        //Hintergrund speichern
        imgData = Abschlussaufgabe.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Schleife für Animation
        //Red Circle
        for (let i = 0; i < 5; i++) {
            let s = new Abschlussaufgabe.RedCircle(Math.random() * 1080 + 60, Math.random() * 680 + 60);
            objects.push(s);
        }
        //Black Circle
        for (let i = 0; i < 5; i++) {
            let r = new Abschlussaufgabe.BlackCircle(Math.random() * 1080 + 60, Math.random() * 680 + 60);
            darkObjects.push(r);
            console.log("black");
        }
        animate();
    }
    //Kreise per Klick färben
    function shootBomb(_event) {
        for (let i = 0; i < objects.length; i++) {
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
                for (let e = 0; e < objects.length; e++) {
                    objects[e].dx = objects[e].dx * 1.5;
                    objects[e].dy = objects[e].dy * 1.5;
                }
                points -= 20;
            }
        }
        let div = document.getElementById("zusammenfassung");
        div.style.fontSize = "5em";
        div.innerText = "";
        div.innerText += "Punkte: ";
        div.innerText += points;
        div.style.margin = "2%";
        if (points < 0) {
            window.clearTimeout(timeoutToken);
            Abschlussaufgabe.crc2.fillStyle = "#FF0000";
            Abschlussaufgabe.crc2.fillRect(0, 0, 1200, 800);
            Abschlussaufgabe.crc2.fillStyle = "black";
            Abschlussaufgabe.crc2.font = "50px Verdana";
            Abschlussaufgabe.crc2.fillText("You failed!", 450, 350);
            Abschlussaufgabe.crc2.font = "30px Verdana";
            Abschlussaufgabe.crc2.fillText("Lade die Seite neu und versuch's nochmal!", 250, 450);
        }
        if (greencounter == objects.length) {
            window.clearTimeout(timeoutToken);
            Abschlussaufgabe.crc2.fillStyle = "#68FA7E";
            Abschlussaufgabe.crc2.fillRect(0, 0, 1200, 800);
            Abschlussaufgabe.crc2.fillStyle = "black";
            Abschlussaufgabe.crc2.font = "50px Verdana";
            Abschlussaufgabe.crc2.fillText("Congrats, Champ!", 400, 350);
        }
    }
    function animate() {
        console.log("animate");
        Abschlussaufgabe.crc2.putImageData(imgData, 0, 0); //Hintergrund neu aufbauen
        //Red Objects
        for (let i = 0; i < objects.length; i++) {
            let s = objects[i];
            s.update();
        }
        //Black Objects
        for (let i = 0; i < objects.length; i++) {
            let r = darkObjects[i];
            r.update();
        }
        timeoutToken = window.setTimeout(animate, 15);
        //animate wird alle 15 ms wiederholt
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Abschluss.js.map