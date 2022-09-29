/*
Maak een bestand function_message.js aan in de reeds aangemaakt folder week-2.

    Schrijf een functie genaamd getPersonalMessage dat:
        1 argument bevat: de naam van de gebruiker
        gebruik maakt van return om de boodschap bijv. Greetings drdynscript you will be a great developer :) te retourneren
    Roep deze functie 2 keer aan, steeds met een andere waarde voor het argument

    Voorbeeld:

    getPersonalMessage("drdynscript"); // Greetings drdynscript you will be a great developer :)

#
*/
function getPersonalMessage(fullName) {
  return `Greetings ${fullName} you will be a great developer :)`;
}
let m = getPersonalMessage('Philippe De Pauw');
console.log(m);
m = getPersonalMessage('Evelien Rutsaert');
console.log(m);