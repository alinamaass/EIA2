/*
Aufgabe: Lektion05
Name: Alina Maaß
Matrikel: 256216
Datum: 17.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.
*/
var Lektion05;
(function (Lektion05) {
    window.addEventListener("load", init);
    let cloud = [];
    let snowflake = [];
    let skifahrer = [];
    let imgData;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log("Test, start init");
        Lektion05.crc2 = canvas.getContext("2d");
        console.log(Lektion05.crc2);
        //Himmelfarbe
        Lektion05.crc2.fillStyle = "#CBEDFC";
        Lektion05.crc2.fillRect(0, 0, 800, 600);
        //Sonne
        Lektion05.crc2.beginPath();
        Lektion05.crc2.arc(300, 120, 50, 0, 2 * Math.PI);
        Lektion05.crc2.stroke();
        Lektion05.crc2.fillStyle = "#FEE87B";
        Lektion05.crc2.fill();
        //Berge + Füllfarbe
        Lektion05.crc2.beginPath();
        Lektion05.crc2.moveTo(0, 200);
        Lektion05.crc2.lineTo(150, 0);
        Lektion05.crc2.lineTo(300, 150);
        Lektion05.crc2.lineTo(400, 0);
        Lektion05.crc2.lineTo(480, 85);
        Lektion05.crc2.lineTo(550, 0);
        Lektion05.crc2.lineTo(700, 150);
        Lektion05.crc2.lineTo(750, 0);
        Lektion05.crc2.lineTo(1500, 0);
        Lektion05.crc2.lineTo(1500, 700);
        Lektion05.crc2.lineTo(0, 700);
        Lektion05.crc2.stroke();
        Lektion05.crc2.fillStyle = "#C9C8C8";
        Lektion05.crc2.fill();
        //Schatten Berg 1
        Lektion05.crc2.beginPath();
        Lektion05.crc2.moveTo(200, 250);
        Lektion05.crc2.lineTo(150, 0);
        Lektion05.crc2.lineTo(300, 150);
        Lektion05.crc2.stroke();
        Lektion05.crc2.fillStyle = "#EFEFEF";
        Lektion05.crc2.fill();
        //Schatten Berg 2
        Lektion05.crc2.beginPath();
        Lektion05.crc2.moveTo(420, 250);
        Lektion05.crc2.lineTo(400, 0);
        Lektion05.crc2.lineTo(480, 85);
        Lektion05.crc2.stroke();
        Lektion05.crc2.fillStyle = "#EFEFEF";
        Lektion05.crc2.fill();
        //Schatten Berg 3
        Lektion05.crc2.beginPath();
        Lektion05.crc2.moveTo(560, 60);
        Lektion05.crc2.lineTo(550, 0);
        Lektion05.crc2.lineTo(700, 150);
        Lektion05.crc2.stroke();
        Lektion05.crc2.fillStyle = "#EFEFEF";
        Lektion05.crc2.fill();
        //Diagonale+Füllfarbe
        Lektion05.crc2.beginPath();
        Lektion05.crc2.moveTo(0, 250);
        Lektion05.crc2.lineTo(700, 0);
        Lektion05.crc2.lineTo(800, 0);
        Lektion05.crc2.lineTo(800, 600);
        Lektion05.crc2.lineTo(0, 600);
        Lektion05.crc2.stroke();
        Lektion05.crc2.fillStyle = "#F4FFFF";
        Lektion05.crc2.fill();
        //Lift
        Lektion05.crc2.beginPath();
        Lektion05.crc2.moveTo(0, 300);
        Lektion05.crc2.lineTo(680, 0);
        Lektion05.crc2.stroke();
        Lektion05.crc2.beginPath();
        Lektion05.crc2.moveTo(170, 225);
        Lektion05.crc2.lineTo(170, 325);
        Lektion05.crc2.stroke();
        Lektion05.crc2.beginPath();
        Lektion05.crc2.moveTo(340, 150);
        Lektion05.crc2.lineTo(340, 240);
        Lektion05.crc2.stroke();
        Lektion05.crc2.beginPath();
        Lektion05.crc2.moveTo(510, 75);
        Lektion05.crc2.lineTo(510, 150);
        Lektion05.crc2.stroke();
        //Ski Kurve
        Lektion05.crc2.beginPath();
        Lektion05.crc2.bezierCurveTo(750, 0, 850, 25, 750, 50);
        Lektion05.crc2.bezierCurveTo(750, 50, 500, 75, 740, 150);
        Lektion05.crc2.bezierCurveTo(740, 150, 800, 180, 600, 220);
        Lektion05.crc2.bezierCurveTo(600, 220, 0, 310, 500, 400);
        Lektion05.crc2.bezierCurveTo(500, 400, 800, 450, 200, 600);
        Lektion05.crc2.stroke();
        //Gesetzt Bäume
        for (let i = 0; i < 4; i++) {
            drawTree(500 + i * 60, 280);
        }
        //random Bäume
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * 250 + 100;
            let y = Math.random() * 90 + 400;
            drawTree(x, y);
        }
        //Hintergrund speichern
        imgData = Lektion05.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //––––––––––––––––––Schleifen für Animation–––––––––––––––––––
        //Skifahrer
        for (let i = 0; i < 20; i++) {
            skifahrer[i] = new Lektion05.SkifahrerInfo(Math.random() * 500 + 750, Math.random() * 200 - 25, Math.random() * 1.5 - 3.5, Math.random() * 1 + 1, "hsl(" + Math.random() * 360 + ", 100%, 50%)");
            console.log("for Skifahrer init");
        }
        //Schneeflocken
        for (let i = 0; i < 5000; i++) {
            snowflake[i] = new Lektion05.SnowflakeInfo(Math.random() * 800, Math.random() * 600);
            console.log("for Snowflake init");
        }
        //Wolken
        for (let i = 0; i < 5; i++) {
            cloud[i] = new Lektion05.CloudInfo(Math.random() * 800, Math.random() * 30 + 40);
            console.log("for Cloud init");
        }
        animate();
    }
    //Bäume
    function drawTree(_x, _y) {
        Lektion05.crc2.beginPath();
        Lektion05.crc2.moveTo(_x, _y);
        Lektion05.crc2.lineTo(_x + 25, _y + 60);
        Lektion05.crc2.lineTo(_x - 25, _y + 60);
        Lektion05.crc2.closePath();
        Lektion05.crc2.stroke();
        Lektion05.crc2.fillStyle = "#0B8702";
        Lektion05.crc2.fill();
        Lektion05.crc2.fillStyle = "#514400";
        Lektion05.crc2.fillRect(_x - 5, _y + 60, 10, 10);
    }
    //––––––––––––––––––––––Animation––––––––––––––––––––––
    function animate() {
        console.log("animate");
        Lektion05.crc2.putImageData(imgData, 0, 0); //Hintergrund neu aufbauen
        //Schneeflocken
        for (let i = 0; i < snowflake.length; i++) {
            snowflake[i].update();
        }
        //Wolken vorbeiziehen lassen
        for (let i = 0; i < cloud.length; i++) {
            cloud[i].update();
        }
        //Skifahrer
        for (let i = 0; i < skifahrer.length; i++) {
            skifahrer[i].update();
        }
        window.setTimeout(animate, 15);
        //animate wird alle 10 ms wiederholt
    }
})(Lektion05 || (Lektion05 = {}));
//# sourceMappingURL=Lektion05.js.map