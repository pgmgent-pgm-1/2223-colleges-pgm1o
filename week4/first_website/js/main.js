// console.log('Hello World');

// console.log(document);
// const title = document.title;
// console.log(title);
// document.title = 'My Portfolio Website';

// const $container = document.querySelector('.container');
// console.log($container);
// const txt = $container.innerText;
// console.log(txt);
// $container.innerText = 'WWW';

// function tick() {
//   const date = new Date();
//   const timeStr = date.toTimeString().split(' ')[0];
//   $container.innerText = timeStr;
//   $container.style.transform = `rotate(${date.getMilliseconds()*6}deg) scale(${date.getSeconds()/6})`;
// }
// setInterval(() => {
//   tick();
// }, 1);

const $container = document.querySelector('.container');
let tempStr = '';
for (let i=0; i < 3600; i++) {
  tempStr += `<div class="bit" style="background:hsl(${i/10},50%,50%);transform: rotate(${i/10}deg)">BIT</div>`;
}
$container.innerHTML = tempStr;
$container.querySelectorAll('.bit').forEach($elem => {
  $elem.addEventListener('mousemove', (ev) => ev.target.style.transform = `rotate(0deg)`);
});