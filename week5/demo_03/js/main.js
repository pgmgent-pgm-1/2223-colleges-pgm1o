(() => {
  const app = {
    init() {
      console.log('1. Application Initialized!');
      // Call the function cacheElements
      this.cacheElements();
      // Call the function generateUI
      this.generateUI();
    },
    cacheElements() {
      console.log('2. Chache the elements!');
      // Get element with class name waves
      this.$waves = document.querySelector('.waves');
      console.log(this.$waves);
      // Add attriobute to waves element
      this.$waves.setAttribute('data-id', '123456789');
      // Remove the previous added attribute
      this.$waves.removeAttribute('data-id');
      // Get element with class name todos
      this.$todos = document.querySelector('.todos');
      console.log(this.$todos);
      this.$lastTodo = this.$todos.querySelector(':first-child');
      console.log(this.$lastTodo);
      this.$lastTodo.classList.add('important');
      this.$lastTodo.classList.add('sla');
      this.$lastTodo.classList.remove('sla');
    },
    generateUI() {
      console.log('3. Generate User Interface!');
      let outputStr = '', angle = 0, saturation = 0;
      for (let i = 0; i < 200; i++) {
        angle = Math.round((360 / 200) * i);
        saturation = Math.round((360 / 200) * i);
        outputStr += `<div class="wave" style="transform:rotate(${angle}deg); background-color: hsl(${saturation},50%,50%)">WAVE</div>`;
      }
      this.$waves.innerHTML = outputStr;
    },
  };
  app.init();
})();