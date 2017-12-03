var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n)\nDatensatz abfragen(a)\nProgramm beenden (s)\n\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 = männlich oder 1 = weiblich) und Kommentar");
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
        var student = _input.split(',', 6);
        student[0] = parseInt(student[0]);
        student[3] = parseInt(student[3]);
        if (student[4] == "m") {
            student[4] = true;
        }
        if (student[4] == "w") {
            student[4] = false;
        }
        if (isNaN(student[0]) || isNaN(student[3]) || typeof (student[4]) != "boolean") {
            return "Hoppla! Hier ist etwas schief gelaufen, versuche es noch einmal.";
        }
        else {
            students[student[0]] = student;
            return "Deine Daten sind jetzt gespeichert.";
        }
    }
    function queryData(_matrikel) {
        return "Deine Daten sind nicht gespeichert.";
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=Lektion07.js.map