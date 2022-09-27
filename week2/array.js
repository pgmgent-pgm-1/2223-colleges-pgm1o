/*
Programming 1: Essentials
Week: 2
Date: 27-09-2022
=========================
Arrays
*/

// Define an array of fruit
const fruit = ['apple', 'orange', 'melon'];
// Get the first element of the fruit array
let elem = fruit[0];
console.log(elem);
elem = fruit[2];
console.log(elem);
fruit[2] = 'banana';
elem = fruit[2];
console.log(fruit);
// Get the length of the array
let l = fruit.length;
console.log(`The length of the fruit array is ${l}`);

// Define an array of persons
const persons = [];
persons[0] = 'Evelien';
persons[1] = 'Frederick';
persons[2] = 'Wachem';
console.log(persons);
persons[99] = 'Olivier';
console.log(persons.length);

// Define an array of cats
const cats = ['Frodo', 'Crokette', 'Korneel'];
cats[3] = 'Frikandel';
console.log(cats);
// cats.length = 0; // Empty the array of cats
console.log(cats);

// Doorlopen van alle elementen uit een array door een lus te gebruiken
l = cats.length;
for (let i = 0; i < l; i++) {
  elem = cats[i];
  console.log(`The cat on index ${i} is ${elem}`);
}

l = persons.length;
for (let i = 0; i < l; i++) {
  elem = persons[i];
  console.log(`The person in in dex ${i} is ${elem}`);
}

// Define an array of colors
const colors = [
  'Red',
  'Green',
  'Blue'
];
// Itereer doorheen de array van kleuren d.m.v. for...of
let index = 0;
for (let element of colors) {
  console.log(`The color on ${index} is ${element}`);
  index++;
}

// While loop
let isPlaying = true, nMoves = 0;
while (isPlaying) {
  if (nMoves + 1 > 999) {
    isPlaying = false;
  } else {
    nMoves++;
  }
}
console.log(`The amount of moves: ${nMoves}`);

// do / while loop
let counter = 0;
do {
  console.log(counter);
  counter++;
} while (counter <= 10);