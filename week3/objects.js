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
console.log(v.toFixed(5));
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

const paragraph = 'The quick brown fox jumps over the lazy dog';
const l = paragraph.length;
let result = '';
for (let i = 0; i < l; i++) {
  result = paragraph.charAt(i) + result;
}
console.log(result);

// Basic loops
str = '';
for (let j = 0; j < 1000; j++) {
  str += j + '\t';
}
//console.log(str);

str = '';
for (let j = 1000; j >= 0; j--) {
  str += j + '\t';
}
//console.log(str);

// Zoek naar een woord in een string
let searchTerm = 'Fox';
const position = paragraph.toLowerCase().indexOf(searchTerm.toLowerCase());
if (position === -1) {
  console.log(`No results for search string ${searchTerm}.`);
} else {
  console.log(`We han an occurence for search string ${searchTerm} at index ${position}.`);
}

const PI = Math.PI;
console.log(PI.toFixed(4));
const angleDegrees = 45;
const angleRadians = ((2*PI) / 360) * angleDegrees;
console.log(angleRadians);
const vSin = Math.sin(angleRadians);
console.log(vSin);

// Create a new Object with Object Literals
const cat = {
  age: 2,
  amountOfLegs: 4,
  race: 'Fergal',
  gender: 'male',
  lives: 7,
  eat: (n) => {
    if (n > 300) {
      console.log('Beugh');
    } else {
      console.log('Mjammie');
    }
  },
  jump(h) {
    if (this.lives - 1 < 0){
      console.log('You are Dead');
    }
    else if (h > 10) {
      this.lives--;
      console.log(`${this.lives} lives left`);
    } else {
      console.log('Nothing broken');
    }
  },
};
cat.eat(400);
cat.jump(1);
cat.jump(20);
cat.jump(20);
cat.jump(20);
cat.jump(20);
cat.jump(20);
cat.jump(20);
cat.jump(20);
cat.jump(20);

// Describe a new Car via object literal
const car = {
  'brand': 'Hyundai',
  'amountOfFuel': 20,
  isAutomatic: false,
  engine: {
    cylinders: 6,
    hoursePower: 305,
  },
  toString() {
    return `${this.brand}`;
  },
  tune() {
    this.engine.cylinders++;
    this.hoursePower = 305 + (this.engine.cylinders - 7) * 20;
  }
};
console.log(car.toString());
car.engine.cylinders = 7;
console.log(car);
car.tune();
console.log(car);
car.tune();
car.tune();
car.tune();
car.tune();
car.tune();
car.tune();
console.log(car);

const car1 = car;
car1.color = 'gray';
console.log(car);