/*
Maak een bestand function_random_number_with_parameters.js aan in de reeds aangemaakt folder week-2.

    Schrijf een functie genaamd generateRandomNumber dat:
        1 argument bevat: ondergrens van het te genereren random getal
        1 argument bevat: bovengrens van het te genereren random getal
        gebruik maakt van return om de een random gegenereerd getal te retourneren op basis van de argumenten
    Roep deze functie 2 keer aan, steeds met een andere waarde voor de argumenten

    Voorbeeld:

    generateRandomNumber(20, 30); // 26
    generateRandomNumber(5, 20); // 16

#
*/
function generateRandomNumber(x, y) {
  let v = Math.round(x + Math.random()*(y - x));
  return v;
}
let v = generateRandomNumber(20, 30); // 26
console.log(v);
v = generateRandomNumber(5, 20); // 16
console.log(v);