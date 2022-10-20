(() => {
  const app = {
    init() {
      console.log('1. Application Initialized!');
      // Variables
      this.nClicks = 0;
      // Call the function cacheElements
      this.cacheElements();
      // Call the function generateUI
      this.generateUI();
    },
    cacheElements() {
      console.log('2. Chache the elements!');
      // Get the element with class name btn__add
      this.$btnAdd = document.querySelector('.btn__add');
      console.log(this.$btnAdd);
      this.$btnAdd.innerText = 'Launch';
      // Register listener on the button with class name btn__add
      this.$btnAdd.addEventListener('click', () => {
        this.nClicks++;
        this.$counter.innerText = `Clicked ${this.nClicks} time(s).`;
        const saturation = Math.round(Math.random() * 360);
        this.$counter.style.backgroundColor = `hsl(${saturation}, 50%, 20%)`;
        this.$counter.style.color = `hsl(${saturation}, 50%, 80%)`;
      });
      // Get the element with class name counter
      this.$counter = document.querySelector('.counter');
      console.log(this.$counter);
    },
    generateUI() {
      console.log('3. Generate User Interface!');
    },
  };
  app.init();
})();