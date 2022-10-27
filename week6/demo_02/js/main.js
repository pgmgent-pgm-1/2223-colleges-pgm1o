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
      this.$concertsListDanceHall = document.querySelector('.stage--dancehall .lineup-stage__list');
      this.$concertDetails = document.querySelector('.concert__details');
    },
    generateUI() {
      console.log('3. Generate User Interface!');
      this.$concertsListDanceHall.innerHTML = this.generateHtmlForConcerts(concerts);
      // Add listeners to all listitems under de unordered list with class name .concerts__list
      const $concerts = this.$concertsListDanceHall.querySelectorAll('.concert');
      $concerts.forEach(($elem) => {
        $elem.addEventListener('click', (ev) => {
          const elem = ev.currentTarget; 
          const id = elem.dataset.id;
          //Get concert where id is equal to this id
          const concert = concerts.find((concert) => concert.id === id);
          this.$concertDetails.innerHTML = this.generateHtmlForConcertDetails(concert);
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
    generateHtmlForConcertDetails(concert) {
      return `
      <header>
        <img src=${concert.thumbnail}>
      </header>
      <h3>${concert.bandName}</h3>
      <span>${this.getTimeFromCurrentTimeMillis(concert.from)} - ${this.getTimeFromCurrentTimeMillis(concert.to)}</span>
      <span>${concert.place}</span>
      <span>${concert.genre}</span>
      <p>${concert.biography}</p>
      `;
    },
    getTimeFromCurrentTimeMillis(millis) {
      const date = new Date(millis);
      return date.toTimeString().split(' ')[0].substring(0, 5);
    }
  };
  app.init();
})();