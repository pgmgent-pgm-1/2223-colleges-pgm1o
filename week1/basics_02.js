/*
Programming 1: Essentials
Week: 1
Date: 22-09-2022
=========================
Recap
*/

const w = 1920;
const h = 1080;
const msg1 = 'My computer screen has a dimension of ' + w + 'x' + h + '.';
console.log(msg1);
const msg2 = `My computer screen has a dimension of ${w}x${h}.`;
console.log(msg2);

// Operators (Nl.: operatore)
// operand operator
// operand1 operator operand2

// Wiskundige operatoren (Eng. arithmetic operators)
let m = 6 + 2; // Optellen (Eng. addition)
m = 3 - 4; // Aftrekken (Eng. subtraction)
m = 3 * 8; // Vermenigvuldiging (Eng. multiplication)
m = 3 / 2; // Deling (Eng. division)
m = 3 / 0; // Resulteert in de waarde Infinity
m = 3 ** 2; // Macht verheffen (Eng. exponentiation)
m = 3 % 2; // Rest van een deling (Eng. division remainder)
m++; // Incrementeren (Eng. post increment = een bij tellen bij de vorige waarde van een variabele)
m = m + 1;
m--; // Decrementeren (Eng. post decrement = een aftrekken bij de vorige waarde van een variabele)
m = m - 1;
m = -4;
m = -m; // Unaire negatie
m = '3';
m = +m; // Unaire plus
m = false;
m = +m;
console.log(m);

// Toewijzings operatoren (Eng. assignment operators)
let x = 6;
let y = -4;
let z = x; // Toekennen (Eng. Assignment)
z += y; // Addition assignment
z = z + y;
z -= x; // Substraction assignment
z = z - y;
z *= x; // Multiplication assignment
z = z * x;
z /= x; // Division assignment
z = z / x;
z **= -y;
z = z ** y;
z = 17;
z %= x;
console.log(z);

z = x = y;
z += true;
z += false;
z = 'Philippe';
z += true;
z = 'Hello';
z += ' World';
z = 4;
z *= 'b'; // NaN = Not a Number
console.log(z);

// Logische operatoren (Eng. Logical Operators)
x = true;
y = false;
z = x && y; // AND operator (beide operanden moeten true zijn om als resultaat true te krijgen)
console.log(z);
z = x || y; // OR operator (een van de operanden moet true zijn om als resultaat true te krijgen)
z = !y; // NOT operator (inverse van de boolean waarde)
console.log(z);

z = y && 'PGM';
z = 'PGM' && false;
z = 'PGM' && true;
z = true && 'PGM';
z = x && !y && x == 3;
console.log(z);

// Vergelijkings operatoren (Eng. comparison operators)
x = 3;
y = 6;
z = 3;
let v;
v = x == z; // gelijk aan
v = x > y; // groter dan
v = x < y; // kleiner dan
v = x >= y; // groter of gelijk aan
v = x <= y; // kleiner of gelijk aan
v = x != z; // verschillend van
z = '3';
v = x !== z;
v = x === z;
console.log(v);

// Built-in Math class
const PI = Math.PI;
console.log(PI);
z = 12.6;
v = Math.ceil(z);
v = Math.floor(z);
v = Math.round(z);
z = 12.4;
v = Math.round(z);
v = Math.random(); // Random value between 0 ... 1
v = Math.ceil(Math.random() * 100);
console.log(v);

// Built-in Date class
let date = Date.now();
date = new Date();
const clock = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
console.log(clock);