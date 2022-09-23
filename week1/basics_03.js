/*
Programming 1: Essentials
Week: 1
Date: 23-09-2022
=========================
Recap
*/
let height = 1.72;
const firstName = 'Philippe';
let isMarried = false;
console.log(typeof height);
console.log(typeof firstName);
console.log(typeof isMarried);

// Make a new instance of the Date class
let now = new Date();
console.log(typeof now);
console.log(now instanceof Date);

// DataType conversie
let msg = 'My age is ' + 37;
console.log(msg);
msg = '89' - 6;
console.log(msg);
msg = 'ellow' - 15;
console.log(msg); // NaN: Not a Number
let v;
v = parseInt('-101', 10); // Decimaal
console.log(v);
v = parseInt('101', 8); // Octaal
console.log(v);
v = parseInt('101', 2); // Binair
console.log(v);
v = parseInt('0x00fe66', 16); // Hexadecimal
console.log(v);
v = parseInt('3.62', 10); // Decimal
console.log(v);
v = parseInt('3.62', 2); // NaN
console.log(v);
v = parseFloat('3.62', 10); // Decimal
console.log(v);
v = parseFloat('3.62 is the length of my headphone', 10); // Decimal
console.log(v);

// Block statement = groeperen van verzameling van instructies die in sequentie worden uitgevoerd
{
  const lastName = 'De Pauw';
  const nickName = 'drdynscript'
  let age = 37;
}
// console.log(age); // age is not defined because of the local scope in previous block statement
let p = 3;
{
  let p = -4;
}
console.log(p);

// Conditionele statements
// if ... else
if (false) {
  console.log('It\'s true');
} else {
  console.log('It\'s NOT true');
}
let isALady = false;
if (isALady) {
  console.log('You are a Lady.');
} else {
  console.log('You are a Boy.');
}
let gender = 6;
if (gender == 0) {
  console.log('Gender is not known!');
} else if (gender == 1) {
  console.log('You are a male!');
} else if (gender == 2) {
  console.log('You are a female!');
} else {
  console.log('Gender is not specified');
}

// Ternary operator
let msg3 = (isALady) ? 'You are a Lady.' : 'You are a Boy.';
console.log(msg3);

// switch / case
switch (gender) {
  case 0: console.log('Gender is not known!'); break;
  case 1: console.log('You are a male!'); break;
  case 2: console.log('You are a female!'); break;
  case 9: default: console.log('Gender is not specified!'); break;
}