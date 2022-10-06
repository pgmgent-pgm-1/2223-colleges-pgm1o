/*
Schrijf een JavaScript programma waarin student informatie wordt beschreven d.m.v. een object initalizer

(opens new window). Een student bevat:

    familienaam (string)
    voornaam (string)
    geslachtscode (number)
    geboortedatum (number t.o.v. 1970)
    cursussen (array van objecten)
        cursus (object)
            naam (string)
            docenten (array van string objecten)

Print alle eigenschappen naar de console om het volgende resultaat te genereren:

======================================================
|                STUDENT INFORMATION                 |
======================================================
PERSONAL
======================================================
Name: Olivier Pieters
Gender: Male
Day of birth: Fri Dec 12 1975
======================================================
COURSES
======================================================
Course: Computer Systems
Lecturers: Thibault Fouquaert, Lennart Dubois
------------------------------------------------
Course: Web Design
Lecturers: Mathieu Spillebeen
------------------------------------------------
Course: Programming
Lecturers: Thibault Fouquaert, Philippe De Pauw - Waterschoot
======================================================

Stappenplan:

    Maak een bestand student_information.js aan in de reeds aangemaakt folder week-3.
    Schrijf een functie genaamd generateStringForStudent dat:
        1 argument bevat: het student object
        geeft de student informatie terug als string
    Schrijf een functie genaamd generateStringForGender dat:
        1 argument bevat: de genderCode (number)
        geeft leesbare formaat terug op basis van genderCode, bijv. 2 geeft Gender: Female
    Schrijf een functie genaamd generateStringForCourses dat:
        1 argument bevat: de courses (array)
        geeft leesbare formaat terug van de cursussen
    Schrijf een functie genaamd generateStringForLecturers dat:
        1 argument bevat: de lecturers (array)
        geeft leesbare formaat terug van de docenten
*/
const student = {
  lastName: 'Van Boven',
  firstName: 'James',
  genderCode: 1,
  dayOfBirth: 1039691532000,
  courses : [
    {
      name: 'Computer Systems',
      lecturers: [
        'Claire Geeraerts',
        'Adriaan Glibert',
      ],
    },
    {
      name: 'Web Design',
      lecturers: [
        'Wachem Huyge',
        'Evelien Rutsaert',
        'Mathieu Spillebeen',
      ],
    },
    {
      name: 'Programming 1',
      lecturers: [
        'Philippe De Pauw - Waterschoot',
        'Michel Vanderpoorten',
        'Jannes Lambrecht',
      ],
    },
  ]
};

function generateStringForGender(genderCode) {
  switch (genderCode) {
    case 0: return 'Not Known';
    case 1: return 'Male';
    case 2: return 'Female';
    case 9: return 'Not Specified';
  }
}

function generateStringForCourses(courses) {
  let output = ''
  for (let i = 0; i < courses.length; i++) {
    output += `
    Course: ${courses[i].name}
    Lecturers: ${generateStringForLecturers(courses[i].lecturers)}
    ------------------------------------------------    
    `;
  }
  return output;
}

function generateStringForLecturers(lecturers) {
  let output = '';
  for (let elem of lecturers) {
    output += `${elem}, `;
  }
  return output;
}

let output = `
======================================================
|                STUDENT INFORMATION                 |
======================================================
PERSONAL
======================================================
Name: ${student.firstName} ${student.lastName}
Gender: ${generateStringForGender(student.genderCode)}
Day of birth: ${new Date(student.dayOfBirth).toDateString()}
======================================================
COURSES
======================================================
${generateStringForCourses(student.courses)}
======================================================
`;
console.log(output);