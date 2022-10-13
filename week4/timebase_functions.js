/*
Programming 1: Essentials
Week: 4
Date: 13-10-2022
=========================
Time based Functions
*/
function sayHello() {
  console.log('Hello');
}
sayHello();

// Bepaalde actie uitstellen voor x aaantal milliseconden
setTimeout(sayHello, 2000);

function saySomething(msg) {
  return `I will say: ${msg}`;
}
setTimeout((msg) => {
  const message = saySomething(msg);
  console.log(message);
}, 2000, 'I am your Father');

// Code itererend uitvoeren na een bepaald interval
setInterval(sayHello, 1000);
setInterval((msg) => {
  const message = saySomething(msg);
  console.log(message);
}, 1000);

// Make a ticker
let seconds = 0;
setInterval(() => {
  console.log(`${seconds}s`);
  seconds++;
}, 1000);