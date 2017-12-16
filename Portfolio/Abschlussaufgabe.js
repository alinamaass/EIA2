var Semesterarbeit;
(function (Semesterarbeit) {
    var bild0 = {
        imgsrc: "img/pics/schneefuwa.jpg",
        text: "Furtwangen im Schwarzwald, November 2017",
    };
    var bild1 = {
        imgsrc: "img/pics/brend.jpg",
        text: "Brend im Schwarzwald, Dezember 2017",
    };
    var bild2 = {
        imgsrc: "img/pics/blumen.jpg",
        text: "2017",
    };
    var bild3 = {
        imgsrc: "img/pics/london4.jpg",
        text: "London, September 2017",
    };
    //Bilder im Array:
    var bilderGalerie = [bild0, bild1, bild2, bild3];
    //*****************while Schleife & Funktion "mittleren Umfangs"*****************
    //   *****************Weitere Funktion bei Fotogalerie.ts*****************
    //Ausgabe im HTML Code
    function generatePicOverview() {
        var getPic = document.getElementById("picOverview");
        var childgetPic;
        var i = 0;
        console.log("noch nicht while");
        while (i <= bilderGalerie.length) {
            console.log("while");
            childgetPic = "";
            childgetPic += "<div class='container'><img src='";
            childgetPic += bilderGalerie[i].imgsrc;
            childgetPic += "' class='pic'><div class='overlay'><div class='text'>";
            childgetPic += bilderGalerie[i].text;
            childgetPic += "</div></div></div>";
            getPic.innerHTML += childgetPic;
            i++;
        }
    }
    //   *****************Konditionale Anweisung*****************
    function showNav() {
        var node = document.getElementById("dropdown");
        var sollSichtbarWerden = true;
        console.log("Navi");
        node.style.display = "none";
        document.getElementById("onclick").addEventListener("click", function () {
            if (sollSichtbarWerden == false) {
                console.log("kein Menü");
                node.style.display = "none";
                sollSichtbarWerden = true;
            }
            else {
                console.log("Menü");
                node.style.display = "initial";
                sollSichtbarWerden = false;
            }
        });
        document.getElementById("list").addEventListener("click", function () {
            node.style.display = "none";
            sollSichtbarWerden = true;
        });
        generatePicOverview();
        /*  **********Diese Funktion war für eine Aufklappfunktion bei der Galerie, ich habe mich aber für eine extra
            Seite als Fotogalerie entschieden, weil ein OnePager so einfach zu lang werden würde und mir
            dieses Konzept besser gefiel**************
        
        
        //Bilder aufklappen
            var pics: any = document.getElementById("hiddenPics");
            var wenigerBilder : any = document.getElementById("wenigerBilder");
            var hidden : boolean = true;
        
            console.log("HiddenPics");
        
            pics.style.display = "none";
            wenigerBilder.style.display="none";
        
            document.getElementById("mehrBilder").addEventListener ("click", function(){
            
            if(hidden == false){
                console.log("verstecktPics");
                pics.style.display="none";
                hidden = true;
            }
            else{
                console.log("sichtbarPics");
                pics.style.display = "initial";
                hidden = false;
                document.getElementById("mehrBilder").style.display="none";
                wenigerBilder.style.display="initial";
            }
            });
        
            document.getElementById("wenigerBilder").addEventListener ("click", function(){
            
            if(hidden == false){
                console.log("verstecktPics");
                pics.style.display="none";
                hidden = false;
                wenigerBilder.style.display="none";
                document.getElementById("mehrBilder").style.display="initial";
            }
            });
        */
    }
    document.addEventListener('DOMContentLoaded', function () {
        showNav();
    });
})(Semesterarbeit || (Semesterarbeit = {}));
//# sourceMappingURL=Abschlussaufgabe.js.map