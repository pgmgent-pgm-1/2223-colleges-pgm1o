/*
Programming 1: Essentials
Week: 4
Date: 14-10-2022
=========================
Object Oriented Programming (OOP)

Constructor Functions
*/
function Person(firstName, lastName, isMarried = false) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.isMarried = isMarried;
  this.children = [];
  this.addChild = function(fullName) {
    this.children.push(fullName);
  }
  this.toString = function() {
    return `${this.firstName} ${this.lastName}`;
  }
}
const person1 = new Person('Mia', 'De Pauw');
console.log(person1);
person1.addChild(new Person('Sander', 'De Pauw'));
person1.addChild(new Person('Ikea', 'De Pauw'));
console.log(person1.toString());
console.log(person1);

const person2 = new Person('Ismail', 'Kutlu', true);
console.log(person2);

console.log(person1 == person2);

// Blog post
function Post(title, synopsis, body, author) {
  this.title = title;
  this.synopsis = synopsis;
  this.body = body;
  this.author = author;

  this.toString = function() {
    return `${this.title}`;
  }
}
const post1 = new Post('Amplitude stelt consoleversie Humankind uit \'tot nader order\'', 'Ontwikkelaars Amplitude en Aspyr hebben de consoleversie van Humankind uitgesteld. In november had de versie voor de PlayStation 4 en 5 en de Xbox One- en Series moeten verschijnen. Alle vooruitbetalingen worden waar mogelijk vergoed.', `<p class="lead">Ontwikkelaars Amplitude en Aspyr hebben de consoleversie van Humankind uitgesteld. In november had de versie voor de PlayStation 4 en 5 en de Xbox One- en Series moeten verschijnen. Alle vooruitbetalingen worden waar mogelijk vergoed.</p><p>De ontwikkelaar Amplitude en portstudio Aspyr Media <a href="https://www.games2gether.com/amplitude-studios/humankind/blogs/843-console-release-delayed-until-further-notice" rel="external noopener" target="_blank">zeggen dat ze 'onverwachte uitdagingen'</a> zijn tegengekomen bij het porten van de game. Daarom wordt de release uitgesteld tot 'nader bericht'. "We weten dat dit frustrerend zal zijn voor velen van jullie, maar we geloven dat dit uitstel het beste is, aangezien we er zeker van willen zijn dat we het beste kunnen bieden voor consolegamers", schrijft Amplitude.</p><p>In het bericht geven ze niet aan wat de problemen zijn. Er wordt ook geen termijn aangegeven voor wanneer de game dan wel moet verschijnen. "We zullen jullie updaten zodra dat kan." Gamers die het spel al via webwinkels hebben gekocht, krijgen waar mogelijk hun geld terug.</p>`, new Person('Luk', 'Skywalker'));
console.log(post1.toString());
console.log(post1);
post1.title = 'Amplitude stelt consoleversie Humankind uit \'tot nader order\'';