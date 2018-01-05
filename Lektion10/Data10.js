/*
Aufgabe: Lektion10
Name: Alina Maaß
Matrikel: 256216
Datum: 05.01.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe10;
(function (Aufgabe10) {
    Aufgabe10.posten = [
        { art: "Baumart", name: "Nordmanntanne", preis: 20.00 },
        { art: "Baumart", name: "Fichte", preis: 18.00 },
        { art: "Baumart", name: "Kiefer", preis: 15.00 },
        { art: "Halter", name: "Standard-Halterung", preis: 29.99 },
        { art: "Halter", name: "Premium-Halterung", preis: 59.99 },
        { art: "Halter", name: "Deluxe-Halterung in Sternenform", preis: 89.99 },
        { art: "Beleuchtung", name: "Lichterkette Standard", preis: 32.44 },
        { art: "Beleuchtung", name: "Lichterkette LED", preis: 39.99 },
        { art: "Beleuchtung", name: "Lichterkette mit Kerzen", preis: 14.95 },
        { art: "Deko", name: "Kugel, bunt mit Glitter", preis: 2.65 },
        { art: "Deko", name: "Kugel, rot", preis: 1.99 },
        { art: "Deko", name: "Kugel, blau", preis: 1.99 },
        { art: "Deko", name: "Kugel, silber", preis: 2.65 },
        { art: "Deko", name: "Kugel, gold", preis: 2.65 },
        { art: "Deko", name: "Glocken-Anhänger, klein", preis: 1.35 },
        { art: "Deko", name: "Glocken-Anhänger, groß", preis: 2.65 },
        { art: "Deko", name: "Stern-Anhänger, klein", preis: 1.35 },
        { art: "Deko", name: "Stern-Anhänger, groß", preis: 2.65 },
        { art: "Lieferung", name: "Standard-Lieferung", preis: 0.0 },
        { art: "Lieferung", name: "Express-Lieferung", preis: 4.99 },
    ];
    Aufgabe10.b = [];
    for (var i = 0; i < Aufgabe10.posten.length; i++) {
        if (Aufgabe10.posten[i].art == "Beleuchtung") {
            var temp = [Aufgabe10.posten[i].name, Aufgabe10.posten[i].preis];
            Aufgabe10.b.push(temp);
        }
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Data10.js.map