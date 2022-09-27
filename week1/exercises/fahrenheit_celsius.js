/*
Maak een bestand fahrenheit_celsius.js aan in de reeds aangemaakt folder week-1.

Voer de volgende omzetting uit:

    Van graad Celsius naar graad Fahrenheit.
    Van graad Fahrenheit naar graad Celsius.

Declareer twee variabelen: voor het aantal graad Celsius en voor het aantal graad Fahrenheit. Aan beide variabelen ken je een waarde toe, die je hierna kan omzetten. Log beide omzettingen naar de console.
*/
const c = 12;
const f = 56;

let c_to_f = (c * 9 / 5) + 32;
console.log(`The temperature of ${c}°C is ${c_to_f}°F`);

let f_to_c = (f - 32) / (9/5);
console.log(`The temperature of ${f}°F is ${f_to_c}°C`);