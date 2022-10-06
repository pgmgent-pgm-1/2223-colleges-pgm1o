/*
Deze applicatie keert een numerieke waarde om, bijv.: 12345 wordt 54321.

    Maak een bestand reverse_number.js aan in de reeds aangemaakt folder week-3.
    Schrijf een functie genaamd reverse dat:
        1 argument bevat: het getal die we willen omkeren
        de functie geeft het omgekeerde getal terug
    Roep deze functie 2 keer aan, steeds met een andere waarde voor het argument.
    Log het resultaat van elke aanroep naar de console.

Tip

    String.length

(opens new window)
String.charAt()
*/
function reverse(value) {
  let str = '';
  value = String(value);
  for (let i=0; i< value.length; i++) {
    str = value.charAt(i) + str;
  }
  const reversedValue = str;
  return reversedValue;
}
let msg = reverse(12345);
console.log(`The reversed value is ${msg}`);
msg = reverse(9876);
console.log(`The reversed value is ${msg}`);
msg = reverse(`pollepel`);
console.log(`The reversed value is ${msg}`);