const concerts = [
  {
    id: 'a5a9dfae-dc7e-4d35-911e-632096b71617',
    bandName: 'Heideroosjes',
    from: 1660862100000,
    to: 1660865700000,
    place: 'Dance Hall',
    thumbnail: 'https://assets.pukkelpop.be/images/band-detail/814fa8121c9e-heideroosjes.jpg',
    genre: 'Rock, Punk, Alternative',
    biography: 'Na dertig jaar punkrocken zijn Heideroosjes nog altijd niet verwelkt. Het trio uit Nederlands Limburg was al een paar keer gestopt, maar in 2020 verscheen ineens het nieuwe nummer ‘2020, De Tering!’. En daarna kwam plots de ep ‘Infocalyps’. Die klinkt volgens muziekblad Oor “fel, direct en ergens toch aaibaar”. Vintage Heideroosjes, dus. Klaar om ‘tering tyfus takketrut’ mee te brullen?',
  },
  {
    id: '4f4ab5fe-3802-4f43-a098-dc953e0e0213',
    bandName: 'STIKSTOF',
    from: 1660856100000,
    to: 1660859700000,
    place: 'Dance Hall',
    thumbnail: 'https://assets.pukkelpop.be/images/band-detail/410290078538-stikstof.jpg',
    genre: 'Hiphop',
    biography: 'Verwacht niets minder dan pure chaos wanneer de Brusseleirs van STIKSTOF het podium beklimmen. Het collectief met onder andere Zwangere Guy nam op hun laatste twe albums, ‘Familie Boven Alles’ en \'Moeras\', geen enkel blad voor de mond. Eerlijke verhalen van de straat met een loeiharde beat en gruwelijk veel flair. Doe je t-shirt uit en kom lekker mee moshen, ket.',
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
      this.$concertsList = document.querySelector('.concerts__list');
    },
    generateUI() {
      console.log('3. Generate User Interface!');
      this.$concertsList.innerHTML = this.generateHtmlForConcerts(concerts);
      // Add listeners to all listitems under de unordered list with class name .concerts__list
      const $concerts = this.$concertsList.querySelectorAll('.concert');
      $concerts.forEach(($elem) => {
        $elem.addEventListener('click', (ev) => {
          console.log(ev);
        });
      });
    },
    generateHtmlForConcerts(concerts) {
      let tmpStr = '';
      tmpStr += concerts.map((concert => `
        <li class="concert" data-id="${concert.id}">
          ${concert.bandName}
          <span>${this.getTimeFromCurrentTimeMillis(concert.from)} - ${this.getTimeFromCurrentTimeMillis(concert.to)}</span>
        </li>
      `)).join('');
      return tmpStr;
    },
    getTimeFromCurrentTimeMillis(millis) {
      const date = new Date(millis);
      return date.toTimeString().split(' ')[0].substring(0, 5);
    }
  };
  app.init();
})();