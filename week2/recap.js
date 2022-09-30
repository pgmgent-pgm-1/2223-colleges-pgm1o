/*
Programming 1: Essentials
Week: 2
Date: 30-09-2022
=========================
Recap
*/
function showMessage(msg) {
  console.log(msg);
}
showMessage(1);
showMessage(true);
showMessage('Greetings Earthlings');
showMessage('I\'m the real slim shady');

function toDigits(pt, n, ch = '0') {
  pt = String(pt);
  while (pt.length < n) {
    pt = ch + pt;
  }
  return pt;
}

function getTime() {
  const date = new Date();
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();
  return `${toDigits(h, 3)}:${toDigits(m, 2)}:${toDigits(s, 2)}`;
}
let time = getTime();
console.log(time);

const generateGrid = (nRows, nCols, ch = '*') => {
  let str = '';
  for (let r = 0; r < nRows; r++) {
    for (let c = 0; c < nCols; c++) {
      str += `${ch}`;
    }
    str += '\n';
  }
  return str;
};
console.log(generateGrid(4, 5, '🥇'));
console.log(generateGrid(6, 9, '🥋'));
console.log(generateGrid(2, 2, '🥊'));

const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const getDayOfWeek = () => {
  const date = new Date();
  const d = date.getDay();
  return daysOfWeek[d];
};
console.log(getDayOfWeek());