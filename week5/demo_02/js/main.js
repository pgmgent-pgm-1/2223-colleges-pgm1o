(() => {
  const app = {
    init() {
      this.maxSize = 100;
      this.minSize = 0;
      this.currentSize = this.minSize;
      this.direction = 1;

      this.cacheElements();
      this.animatePanel();
    },
    cacheElements() {
      this.$container = document.querySelector('.container');
      this.$panel = document.querySelector('.panel');
    },
    animatePanel() {
      setInterval(() => {
        this.$panel.style.backgroundColor = `hsl(${Math.round(Math.random()*360)}, 50%, 50%)`;
        this.$panel.style.borderColor = `hsl(${Math.round(Math.random()*360)}, 50%, 50%)`;

        const v = this.currentSize + 1 * this.direction;

        if (this.minSize <= v && v <= this.maxSize) {
          this.currentSize += 1 * this.direction;
        } else {
          this.direction *= -1;
        }
        this.$panel.style.transform = `scale(${this.currentSize / (this.maxSize - this.minSize) })`;
      }, 20);
    }
  }
  app.init();
})();