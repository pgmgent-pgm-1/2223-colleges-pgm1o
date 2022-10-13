/*
Met deze applicatie combineren we een bepaalde leeftijdsgroep met een bepaald product die we verkopen via een webshop.

Stappenplan:

    Maak een bestand matcher.js aan in de reeds aangemaakt folder week-3.
    Variabele (array) met de volgende elementen: '7 tot 11', '11 tot 15', '15 - 18', '18 - 23', '23 - 28', '28 - 36', '36 - 50', '50 - 64', '64 - 80'
    Variabele (array) met de volgende elementen: 'pruiken', 'nagels', 'aquariums', 'mondmaskers', 'sneakers', 'gepersonaliseerd wc-papier'
    Schrijf een functie genaamd generateMatch dat:
        de combinatie van een willekeurige leeftijdsgroep uit de leeftijdsgroep-array en een willekeurig product uit de producten-array terggeeft.
    Roep de functie enkele keren aan en log de geretourneerde waarde (string) naar de console

    Voorbeeld resultaat

    Maak een webshop voor 64 - 80 jarigen waar ze gepersonaliseerd wc-papier verkopen.
    Maak een webshop voor 23 - 28 jarigen waar ze nagels verkopen.
    Maak een webshop voor 18 - 23 jarigen waar ze aquariums verkopen.

#
*/
// Ages
const ages = ['7 tot 11', '11 tot 15', '15 - 18', '18 - 23', '23 - 28', '28 - 36', '36 - 50', '50 - 64', '64 - 80'];
// Products
const products = ['pruiken', 'nagels', 'aquariums', 'mondmaskers', 'sneakers', 'gepersonaliseerd wc-papier'];

// Define a function generateMath
function generateMatch() {
  let tmpStr = '';
  const ageGroup = ages[Math.floor(Math.random() * ages.length)];
  const product = products[Math.floor(Math.random() * products.length)];;
  tmpStr += `Maak een webshop voor ${ageGroup} jarigen waar ze ${product} verkopen.`;
  return tmpStr;
}
// Call the previous defined function
console.log(generateMatch());
console.log(generateMatch());
console.log(generateMatch());