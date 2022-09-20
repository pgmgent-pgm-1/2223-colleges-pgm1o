/*
Programming 1: Essentials
Week: 1
Date: 20-09-2022
=========================
Basics
Grammer
Syntax
*/
firstName = "Philippe";
greeting = "Hello World";
console.log(firstName);
console.log(greeting);

PI = 3.14;
LOADED_PARKING_DATA = "This is the data";
// Output of the variable PI to the console
console.log(PI);

// This is a single line comment

// Legal examples of varfiable names: String_fullname, _data, temp343, $money

// Declaratie (En. decleration)
var a; // Declaratie van een variabele a
console.log(a); // De variable a heeft standaard de waarde undefined
a = 6.12; // Toewijzing van de waarde 6.12 aan de variabele a
console.log(a);
var b = -14; // Declaratie + toewijzing in een instructie
console.log(b);

const c = "Linus"; // een const is een constante variable waaraan direct een waarde toegekend moet worden
// c = "Lester"; // Mag niet opnieuw toegewezen worden
let d = "Linus";
d = "Lester";
console.log(d);

/*
Datatypes built-in
==================
*/
// String
const nickName = "drdynscript";
const email = 'philippe.depauw@arteveldehs.be';
console.log(email);
console.log(nickName, email);
console.log(nickName + ' ' + email);

// Boolean
const isFemale = false;
const isLecturer = true;

/*
The four codes specified in ISO/IEC 5218 are:
  0 = Not known;
  1 = Male;
  2 = Female;
  9 = Not applicable.
*/
// Number
let gender = 0;
gender = 1;
console.log('My gender is', gender);
let height = 1.72;
console.log('The height of', nickName, 'is', height, 'm.');
console.log('The height of ' + nickName + ' is ' + height + 'm.');

// undefined
let level; // undefined is the standard value
console.log(level);

// null
let data = null;
console.log(data);
data = 'This is the database';

// Back to a string datatype
let poem = 
'Roses are red,\n\
Vilots are blue,\n\
Sugar is sweet,\n\
and so is foo.';
console.log(poem);

let quote = "I'm a programmer";
quote = 'I\'m a full-stack developer';
console.log(quote);

const rules = 'First rule\nSecond rule';
console.log(rules);

const fName = 'Philippe';
const lName = 'De Pauw - Waterschoot';
let fullName = fName + ' ' + lName;
console.log(fullName);

// Template Literal
poem = 
`Roses are red,
Vilots are blue,
Sugar is sweet,
and so is foo.`;
console.log(poem);

fullName = `My name is ${fName} ${lName}`;
console.log(fullName);

let age = 37;
const message = `My name is ${fName} ${lName}. I'm ${age} years old`;
console.log(message);