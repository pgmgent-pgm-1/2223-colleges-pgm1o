/*
Bereken de BMI op basis van lengte en gewicht. Er is sprake van ondergewicht als je BMI minder dan of gelijk is aan 18.5. Het aanbevolen gewicht vinden we tussen de waarden groter dan 18,5 en kleiner dan 25. Je hebt overgewicht bij waardes tussen 25,0 en 30 (inclusief). Je bent zwaarlijvig bij een BMI van meer dan 30. Log het bericht op basis van de bovenstaande beredenering (bijv. Je hebt het aanbevolen gewicht) naar de console.

Maak een bestand bmi_indicator.js aan in de reeds aangemaakt folder week-2.

Jouw bmi is 21. Je hebt het aanbevolen gewicht.
Jouw bmi is 30. Je het overgewicht.
Jouw bmi is 30.1. Je bent zwaarlijvig.
Jouw bmi is 25. Je hebt overgewicht.
Jouw bmi is 18.5. Je hebt ondergewicht.
*/
let height = 1.72;
let weight = 64;
let bmi = (weight / height**2).toFixed(2);
let message = '';
if (bmi <= 18.5) {
  message += `Jouw bmi is ${bmi}. Je hebt ondergewicht.`;
} else if (bmi > 18.5 && bmi < 25) {
  message += `Jouw bmi is ${bmi}. Je hebt het aanbevolen gewicht.`;
} else if (bmi >= 25 && bmi <= 30) {
  message += `Jouw bmi is ${bmi}. Je hebt overgewicht.`;
} else {
  message += `Jouw bmi is ${bmi}. Je bent zwaarlijvig.`;
}
console.log(message);