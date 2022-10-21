(() => {
  const app = {
    init() {
      console.log('1. Application Initialized!');
      // Variables
      this.direction = 1;
      // Call the function cacheElements
      this.cacheElements();
      // Call the function generateUI
      this.generateUI();
    },
    cacheElements() {
      console.log('2. Chache the elements!');
      this.$btnLaunch = document.querySelector('.btn__launch');
      this.$btnLaunch.addEventListener('click', () => {
        const angle = (this.direction === 1) ? 180 : 0;
        document.body.style.transform = `rotate(${angle}deg)`;
        this.direction *= -1;
      });
      document.body.addEventListener('mousemove', (ev) => {
        const w = document.body.clientWidth;
        const x = ev.clientX;
        const hue = 360 * x / w;
        const h = document.body.clientHeight;
        const y = ev.clientY;
        const sat = 100 * y / h;
        document.body.style.backgroundColor = `hsl(${hue}, ${sat}%, 50%)`;
        this.$btnLaunch.style.backgroundColor = `hsl(${hue}, ${sat}%, 50%)`;
      });
    },
    generateUI() {
      console.log('3. Generate User Interface!');
    },
  };
  app.init();
})();