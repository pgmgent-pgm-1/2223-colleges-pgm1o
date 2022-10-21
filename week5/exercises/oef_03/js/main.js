/*
In deze webpagina willen we informatie uit het Graduaat Programmeren weergeven, zoals:

    een lijst van studenten die deze opleiding volgende. Een student (object) bevat:
        een voornaam
        een familienaam
        een thumbnail (relatieve URL)
        een e-mailadres

De lijst van studenten zullen we dynamisch inladen en converteren naar HTML elementen via JavaScript.

Tip

    voeg het volgende HTML-element toe: <div id="students"></div>
    met document.getElementById('students') kunnen we een specifiek element op basis van de waarde van het id-attribuut opvragen
    met element.innerHTML kunnen we HTML-tekst toekennen aan een element
    schrijf een functie convertStudentToHTMLString(student) waarme we HTML genereren op basis van een student object
*/
const students = [
  {
    firstName: 'Philippe',
    lastName: 'De Pauw - Waterschoot',
    thumbnail: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.VmDcHuVaDhTsL9wNgbqDewHaLH%26pid%3DApi&f=1&ipt=cc79f08008e196301419468483f3d15c76f477150c0dfe875ac25135e51962d5&ipo=images',
    email: 'philippe.depauw@arteveldehs.be',
  },
  {
    firstName: 'Heleen',
    lastName: 'Deschamps',
    thumbnail: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages2.persgroep.net%2Frcs%2FC2Q8CIowbhxYXWNGi_8h4tdpj5U%2Fdiocontent%2F127577624%2F_fitwidth%2F763%3FappId%3D93a17a8fd81db0de025c8abd1cca1279%26quality%3D0.8&f=1&nofb=1&ipt=8ab5bfe438b533ac90f0ef5e071a07fa81baab304c087f1bd64adabcea930c0c&ipo=images',
    email: 'heleen.deschamps@hogent.be',
  },
];

(() => {
  const app = {
    init() {
      console.log('1. Application Initialized!');
      // Variables
      // Call the function cacheElements
      this.cacheElements();
      // Call the function generateUI
      this.generateUI();
    },
    cacheElements() {
      console.log('2. Chache the elements!');
      // Get the element with id students
      this.$students = document.getElementById('students');
      console.log(this.$students);
    },
    generateUI() {
      console.log('3. Generate User Interface!');
      this.$students.innerHTML = `${this.convertStudentsToHTMLString(students)}`;
    },
    convertStudentsToHTMLString(students) {
      let tempStr = '<ul>';
      // for (let student of students) {
      //   tempStr += this.convertStudentToHTMLString(student);
      // }
      tempStr += students.map((student) => this.convertStudentToHTMLString(student)).join('');
      tempStr += '</ul>';
      return tempStr;
    },
    convertStudentToHTMLString(student) {
      return `
      <li>
        <h3>${student.firstName} ${student.lastName}</h3>
        <img src="${student.thumbnail}">
        <span>${student.email}</span>
      </li>
      `;
    },
  };
  app.init();
})();