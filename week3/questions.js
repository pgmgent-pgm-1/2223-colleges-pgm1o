const windDirection = 'E'; // N, E, S, W
let msg = 'The wind comes from direction ';
switch (windDirection) {
  case 'N': msg += 'North'; break;
  case 'E': msg += 'East'; break;
  case 'S': msg += 'South'; break;
  case 'W': default: msg += 'West'; break;
}
console.log (msg);

// Unicode
const avatar = '😀'; // U+1F600
let code = avatar.codePointAt(0);
console.log(code); // 128512
let hStr = code.toString(16);
console.log(hStr); // 1f600
code = avatar.codePointAt(1);
console.log(code); // 56832
hStr = '\u{1f600}';
console.log(hStr);

// Do some silly stuff with unicode
let output = '';
for (let k = 128512; k < 129000; k++) {
  output += String.fromCodePoint(k);
}
console.log(output);

// Array of objects
const lecturer = {
  courses: [
    {
      name: 'Programming 1',
      code: 'PGM-1',
      lecturers: [
        'Philippe De Pauw - Waterschoot',
        'Michael Vanderpoorten',
        'Jannes Lambrecht',
      ],
    },
    {
      name: 'Web Design',
      code: 'WEBDES',
      lecturers: [
        'Wachem Huyge',
        'Evelien Rutsaert',
        'Mathieu Spillebeen',
      ],
    }
  ]
}
console.log(lecturer);