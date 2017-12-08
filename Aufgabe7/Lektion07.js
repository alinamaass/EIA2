/*
Aufgabe: Lektion07
Name: Alina Maaß
Matrikel: 256216
Datum: 01.12.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.

––––––––––> die Struktur und den Code an sich habe ich verstanden, finde aber den Fehler (ll. 66-71) nicht...
            Fehlermeldung: "Index signature of object type implicitly has an 'any' type."
*/
var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n)\nDatensatz abfragen(a)\nProgramm beenden (s)\n\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, \nName, \nVorname, \nAlter, \nGeschlecht (m oder w) und \nKommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        var input = _input.split(',');
        let student = {
            matrikel: parseInt(input[0]),
            name: input[1],
            vorname: input[2],
            alter: parseInt(input[3]),
            geschlecht: parseInt(input[4]) == 0,
            kommentar: input[5],
        };
        students.push(student);
        let geschlecht;
        if (parseInt(input[4]) == 0) {
            geschlecht = "männlich";
        }
        else {
            geschlecht = "weiblich";
        }
        return "Deine Daten wurden gespeichert.";
        /* if (isNaN(student.matrikel) || isNaN(student.alter) || typeof (student.geschlecht) != "boolean") {
             return "Hoppla! Hier ist etwas schief gelaufen, versuche es noch einmal.";
         }
         else {
             return "Deine Daten wurden gespeichert.";
         }*/
    }
    function queryData(_matrikel) {
        for (let i = 0; i < students.length; i++) {
            if (students[i].matrikel == _matrikel) {
                let geschlecht = students[i].geschlecht ? "weiblich" : "männlich";
                return "Das sind deine Daten: " + students[i].matrikel + "\nName: " + students[i].name + "\nVorname: " + students[i].vorname + "\nAlter: " + students[i].alter + "\nGeschlecht: " + geschlecht + "\nKommentar: " + students[i].kommentar;
            }
            else {
                return "Deine Daten sind nicht in der Datenbank gespeichert.";
            }
        }
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=Lektion07.js.map