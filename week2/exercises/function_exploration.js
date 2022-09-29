/*
In deze applicatie leer basis functies te omschrijven.

Maak een bestand function_exploration.js aan in de reeds aangemaakt folder week-2.

Definieer de functie checkAge() zoals:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    console.log("Did your parents allow you?");
  }
}

    Spreek deze functie aan
    Werkt deze functie nog als we het else statement verwijderen en de inhoud ervan na het if statement plaatsen?
    Herschrijf de functie door if…else te vervangen door een ternary operator
    Definieer een nieuwe functie min(a, b) die de kleinste waarde uit twee waarden teruggeeft(=retourneert). Roep deze functie een paar keer aan.
    Definieer een nieuwe functie pow(x, n) die het getal x tot de macht n verheft en deze uitkomst retourneert. Roep deze functie een paar keer aan.
*/
function checkAge(age) {
  return (age > 18) ? true : 'Did your parents allow you?';
}
// Aanspreken van de checkAge functie
const m = checkAge(16);
console.log(m);

// min(a, b)
function min(a, b) {
  if (a > b) {
    return b;
  }
  return a;
}
let v = min(3, 6);
console.log(v);
v = min(6, -3);
console.log(v);