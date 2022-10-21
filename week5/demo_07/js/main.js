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
      this.$btnHamburger = document.querySelector('.btn__hamburger');
      this.$offcanvasNav = document.querySelector('.offcanvas__nav');

      this.$btnHamburger.addEventListener('click', () => {
        this.$offcanvasNav.classList.toggle('isopen');
      });
    },
    generateUI() {
      console.log('3. Generate User Interface!');
    },
    generateKeyElement(key) {
    }
  };
  app.init();
})();