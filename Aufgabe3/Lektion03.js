/*
Aufgabe: Lektion03
Name: Alina Maaß
Matrikel: 256216
Datum: 03.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.
*/
var Lektion03;
(function (Lektion03) {
    window.addEventListener("load", init);
    let crc2;
    let snowflakeX = [];
    let snowflakeY = [];
    let cloudX = [];
    let cloudY = [];
    let skifahrerX = [];
    let skifahrerY = [];
    let imgData;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        //Himmelfarbe
        crc2.fillStyle = "#CBEDFC";
        crc2.fillRect(0, 0, 800, 600);
        //Sonne
        crc2.beginPath();
        crc2.arc(300, 120, 50, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEE87B";
        crc2.fill();
        //Berge + Füllfarbe
        crc2.beginPath();
        crc2.moveTo(0, 200);
        crc2.lineTo(150, 0);
        crc2.lineTo(300, 150);
        crc2.lineTo(400, 0);
        crc2.lineTo(480, 85);
        crc2.lineTo(550, 0);
        crc2.lineTo(700, 150);
        crc2.lineTo(750, 0);
        crc2.lineTo(1500, 0);
        crc2.lineTo(1500, 700);
        crc2.lineTo(0, 700);
        crc2.stroke();
        crc2.fillStyle = "#C9C8C8";
        crc2.fill();
        //Schatten Berg 1
        crc2.beginPath();
        crc2.moveTo(200, 250);
        crc2.lineTo(150, 0);
        crc2.lineTo(300, 150);
        crc2.stroke();
        crc2.fillStyle = "#EFEFEF";
        crc2.fill();
        //Schatten Berg 2
        crc2.beginPath();
        crc2.moveTo(420, 250);
        crc2.lineTo(400, 0);
        crc2.lineTo(480, 85);
        crc2.stroke();
        crc2.fillStyle = "#EFEFEF";
        crc2.fill();
        //Schatten Berg 3
        crc2.beginPath();
        crc2.moveTo(560, 60);
        crc2.lineTo(550, 0);
        crc2.lineTo(700, 150);
        crc2.stroke();
        crc2.fillStyle = "#EFEFEF";
        crc2.fill();
        //Diagonale+Füllfarbe
        crc2.beginPath();
        crc2.moveTo(0, 250);
        crc2.lineTo(700, 0);
        crc2.lineTo(800, 0);
        crc2.lineTo(800, 600);
        crc2.lineTo(0, 600);
        crc2.stroke();
        crc2.fillStyle = "#F4FFFF";
        crc2.fill();
        //Lift
        crc2.beginPath();
        crc2.moveTo(0, 300);
        crc2.lineTo(680, 0);
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(170, 225);
        crc2.lineTo(170, 325);
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(340, 150);
        crc2.lineTo(340, 240);
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(510, 75);
        crc2.lineTo(510, 150);
        crc2.stroke();
        //Ski Kurve
        crc2.beginPath();
        crc2.bezierCurveTo(750, 0, 850, 25, 750, 50);
        crc2.bezierCurveTo(750, 50, 500, 75, 740, 150);
        crc2.bezierCurveTo(740, 150, 800, 180, 600, 220);
        crc2.bezierCurveTo(600, 220, 0, 310, 500, 400);
        crc2.bezierCurveTo(500, 400, 800, 450, 200, 600);
        crc2.stroke();
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
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Schleifen für Animation
        //random Schneeflocken
        for (let i = 0; i < 5000; i++) {
            snowflakeX[i] = 0 + Math.random() * 800;
            snowflakeY[i] = 0 + Math.random() * 600;
        }
        //random Wolken
        for (let i = 0; i < 3; i++) {
            cloudX[i] = 0 + Math.random() * 800;
            cloudY[i] = 50;
        }
        for (let i = 0; i < 1; i++) {
            skifahrerX[i] = 800;
            skifahrerY[i] = 50;
        }
        animate();
    }
    //Bäume
    function drawTree(_x, _y) {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 25, _y + 60);
        crc2.lineTo(_x - 25, _y + 60);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#0B8702";
        crc2.fill();
        crc2.fillStyle = "#514400";
        crc2.fillRect(_x - 5, _y + 60, 10, 10);
    }
    //Schneeflocken
    function drawSnowflake(_x, _y) {
        crc2.beginPath();
        crc2.arc(_x, _y, 1.5, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }
    //Wolken malen
    function drawCloud(_x, _y) {
        crc2.beginPath();
        crc2.arc(_x, _y, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "#D7FDFD";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 40, _y, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "#D7FDFD";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 20, _y - 10, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "#D7FDFD";
        crc2.fill();
    }
    //Skifahrer malen
    function drawSkifahrer(_x, _y) {
        //Kopf
        crc2.beginPath();
        crc2.arc(_x, _y, 8, 0, 2 * Math.PI);
        crc2.fillStyle = "#000000";
        crc2.fill();
        //Körper
        crc2.beginPath();
        crc2.moveTo(_x + 2, _y + 5);
        crc2.lineTo(_x + 12, _y + 35);
        crc2.lineTo(_x + 8, _y + 35);
        crc2.lineTo(_x - 2, _y + 5);
        crc2.fillStyle = "#000000";
        crc2.fill();
        //Bein links
        crc2.beginPath();
        crc2.moveTo(_x + 12, _y + 35);
        crc2.lineTo(_x - 5, _y + 70);
        crc2.lineTo(_x - 8, _y + 70);
        crc2.lineTo(_x + 8, _y + 35);
        crc2.fillStyle = "#000000";
        crc2.fill();
        //Bein rechts
        crc2.beginPath();
        crc2.moveTo(_x + 12, _y + 35);
        crc2.lineTo(_x + 6, _y + 75);
        crc2.lineTo(_x + 3, _y + 75);
        crc2.lineTo(_x + 8, _y + 35);
        crc2.fillStyle = "#000000";
        crc2.fill();
        //Ski links
        crc2.beginPath();
        crc2.moveTo(_x + 34, _y + 58);
        crc2.lineTo(_x - 30, _y + 78);
        crc2.lineTo(_x - 30, _y + 75);
        crc2.lineTo(_x + 34, _y + 55);
        crc2.fillStyle = "#000000";
        crc2.fill();
        //Ski rechts
        crc2.beginPath();
        crc2.moveTo(_x + 40, _y + 60);
        crc2.lineTo(_x - 24, _y + 83);
        crc2.lineTo(_x - 24, _y + 80);
        crc2.lineTo(_x + 40, _y + 57);
        crc2.fillStyle = "#000000";
        crc2.fill();
    }
    //Animation:
    function animate() {
        console.log("animate");
        //Hintergrund neu aufbauen:
        crc2.putImageData(imgData, 0, 0);
        //Schneeflocken
        for (let i = 0; i < snowflakeX.length; i++) {
            if (snowflakeY[i] > 600) {
                snowflakeY[i] = 0;
            }
            snowflakeY[i] += Math.random();
            drawSnowflake(snowflakeX[i], snowflakeY[i]);
        }
        //Wolken vorbeiziehen lassen
        for (let i = 0; i < cloudX.length; i++) {
            if (cloudX[i] > 800) {
                cloudX[i] = 0;
            }
            cloudX[i] += 0.2;
            drawCloud(cloudX[i], cloudY[i]);
        }
        //Skifahrer
        for (let i = 0; i < skifahrerX.length; i++) {
            if (skifahrerX[i] < 0 || skifahrerY[i] > 600) {
                skifahrerX[i] = 800;
                skifahrerY[i] = 50;
            }
            skifahrerX[i] -= 1.6;
            skifahrerY[i] += 0.6;
            drawSkifahrer(skifahrerX[i], skifahrerY[i]);
        }
        window.setTimeout(animate, 10);
        //animate wird alle 10 ms wiederholt
    }
})(Lektion03 || (Lektion03 = {}));
//# sourceMappingURL=Lektion03.js.map