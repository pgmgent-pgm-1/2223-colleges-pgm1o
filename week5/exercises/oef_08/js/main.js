/*
In deze webpagina willen we een random afbeelding selecteren uit een lijst van afbeeldingen (absolute URLs) na het drukken op een knop. Na selectie wordt deze afbeelding toegekend als achtergrondafbeelding van het body-element.

    Gegeven

    <button class="btnRandomPicture">Random Picture</button>

Tip

    koppel een luisteraar aan een bestaand element via element.addEventListener(event, callbackFn)
    met document.body.style.backgroundImage kunnen we de achtergrondafbeelding veranderen
*/

const images = [
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fguidelive.imgix.net%2F1454105564-duke-nukem-3d.png&f=1&nofb=1&ipt=14d3d4a78c9585e5d803894b78791283dbc8fff50c263562c5d321bce5b9518e&ipo=images',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nme.com%2Fwp-content%2Fuploads%2F2020%2F05%2Fcall-of-duty-modern-warfare-credit-activision%402000x1270-1-1.jpg&f=1&nofb=1&ipt=f1b95104ecf4fc9e738966d71dd19cd8d61b8e4e5663a5d5603cbba42ce2d6bf&ipo=images',
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-V9bQXPtkQ2A%2FV9AqyuzVmcI%2FAAAAAAAAAX0%2FpcaUvtYxcpMExRksV3ZAq51fQCuzRGPUQCLcB%2Fs1600%2FGod-of-War-chains-of-olympus-psp-hd-wallpaper-2-Games-.jpg&f=1&nofb=1&ipt=d4d20cc005bff776eaf3fcf193b298fda5bffaf3e64310c068e4dd381c060aa5&ipo=images',
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
      this.$btnRandomPicture = document.querySelector('.btnRandomPicture');
      this.$btnRandomPicture.addEventListener('click', () => {
        console.log('dfghjkl');
        const selectedImage = images[Math.floor(Math.random()*images.length)];
        document.body.style.backgroundImage = `url(${selectedImage})`;
      });
    },
    generateUI() {
      console.log('3. Generate User Interface!');
    },
  };
  app.init();
})();