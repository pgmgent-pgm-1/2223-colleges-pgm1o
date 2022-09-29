/*
Maak een bestand function_say_blah.js aan in de reeds aangemaakt folder week-2. In deze functie loggen we de volgende conversatie naar het output scherm:

    Schrijf een functie genaamd sayBlah dat onderstaande conversatie naar de console logt.
    Roep deze functie 1 keer aan

Zack: Check it out, all about planets this month.

Leonard: That’s an atom.

Zack: Agree to disagree. That’s what I love about science, there’s no one right answer.

Leonard: So, you and Zack again, huh?

Penny: Yeah, yeah, me and Zack again.
*/
function sayBlah() {
  let message = '';
  message += 'Zack: Check it out, all about planets this month.\n';
  message += 'Leonard: That’s an atom.\n';
  message += 'Zack: Agree to disagree. That’s what I love about science, there’s no one right answer.\n';
  message += 'Leonard: So, you and Zack again, huh?\n';
  message += 'Penny: Yeah, yeah, me and Zack again.';
  console.log(message);
}
sayBlah();