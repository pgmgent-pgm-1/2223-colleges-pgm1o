/*
Programming 1: Essentials
Week: 3
Date: 06-10-2022
=========================
Recap Objects
*/

// Object initializers = Literal Object
let person = {
  firstName: 'Philippe',
  lastName: 'De Pauw',
  age: 32,
  eMail: 'philippe.depauw@arteveldehs.be',
  isMarried: false,
  children: [
    'Linus',
    'Lester'
  ],
  height: 1.72,
  socials: {
    linkedin: 'https://www.linkedin.com/in/philippe-de-pauw/',
    instagram: 'https://www.instagram.com/programmeren.ahs/'
  },
  sleep() {
    console.log(`${this.firstName} is sleeping`);
  },
  running() {
    return `${this.lastName} is running fast like forrest gump`;
  }
};
// Call the function sleep
person.sleep();
// Call the property isMarried
const m = person.isMarried;
console.log(m);
// Change my married state
person.isMarried = !person.isMarried;
console.log(person.isMarried);
person.isMarried = false;
console.log(person.isMarried);
console.log(person.running());

// Reference to the same object
const person1 = person;
person1.firstName = 'Claudia';
console.log(person);

// Make a copy of a person
const person2 = JSON.parse(JSON.stringify(person));
person2.firstName = 'Evelien';
console.log(person);

// Other wau to maken a custom object
const person3 = new Object();
person3.firstName = 'Wachem';
person3.jump = function() {
  console.log(`${this.firstName} is jumping`);
};


