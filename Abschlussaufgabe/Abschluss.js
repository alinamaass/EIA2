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
    let confetti = [];
    let imgData;
    let points = 0;
    var timeoutToken;
    let greencounter = 0;
    console.log(greencounter);
    function init() {
        alert("Triff die Basketbälle!\nMeide die schwarzen Kreise.\nViel Spaß!");
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log("Test, start init");
        canvas.addEventListener("click", shootBomb);
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        Abschlussaufgabe.crc2.fillStyle = "#FDFDE6";
        Abschlussaufgabe.crc2.fillRect(0, 0, 800, 600);
        //Hintergrund speichern
        imgData = Abschlussaufgabe.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Schleife für Animation
        //Red Circle
        for (let i = 0; i < 8; i++) {
            let s = new Abschlussaufgabe.RedCircle(Math.random() * 700 + 50, Math.random() * 500 + 50);
            objects.push(s);
        }
        //Black Circle
        for (let i = 0; i < 12; i++) {
            let r = new Abschlussaufgabe.BlackCircle(Math.random() * 640 + 80, Math.random() * 440 + 80);
            darkObjects.push(r);
            console.log("black");
        }
        animate();
    }
    //Kreise per Klick färben
    function shootBomb(_event) {
        for (let i = 0; i < objects.length; i++) {
            console.log(_event.pageX, _event.pageY);
            // if (_event.pageX > objects[i].x - 70 && _event.pageX < objects[i].x + 70 && objects[i].y - 70 < _event.pageY && _event.pageY < objects[i].y + 70) {
            if (_event.pageX >= objects[i].x && _event.pageX <= objects[i].x + 100 && objects[i].y <= _event.pageY && _event.pageY <= objects[i].y + 100) {
                objects[i].color = "#68FA7E";
                greencounter += 1;
                console.log(greencounter);
                points += 10;
                objects[i].dx = objects[i].dx / 1.25;
                objects[i].dy = objects[i].dy / 1.25;
            }
            else if ((darkObjects[i].x - 60 < _event.pageX) && (_event.pageX < darkObjects[i].x + 60) && (darkObjects[i].y - 60 < _event.pageY) && (_event.pageY < darkObjects[i].y + 60)) {
                for (let e = 0; e < objects.length; e++) {
                    darkObjects[i].color = "#DF0101";
                    objects[e].dx = objects[e].dx * 1.25;
                    objects[e].dy = objects[e].dy * 1.25;
                }
                points -= 15;
            }
        }
        let div = document.getElementById("zusammenfassung");
        div.style.fontSize = "3em";
        div.innerText = "";
        div.innerText += "Punkte: ";
        div.innerText += " ";
        div.innerText += points;
        div.style.margin = "2%";
        if (points < -50) {
            window.clearTimeout(timeoutToken);
            Abschlussaufgabe.crc2.fillStyle = "#FF0000";
            Abschlussaufgabe.crc2.fillRect(0, 0, 1200, 800);
            Abschlussaufgabe.crc2.fillStyle = "black";
            Abschlussaufgabe.crc2.font = "40px Verdana";
            Abschlussaufgabe.crc2.fillText("You failed!", 300, 250);
            Abschlussaufgabe.crc2.font = "30px Verdana";
            Abschlussaufgabe.crc2.fillText("Lade die Seite neu und versuch's nochmal!", 100, 300);
        }
        if (greencounter == objects.length) {
            window.clearTimeout(timeoutToken);
            Abschlussaufgabe.crc2.clearRect(0, 0, 800, 600);
            Abschlussaufgabe.crc2.fillStyle = "#68FA7E";
            Abschlussaufgabe.crc2.fillRect(0, 0, 1200, 800);
            Abschlussaufgabe.crc2.fillStyle = "black";
            Abschlussaufgabe.crc2.font = "40px Verdana";
            Abschlussaufgabe.crc2.fillText("Congrats, Champ!", 200, 250);
            imgData = Abschlussaufgabe.crc2.getImageData(0, 0, 800, 600);
            //Schneeflocken
            for (let i = 0; i < 300; i++) {
                confetti[i] = new Abschlussaufgabe.ConfettiInfo(Math.random() * 800, Math.random() * 600, "hsl(" + Math.random() * 360 + ", 100%, 50%)");
            }
            animateConfetti();
        }
    }
    function animateConfetti() {
        Abschlussaufgabe.crc2.putImageData(imgData, 0, 0); //Hintergrund neu aufbauen
        //Schneeflocken
        for (let i = 0; i < confetti.length; i++) {
            confetti[i].update();
        }
        window.setTimeout(animateConfetti, 20);
        //animate wird alle 15 ms wiederholt
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
        for (let i = 0; i < darkObjects.length; i++) {
            let r = darkObjects[i];
            r.update();
        }
        timeoutToken = window.setTimeout(animate, 15);
        //animate wird alle 15 ms wiederholt
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Abschluss.js.map