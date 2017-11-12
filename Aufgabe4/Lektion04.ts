/*
Aufgabe: Lektion04
Name: Alina Maaß
Matrikel: 256216
Datum: 03.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Lektion04 {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;

    interface SkifahrerInfo {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;
    }

    let snowflakeX: number[] = [];
    let snowflakeY: number[] = [];
    let cloudX: number[] = [];
    let cloudY: number[] = [];
    let skifahrer: SkifahrerInfo[] = [];

    let imgData: ImageData;


    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
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
        for (let i: number = 0; i < 4; i++) {
            drawTree(500 + i * 60, 280);
        }
        //random Bäume
        for (let i: number = 0; i < 10; i++) {
            let x: number = Math.random() * 250 + 100;
            let y: number = Math.random() * 90 + 400;
            drawTree(x, y);
        }


        //Hintergrund speichern
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);


        //Schleifen für Animation
        //random Schneeflocken
        for (let i: number = 0; i < 5000; i++) {
            snowflakeX[i] = 0 + Math.random() * 800;
            snowflakeY[i] = 0 + Math.random() * 600;
        }

        //random Wolken
        for (let i: number = 0; i < 3; i++) {
            cloudX[i] = 0 + Math.random() * 800;
            cloudY[i] = 50;
        }

        for (let i: number = 0; i < 7; i++) {
            skifahrer[i] = {
                x: 0,
                y: 150,
                dx: Math.random() * 1 - 1.5,
                dy: Math.random() * 1 - 1.5,
                color: "hsl(" + Math.random() * 360 + ", 100%, 50%)"
            };


}
            animate();

        }






        //Bäume
        function drawTree(_x: number, _y: number): void {
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
        function drawSnowflake(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.arc(_x, _y, 1.5, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();
        }
        //Wolken malen
        function drawCloud(_x: number, _y: number): void {
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
        function drawMoveSkifahrer(_skifahrer: SkifahrerInfo): void {


            _skifahrer.x += _skifahrer.dx -0.5;
            _skifahrer.y += _skifahrer.dy +2; 

            crc2.fillStyle = _skifahrer.color;
            crc2.fillRect(_skifahrer.x, _skifahrer.y, 9, - 25);
            
            crc2.beginPath();
            crc2.arc(_skifahrer.x + 5, _skifahrer.y - 25, 7, 0, 2 * Math.PI);
            crc2.fillStyle = _skifahrer.color;
            crc2.fill();

            crc2.fillStyle = _skifahrer.color;
            crc2.beginPath();
            crc2.moveTo(_skifahrer.x + 20, _skifahrer.y - 4);
            crc2.lineTo(_skifahrer.x - 20, _skifahrer.y + 4);
            crc2.stroke();
            

        }

        //Animation:
        function animate(): void {
            console.log("animate");
            //Hintergrund neu aufbauen:
            crc2.putImageData(imgData, 0, 0);

            //Schneeflocken
            for (let i: number = 0; i < snowflakeX.length; i++) {
                if (snowflakeY[i] > 600) {
                    snowflakeY[i] = 0;
                }
                snowflakeY[i] += Math.random();
                drawSnowflake(snowflakeX[i], snowflakeY[i]);
            }

            //Wolken vorbeiziehen lassen
            for (let i: number = 0; i < cloudX.length; i++) {
                if (cloudX[i] > 800) {
                    cloudX[i] = 0;
                }
                cloudX[i] += 0.2;
                drawCloud(cloudX[i], cloudY[i]);
            }

            //Skifahrer
            for (let i: number = 0; i < skifahrer.length; i++) {
                
                drawMoveSkifahrer(skifahrer[i]);
                if (skifahrer[i].x < 0 || skifahrer[i].y > 600) {
                skifahrer[i].x = 800;
                skifahrer[i].y = 50;
                }
            }





            window.setTimeout(animate, 10);
            //animate wird alle 10 ms wiederholt
        }

    } 