const $c = document.querySelector('.container');

let str = '';
for (let i = 0; i < 100; i++) {
 str += `<div style="transform:scale(${i/10}) rotate(${360/i}deg)"><h1>Heading ${i}</h1><p>Minions ipsum gelatooo uuuhhh para tú bappleees para tú tank yuuu! Gelatooo po kass. Bappleees poopayee tulaliloo pepete belloo! Wiiiii. Baboiii hana dul sae bappleees pepete hana dul sae po kass po kass baboiii. Belloo! hahaha baboiii poopayee hahaha belloo! La bodaaa bee do bee do bee do chasy. Pepete poopayee tank yuuu! Butt la bodaaa wiiiii aaaaaah ti aamoo! Poulet tikka masala. Tatata bala tu daa ti aamoo! Poulet tikka masala poopayee wiiiii bappleees hana dul sae ti aamoo! Jeje belloo!</p></div>`;
}
$c.innerHTML = str;