/*
De leeftijd van een hond ken je in mensenjaren. Hoe oud is een hond in hondenjaren? Eén mensenjaar komt overeen met zeven hondenjaren.

    Maak een bestand calculate_dog_years.js aan in de reeds aangemaakt folder week-2.
    Schrijf een functie genaamd calculateDogYears dat:
        1 argument bevat: de leeftijd van de hond in mensenjaren
        bereken de leeftijd van de hond in hondenjaren
    output de geretourneerde waarde van calculateDogYears naar de console zoals: “Your dog is 35 years old in dog years!”
    Roep deze functie 2 keer aan, steeds met een andere waarde voor het argument
    Uitbreiding:
        voeg een extra argument toe om de conversiefactor van mens- naar hondenjaren te bepalen tijdens de aanroep van de functie
*/
function calculateDogYears(humanYears) {
  const dogYears = humanYears * 7;
  return `Your dog is ${dogYears} years old in dog years!`;
}
let msg = calculateDogYears(5);
console.log(msg);
msg = calculateDogYears(12);
console.log(msg);