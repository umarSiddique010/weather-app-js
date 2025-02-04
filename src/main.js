import UtilityMethods from './UtilityMethods.js';
import Header from './Header.js';
import InputHandler from './InputHandler.js';
import RenderWeather from './RenderWeather.js';
import SunImg from './assets/sun-rise-rain.png';
import gsap from 'gsap';

document.addEventListener('DOMContentLoaded', () => {
  // creating a h1 to for app title

  UtilityMethods.createElement(
    'h1',
    UtilityMethods.rootElement,
    'app-title',
    'Weather App'
  );

  // making a instance and initiating header
  const header = new Header();
  header.initHeader();

  // creating a RenderWeather instance and passed to  InputHandler so that input InputHandler can take the method to render UI
  const renderWeather = new RenderWeather();

  new InputHandler(renderWeather);

  // initiating movingCursor function that is defined below

  movingCursor();
});

// creating a function to move an weather sunrise image along with cursor

function movingCursor() {
  const cursor = UtilityMethods.createElement(
    'img',
    UtilityMethods.rootElement,
    'cursor',
    null
  );

  cursor.src = SunImg;
  cursor.alt = 'sun image as cursor';

  window.addEventListener('mousemove', (e) => {
    gsap.to('.cursor', {
      x: e.x,
      y: e.y,
      duration: 1.1,
      ease: 'slow(0.7,0.7,false)',
    });
  });
}
