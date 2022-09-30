/*
Programming 1: Essentials
Week: 2
Date: 29-09-2022
=========================
Functions
*/
// Definieert een eenvoudige functie met de naam sayHello met als doel is te schrijven in terminal
function sayHello() {
  console.log(`Greetings Earthlings.`);
}
// Spreek de functie sayHello aan (Eng. to call a function)
sayHello();
sayHello();
sayHello();
sayHello();

// Definieert een eenvoudige functie met de naam showMessage met als doel een boodschap te schrijven in de terminal die we meegeven aan dewe functie
function showMessage(message) {
  console.log(`Your message: ${message}.`);
}
showMessage('Hello team members');
showMessage('Start Game');
showMessage('I Love Judo');
showMessage(); // undefined is the value of message

// Definieert een functie met de naam addition met als doel de som te maken van twee getallen
function addition(a, b) {
  const sum = a + b;
  console.log(`The sum of ${a} and ${b} is ${sum}`);
}
addition(2, -4);
addition(8, 4);

// Definieert een functie met de naam multiply met als doel twee getallen met elkaar te vermenigvuldigen
function multiply(a, b) {
  const mul = a * b;
  return mul;
}
let m = multiply(3, 4);
console.log(m);
m = multiply(-3, -6);
console.log(m);
m = multiply(4.8, -2.7);
console.log(m);

// Swap two persons
function swap(person) {
  person = 'John Doe';
  return person;
}
const personA = 'Jane Doe';
const personB = swap(personA);
console.log(personA, personB);

// Pass by Value
function doubleSalary(salary) {
  salary *= 2;
  return salary;
}
let s = 4000;
console.log(`Your salary is ${s}`);
s = doubleSalary(s);
console.log(`Your salary is ${s}`);

// Pass by Reference
function doubleSalaryForPerson(person) {
  person.salary *= 2;
}
const person = {
  firstName: 'Philippe',
  salary: 5300
};
console.log(`Your salary is ${person.salary}`);
doubleSalaryForPerson(person);
console.log(`Your salary is ${person.salary}`);

function sr(v) {
  return v * v;
}

// Anonieme functie = function expressions
const sq = function(v) {
  return v * v;
};
console.log(sq(3));

// Arrow functions
const sa = (v) => {
  return v * v;
};
console.log(sa(3));

// Addition of two values with arrow functions
const add = (a, b) => {
  return a + b;
}
let v = add(6, 3);
console.log(v);

const addVeryShort = (a, b) => a + b;
v = add(6, 3);
console.log(v);

// Rest parameter in functions
function multiply(factor, ...args) {
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    result += args[i] * factor;
  }
  return result;
}
console.log(multiply(3, 1, 2, 3, 4, 5, 6));

// IIFE
(() => {
  var pol = 'pol';
  console.log('Started!');
})();
console.log(pol);