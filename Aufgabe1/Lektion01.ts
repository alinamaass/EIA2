


window.addEventListener("load", init);
function init():void{
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    console.log(canvas);
    
    let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
    console.log(crc2);
    
    //Sonne
    crc2.beginPath();
    crc2.arc(300,120, 50, 0, 2*Math.PI);
    crc2.stroke();
    crc2.fillStyle="yellow";
    crc2.fill(); 
   
    //Himmelfarbe
    crc2.fillStyle="#CBEDFC";
    crc2.fillRect(0,0,800,600);
    
    //Sonne
    crc2.beginPath();
    crc2.arc(300,120, 50, 0, 2*Math.PI);
    crc2.stroke();
    crc2.fillStyle="#FEE87B";
    crc2.fill(); 
    
    //Berge + Füllfarbe
    crc2.beginPath();
    crc2.moveTo(0,200);
    crc2.lineTo(150,0);
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
    crc2.fillStyle="#C9C8C8";
    crc2.fill();
    
    //Schatten Berg 1
    crc2.beginPath();
    crc2.moveTo(200,250);
    crc2.lineTo(150,0);
    crc2.lineTo(300, 150);
    crc2.stroke();
    crc2.fillStyle="#EFEFEF";
    crc2.fill();
    
    //Schatten Berg 2
    crc2.beginPath();
    crc2.moveTo(420,250);
    crc2.lineTo(400,0);
    crc2.lineTo(480, 85);
    crc2.stroke();
    crc2.fillStyle="#EFEFEF";
    crc2.fill();
    
    //Schatten Berg 3
    crc2.beginPath();
    crc2.moveTo(560,60);
    crc2.lineTo(550,0);
    crc2.lineTo(700,150);
    crc2.stroke();
    crc2.fillStyle="#EFEFEF";
    crc2.fill();
    
    
    //Diagonale+Füllfarbe
    crc2.beginPath();
    crc2.moveTo(0,250);
    crc2.lineTo(700,0);
    crc2.lineTo(800,0);
    crc2.lineTo(800,600);
    crc2.lineTo(0,600);
    crc2.stroke();
    crc2.fillStyle="#F4FFFF";
    crc2.fill();
    
    //Lift
    crc2.beginPath();
    crc2.moveTo(0,350);
    crc2.lineTo(690,0);
    crc2.stroke();
    
   //Ski Kurve
    crc2.beginPath();
    crc2.bezierCurveTo(750,0,850,25, 750, 50);
    crc2.bezierCurveTo(750, 50, 500, 75, 740, 150);
    crc2.bezierCurveTo(740, 150 , 800 , 180 , 600 , 220);
    crc2.bezierCurveTo(600 , 220 , 0 , 310 , 500 , 400);
    crc2.bezierCurveTo(500 , 400 , 800 , 450 , 200 , 600);
    crc2.stroke();
    
    //Baum1
    crc2.beginPath();
    crc2.moveTo(650,400);
    crc2.lineTo(610,480);
    crc2.lineTo(690,480);
    crc2.stroke();
    crc2.fillStyle="green";
    crc2.fill();
    //Stamm1
    crc2.fillStyle="#514400";
    crc2.fillRect(645,480,10,10);
    
    //Baum2
    crc2.beginPath();
    crc2.moveTo(700,350);
    crc2.lineTo(660,430);
    crc2.lineTo(740,430);
    crc2.stroke();
    crc2.fillStyle="green";
    crc2.fill();
    //Stamm1
    crc2.fillStyle="#514400";
    crc2.fillRect(695,430,10,10);
    
    
    }