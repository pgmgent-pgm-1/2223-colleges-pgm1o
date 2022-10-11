/*
Programming 1: Essentials
Week: 4
Date: 11-10-2022
=========================
Arrays
*/
const students = [
  'Philippe',
  'Evelien',
  'Hans',
];
console.log(students[2]);
console.log(students.length);

// Populating an array
students[3] = 'Ismail';
console.log(students);
// students[99] = 'Sarah';
// console.log(students);
students.push('Sarah');
console.log(students);
const l = students.unshift('Mia', 'Nancy');
console.log(students, l);
const arr = students.splice(2, 0, 'Kurt', 'Alex');
console.log(arr, students);
const a = [1, 2, 3];
const b = [4, 5, 6];
let c = a.concat(b);
console.log(c);
c = [...a, ...b];
console.log(c);

// Remove elements from an array
let e = students.pop();
console.log(e, students);
e = students.shift();
console.log(e, students);
e = students.splice(2, 2);
console.log(e, students);

// Iterate through an array
for (let i = 0; i < students.length; i++) {
  const currentStudent = students[i];
  console.log(`${i}: ${currentStudent}`);
}

let j = 0;
for (let element of students) {
  const currentStudent = element;
  console.log(`${j}: ${currentStudent}`);
  j++;
}

for (let [k, currentStudent] of students.entries()) {
  console.log(`${k}: ${currentStudent}`);
}

students.forEach(function(currentStudent, k) {
  console.log(`${k}: ${currentStudent}`);
});

students.forEach((currentStudent, k) => {
  console.log(`${k}: ${currentStudent}`);
});

const colors = [
  '#FF0000',
  '#00FF00',
  '#0000FF',
  '#FF6600',
  '#00FF66',
  '#6600FF',
  '#66FF00',
];

for (let currentColor of colors) {
  console.log(currentColor);
}

colors.forEach((currentColor, index) => {
  console.log(`${index}: ${currentColor}`);
});

// Array in een array = multidimensionale array
const cars = [
  ['Volvo', 23, 12],
  ['Fiat', 12, 45],
  ['Audi', 32, 12],
];

cars.forEach((car, l) => {
  console.log(car[1]);
});

for (let i = 0; i < cars.length; i++) {
  if (i == 1) {
    console.log(cars[i][1]);
  }
}

const arr2 = [];
for (let r = 0; r < 8; r++) {
  arr2[r] = [];
  for (let c = 0; c < 4; c++) {
    arr2[r][c] = `[${r}, ${c}]`;
  }
}
console.log(arr2);

// map() function in array object
// const transformedStudents = students.map(function(currentStudent) {
//   return currentStudent + ' De Pauw';
// });
const transformedStudents = students.map((currentStudent) => currentStudent + ' De Pauw');
console.log(transformedStudents);

const newStudentsArray = [];

for(let i = 0; i < students.length; i++) {
  newStudentsArray.push(students[i] + ' De Pauw');
}
console.log(newStudentsArray);

/*
 Business & Communication (CGR)
Applied Information Technology (DDW)
Creative Design & Development (OPR)
Computer Programming (TDP)
Workplace Learning (IDC) 
*/
const programmeLines = [
  {
    name: 'Business & Communication',
    lecturer: {
      initials: 'CGR',
      firstName: 'Claire',
      lastName: 'Geraerts',
    }
  },
  {
    name: 'Applied Information Technology',
    lecturer: {
      initials: 'DDW',
      firstName: 'Dieter',
      lastName: 'Deweirdt',
    }
  },
  {
    name: 'Creative Design & Development',
    lecturer: {
      initials: 'OPR',
      firstName: 'Olivier',
      lastName: 'Parent',
    }
  },
  {
    name: 'Computer Programming',
    lecturer: {
      initials: 'TDP',
      firstName: 'Tim',
      lastName: 'De Paepe',
    }
  },
  {
    name: 'Workplace Learning',
    lecturer: {
      initials: 'NMF',
      firstName: 'Nicky',
      lastName: 'Malfliet',
    }
  },
];

let output = '';
const transformedProgrammeLines = programmeLines.map((programmeLine) => {
  return `${programmeLine.name} (${programmeLine.lecturer.initials})`;
});
output += transformedProgrammeLines.join('\n');
console.log(output);

const values = [
  10,
  5,
  16,
  7,
];
const transformedValues = values.map((v) => v*v);
console.log(transformedValues);

const sports = [
  'speel',
  'voet',
  'hand',
  'zwerk',
  'dodge',
  'basket'
];
const transformedSports = sports.map((sport) => `${sport}bal`);
console.log(transformedSports.join('\n'));
