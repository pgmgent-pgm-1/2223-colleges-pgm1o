/*
Welke getallen tussen x en y zijn zowel deelbaar door 3 als 5? Maak een for lus om te itereren tussen 1 en een opgegeven aantal. Ga na of het getal binnen een interatie deelbaar is door 3. Indien dit het geval is, schrijf dan bitter op het scherm. Ga vervolgens na of het getal deelbaar is door 5, zoja schrijf dan sweet. Indien het niet deelbaar is door 3 en door 5, zet dan gewoon het huidige getal uit de iteratie op het scherm.
*/
function doBitterSweet(from, to) {
  let str = '';
  for (let v = from; v <= to ; v++) {
    if (v % 3 === 0) {
      if (v % 5 === 0) {
        str += 'bittersweet';
      } else {
        str += 'bitter';
      }
    } else if (v % 5 === 0) {
      str += 'sweet';
    } else {
      str += v;
    }
    str += `\n`;
  }
  console.log(str);
}
doBitterSweet(1, 2345);