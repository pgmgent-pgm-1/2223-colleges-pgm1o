/*
Programming 1: Essentials
Week: 3
Date: 06-10-2022
=========================
Objects Part 2
*/
const parking = {
  name: 'Reep',
  availableCapacity: 350,
  totalCapacity: 400,
  get capacity() {
    return this.totalCapacity;
  },
  set capacity(x) {
    this.totalCapacity = x;
  },
};
// Change the capacity via setter
parking.capacity = (parking.totalCapacity + 100);
// Get the capacity via getter
const c = parking.capacity;
console.log(c);
parking.blah = 'Rumoer';
delete parking.blah;
console.log(parking.blah);

// Compare objects
const person1 = {
  'firstName': 'Philippe',
};
const person2 = {
  'firstName': 'Philippe',
};
console.log(person1 == person2);
console.log(person1 === person2);
const person3 = person2;
console.log(person3 == person2);
console.log(person3 === person2);
person2.firstName = 'Evelien';
console.log(person3.firstName);