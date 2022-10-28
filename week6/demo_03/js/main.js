(() => {
  const app = {
    init () {
      console.log('1. Application Initialized!');
      // Variables
      this.currentSlideIndex = 0;
      // Call the function cacheElements
      this.cacheElements();
      // Call the function generateUI
      this.generateUI();
    },
    cacheElements () {
      console.log('2. Chache the elements!');
      this.$imageContainer = document.querySelector('.image-container');
      this.$imageBtnPrev = document.querySelector('.image-btn-prev');
      this.$imageBtnNext = document.querySelector('.image-btn-next');

      // Register Listeners
      this.$imageBtnPrev.addEventListener('click', () => {
        this.slide(-1);
      });
      this.$imageBtnNext.addEventListener('click', () => {
        this.slide(1);
      });
    },
    generateUI () {
      console.log('3. Generate User Interface!');
      this.$imageContainer.innerHTML = this.generateHtmlForImages(images);
      
    },
    generateHtmlForImages (images) {
      return images.map((image, index) => `
      <figure class="image" data-id=${index}>
        <img src=${image.link}>
        <figcaption>${image.title}</figcaption>
      </figure>
      `).join('');
    },
    slide (direction) {
      if (this.currentSlideIndex + direction >= 0 && this.currentSlideIndex + direction < images.length) {
        this.currentSlideIndex += direction;
      } else {
        if (direction === 1) {
          this.currentSlideIndex = 0;
        } else {
          this.currentSlideIndex = images.length - 1;
        }
      }

      // Remove all active elements
      const $elements = document.querySelectorAll(`.image`);
      $elements.forEach(elem => elem.classList.remove('is--active'));

      // Find element where data-id equals currentSlideIndex
      const $element = document.querySelector(`.image[data-id="${this.currentSlideIndex}"]`);
      $element.classList.add('is--active');
    },
  };
  app.init();
})();
