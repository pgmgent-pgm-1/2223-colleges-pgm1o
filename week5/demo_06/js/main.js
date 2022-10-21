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
      this.$keyContainer = document.querySelector('.key__container');
      document.addEventListener('keypress', (ev) => {
        this.generateKeyElement(ev.key);
      });
    },
    generateUI() {
      console.log('3. Generate User Interface!');
    },
    generateKeyElement(key) {
      const w = this.$keyContainer.clientWidth;
      const h = this.$keyContainer.clientHeight;
      const x = Math.round(Math.random() * w);
      const y = Math.round(Math.random() * h);

      const $key = document.createElement('div');
      $key.classList.add('key');
      $key.innerText = key;
      $key.style.transform = `translateX(${x}px) translateY(${y}px)`;
      this.$keyContainer.appendChild($key);
    }
  };
  app.init();
})();