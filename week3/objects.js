/*
Programming 1: Essentials
Week: 3
Date: 04-10-2022
=========================
Objects
*/

// Describe a person
// Literal object
const person = {
  hairColor: 'brown',
  height: 1.72,
  weight: 65,
  dob: new Date(1982, 12, 12).getTime(),
  jump: function() {
    console.log('Jump around');
  },
  fight: () => {
    console.log('Finish Him');
  },
  eat() {
    console.log('Eating Cookies');
  }
};
console.log(person);
person.firstName = 'Philippe';
console.log(person);
const h = person.height;
console.log(h);
const hColor = person['hairColor'];
console.log(hColor);
person['race car'] = 'Red Bull';
console.log(person);
person['666'] = 'The devil';
console.log(person['666']);

// Methods = Functions = Actions
person.jump();
person.jump();
person.fight();
person.eat();

// Loop doorheen de eigenschappen van een object m.b.v. een lus
for (let prop in person) {
  console.log(`${prop} with value ${person[prop]}`);
}

// Date object
const date = new Date(person.dob);
console.log(date.toDateString());

// Number object
let v = Number.MIN_VALUE;
console.log(v);
v = Number.MAX_VALUE;
console.log(v);
v = 32.567865432345675432;
v = Number(v);
v = v.toFixed(2);
console.log(v);

// String object
let str = '    john    ';
str = str.trim();
console.log(str);
str = str.charAt(3);
console.log(str);

str = 'We Like Graphics Love Programming Make Cool Shit/Apps';
const words = str.split(' ');
for (let i = 0; i < words.length; i++) {
  console.log(`${words[i]}`);
}