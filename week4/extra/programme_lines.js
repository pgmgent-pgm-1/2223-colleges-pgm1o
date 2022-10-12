/*
Programming 1: Essentials
Week: 4
Date: 11-10-2022
=========================
Programme Lines
*/

// Import Libraries
const chalk = require('chalk');

// Custom
const programmeLines = [
  {
    name: 'Business & Communication',
    lecturer: {
      initials: 'CGR',
      firstName: 'Claire',
      lastName: 'Geraerts',
    },
    color: 'blue',
  },
  {
    name: 'Applied Information Technology',
    lecturer: {
      initials: 'DDW',
      firstName: 'Dieter',
      lastName: 'Deweirdt',
    },
    color: 'green',
  },
  {
    name: 'Creative Design & Development',
    lecturer: {
      initials: 'OPR',
      firstName: 'Olivier',
      lastName: 'Parent',
    },
    color: 'orange',
  },
  {
    name: 'Computer Programming',
    lecturer: {
      initials: 'TDP',
      firstName: 'Tim',
      lastName: 'De Paepe',
    },
    color: 'purple',
  },
  {
    name: 'Workplace Learning',
    lecturer: {
      initials: 'NMF',
      firstName: 'Nicky',
      lastName: 'Malfliet',
    },
    color: 'red',
  },
];

function printTextInChalkColor(text, color, isBackground = true) {
  switch (color) {
    case 'blue': return isBackground ? chalk.bgBlue(text) : chalk.blue(text);
    case 'orange': return isBackground ? chalk.bgYellow(text) : chalk.yellow(text);
    case 'green': return isBackground ? chalk.bgGreen(text) : chalk.green(text);
    case 'purple': return isBackground ? chalk.bgMagenta(text) : chalk.magenta(text);
    case 'red': return isBackground ? chalk.bgRed(text) : chalk.red(text);
  }
}

let output = `
========================================================================
                           Programme Lines
========================================================================
`;
const transformedProgrammeLines = programmeLines.map((programmeLine) => {
  return `${programmeLine.name} (${programmeLine.lecturer.initials})`;
});
output += programmeLines.map((programmeLine, index) => `${printTextInChalkColor(' ', programmeLine.color)} ${printTextInChalkColor(programmeLine.name, programmeLine.color, false)} (${programmeLine.lecturer.initials})${index < programmeLines.length - 1 ? '\n------------------------------------------------------------------------' : ''}`).join('\n');
output += `
========================================================================
`;
console.log(output);