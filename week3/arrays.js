/*
Programming 1: Essentials
Week: 3
Date: 07-10-2022
=========================
Arrays
*/

const persons = [
  'Mieke',
  'Abdellah',
  'Stef',
  'James',
];
let person = persons[2];
console.log(person);
persons[2] = 'Noah';
person = persons[2];
console.log(person);
let l = persons.length;
console.log(l);
persons[4] = 'Olivier';
console.log(persons);
// Add a new element to the array
persons.push('Nathalie');
console.log(persons);
person = {
  firstName: 'Mia',
  lastName: 'Van Tielen',
  children: [
    'Karen',
    'Kristel',
  ]
};
persons.push(person);
console.log(persons);
persons[persons.length - 1].children.push('Luk', 'Pol');
console.log(persons);
persons.unshift('Ismail');
console.log(persons);

const numbers = [1, 2, 3, 4, 5, 6];
numbers.splice(1, 0, 9, 8, 7, 6);
console.log(numbers);
numbers.splice(1, 4);
console.log(numbers);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3);
const arr4 = [...arr1, ...arr2];
console.log(arr4);

const fruit = ['Apples', 'Melons'];
fruit.pop();
console.log(fruit);
fruit.push('Oranges');
fruit.shift();
console.log(fruit);

const cars = ['VW', 'Lada', 'Fiat'];
const carsFavo = cars.slice(1, 3);
console.log(carsFavo);
console.log(cars);

const os = ['Linux', 'macOS', 'Amiga OS', 'Windows'];
const osStr = os.join(' | ');
console.log(osStr);

const specialNumber = [2, 4, 9];
const verySpecialNumbers = specialNumber.map((elem) => {
  return Math.pow(elem, 2);
});
console.log(verySpecialNumbers);

const students = [
  {
    name: 'Mieke'
  },
  {
    name: 'Abdellah'
  }
];
const output = students.map((elem) => elem.name).join('\n');
console.log(output);