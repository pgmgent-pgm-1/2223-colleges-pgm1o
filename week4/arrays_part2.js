/*
Programming 1: Essentials
Week: 4
Date: 13-10-2022
=========================
Arrays Part 2
*/

// Join function => returns a string
const os = [
  'macOS',
  'Windows',
  'Linux',
];
const osStr = os.join(' | ');
console.log(osStr);

// Reverse function => returns a reversed array of the original
const arr1 = ['one', 'two', 'three'];
const arr1Reversed = arr1.reverse();
console.log(arr1Reversed);

// Sort function
const arr2 = ['Jan', 'Dec', 'Jun', 'Aug'];
arr2.sort();
console.log(arr2);

const arr3 = [1, 3, 40, 100000, 21];
arr3.sort();
console.log(arr3);

arr3.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
  if (a == b) return 0;
});
console.log(arr3);

const arr4 = [
  'Philippe',
  'Mieke',
  'James',
  'Abdellah',
];
arr4.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  if (a == b) return 0;
});
console.log(arr4);

// Find function => returns the first value that contains the search string
const arr5 = ['pollebel', 'lepollo', 'pollo', 'polshoogte', 'ik', 'jij', 'samen'];
let searchStr = 'ij';
const findedValue = arr5.find((elem) => {
  return elem.indexOf(searchStr) !== -1;
});
console.log(findedValue);

// Filter function => returns all occurences that conatins the search string
searchStr = 'lo';
const findedValues = arr5.filter((elem) => {
  return elem.indexOf(searchStr) !== -1;
});
console.log(findedValues);

const students = [
  {
    id: 13467,
    fullName: 'Mia De Pauw', 
    earnings: 3000,
  },
  {
    id: 17904,
    fullName: 'Luk Palentier', 
    earnings: 4236,
  },
  {
    id: 11245,
    fullName: 'Ismail Kutlu', 
    earnings: 3245,
  },
];
students.sort((student1, student2) => {
  if (student1.fullName > student2.fullName) return 1;
  if (student1.fullName < student2.fullName) return -1;
  return 0;
});
console.log(students);
students.sort((student1, student2) => {
  if (student1.earnings > student2.earnings) return -1;
  if (student1.earnings < student2.earnings) return 1;
  return 0;
});
console.log(students);
const filteredStudents = students.filter((student) => {
  return student.earnings > 3200;
});
console.log(filteredStudents);

const words = ['HTML', 'CSS', 'JavaScript', 'React', 'PHP', 'MySQL', 'Bootstrap', 'TailwindCSS'];
const filteredWords = words.filter(word => word.length > 7);
console.log(filteredWords);