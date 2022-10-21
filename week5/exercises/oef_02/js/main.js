/*
In deze webpagina willen we de BMI berekenen door inputs van de gebruiker via prompt() methode uit het window object. Eerst wordt de lengte opgevraagd gevolgd door het gewicht. Het resultaat wordt getoond via alert() methode uit het window object.

Tip

    Met window.alert() kunnen we tekst weergeven via een dialoogcenster.
    Schrijf een functie calculateBMI() om de BMI te berekenen.
    Schrijf een functie bmiToString(bmi) om op basis van de BMI-waarde een tekst terug te geven volgens de volgende vergelijkingen:
        Als BMI kleiner dan 18.5 geef dan de tekst ondergewicht terug.
        Als BMI groter dan 25 geef dan de tekst overgewicht terug.
        Als BMI groter of gelijk aan 18.5 en kleiner of gelijk aan 25 geef dan de tekst een gezond gewicht terug.
        */
const height = window.prompt('Define your height (m)');
const weight = window.prompt('Define your weight (kg)');

function calculeBMI(h, w) {
  return (w / h ** 2).toFixed(1);
}

function bmiToString(bmi) {
  let output = `Your BMI is ${bmi}. `;
  if (bmi < 18.5) {
    output += 'Ondergewicht.';
  } else if (bmi <= 25) {
    output += 'Gezond.';
  } else if (bmi <= 30) {
    output += 'Overgewicht.';
  } else {
    output += 'Zwaarlijvig.';
  }
  return output;
}

const bmi = calculeBMI(height, weight);
alert(bmiToString(bmi));