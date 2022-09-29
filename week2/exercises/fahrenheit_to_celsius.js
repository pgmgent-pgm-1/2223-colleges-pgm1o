/*
Met deze applicatie kunnen we temperaturen uitgedrukt in Fahrenheit converteren naar temperaturen uitgedrukt in Celsius.

    Maak een bestand fahrenheit_to_celsius.js aan in de reeds aangemaakt folder week-2.
    Schrijf een functie genaamd convertFahrenheitToCelsius dat:
        1 argument bevat: de temperatuur uitgedrukt in Fahrenheit
        converteer de temperatuur van Fahrenheit (°F) naar Celsius (°C) volgens de formule Celsius = (fahrenheit - 32) / 1.8
        maak gebruik van return om het aantal graden Celsius te retourneren
    schrijf de geretourneerde waarde naar de console zoals: “Temperature of 71°F equals to 21.6°C!”
    Roep deze functie 2 keer aan, steeds met een andere waarde voor het argument

    Voorbeeld resultaat

    Temperature of 71°F equals to 21.6°C!
    Temperature of 0°F equals to -17.8°C!
*/
function convertFahrenheitToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) / 1.8;
  return celsius.toFixed(1);
}
let f = 71;
let c = convertFahrenheitToCelsius(f);
console.log(`Temperature of ${f}°F equals to ${c}°C!`);
f = 0;
c = convertFahrenheitToCelsius(f);
console.log(`Temperature of ${f}°F equals to ${c}°C!`);