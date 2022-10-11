/*
Programming 1: Essentials
Week: 4
Date: 11-10-2022
=========================
Programme Lines
*/
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

let output = `
========================================================================
                           Programme Lines
========================================================================
`;
const transformedProgrammeLines = programmeLines.map((programmeLine) => {
  return `${programmeLine.name} (${programmeLine.lecturer.initials})`;
});
output += programmeLines.map((programmeLine, index) => `${programmeLine.name} (${programmeLine.lecturer.initials})${index < programmeLines.length - 1 ? '\n------------------------------------------------------------------------' : ''}`).join('\n');
output += `
========================================================================
`;
console.log(output);