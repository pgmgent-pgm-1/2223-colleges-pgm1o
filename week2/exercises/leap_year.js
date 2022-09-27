/*
Ga na of een een bepaald jaar al dan niet een schrikkeljaar (Eng. leap year) is.

De flow om een schrikkeljaar te berekenen:

    Begin met het jaar waarvan je wilt weten of het een schrikkeljaar is. Definieer een const variabele met de naam year en bevat als waarde het jaar om na te gaan of het jaar al dan niet een schrikkeljaar is.
    Definieer een let variabele met de naam isLeapYear met false als standaardwaarde.
    Kijk of het getal door 4 te delen is (met een heel getal als uitkomst, zonder rest). Als dat niet zo is, zoals bij 1977, is het geen schrikkeljaar. Als het wel zo is, zoals 2012, lees dan verder.
    Kijk of het jaar door 100 gedeeld kan worden. Als een jaar door 4 gedeeld kan worden, maar niet door 100, is het een schrikkeljaar. Als een jaar door zowel 4 als door 100 te delen is, zoals 2000, lees dan verder.
    Kijk of het jaar door 400 gedeeld kan worden. Als een jaar door 100 gedeeld kan worden, maar niet door 400, zoals 1900, dan is het geen schrikkeljaar. Als het door beide getallen te delen is, dan is het een schrikkeljaar. Dus 2000 was inderdaad een schrikkeljaar.

Maak een bestand leap_year.js aan in de reeds aangemaakt folder week-2.
*/

const year = 2022;
let isLeapYear = false;

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      isLeapYear = true;
    }
  } else {
    isLeapYear = true;
  }
}
console.log(`The year ${year} is ${isLeapYear ? 'a leap year.' : 'is not a leap year.'}`);

if (((year % 4 === 0) && year % 100 !== 0) || (year % 400 === 0)) {
  isLeapYear = true;
}
console.log(`The year ${year} is ${isLeapYear ? 'a leap year.' : 'is not a leap year.'}`);