// alert('Welcome to my homepage!');

// console.log(window);
// console.log(document);

// Select the first container by selector
const $container = document.querySelector('.container');
console.log($container);
const $row = $container.querySelector('.row');
console.log($row);
let $p = $row.querySelector('p');
console.log($p);
$p = document.querySelector('.container > .row > .col-12 > p');
console.log($p);

// Get the header by id
let $header = document.getElementById('header');
console.log($header);
$header = document.querySelector('#header');
console.log($header);
const $divs = document.getElementsByTagName('div');
console.log($divs);
const $osLis = document.querySelectorAll('.os > li');
console.log($osLis);
console.log($osLis.length);
$osLis.forEach(($elem) => {
  // console.log($elem);
  const txt = $elem.innerText;
  // $elem.innerText = `Os: ${txt}`;
  $elem.innerHTML = `<a href="#">${txt}</a>`;
  $elem.style.backgroundColor = '#000000';
  $elem.style.color = '#ffffff';
});

$strip = document.querySelector('.strip');
console.log($strip.textContent);

// Array of tags / words
const tags = [
  'HTML',
  'CSS',
  'JavaScript',
  'PHP',
  'Python',
  'React',
  'GraphQL',
  'API',
  'MySQL',
  'PostrgreSQL',
  'CMS',
  'Wordpress',
];
const $tagCloud = document.querySelector('.tagcloud');
let tempStr = '', tag = null, x = 0, y = 0, fS = 16;
for (let i = 0; i < tags.length; i++) {
  tag = tags[i];
  x = Math.random()*$tagCloud.clientWidth;
  y = Math.random()*$tagCloud.clientHeight;
  fS = 16 + (tag.length ** 2);
  tempStr += `<div class="tag" style="transform:translate(${x}px, ${y}px);font-size: ${fS}px">${tag}</div>`;
}
$tagCloud.innerHTML = tempStr;