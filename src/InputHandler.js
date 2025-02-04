import WeatherAPIHandler from './WeatherAPIHandler.js';
import initAnimations from './animatingApp.js';
import UtilityMethods from './UtilityMethods.js';
export default class InputHandler {
  constructor(renderWeather) {
    this.renderWeather = renderWeather;
    this.searchCity();
  }

  // creating a function that will be passed in event handler

  async submitHandler(e) {
    // preventing form submission
    e.preventDefault();

    // getting element
    const searchInput = document.querySelector('#searchInput');
    const weatherAppContainer = document.querySelector('.weather-app');

    // getting value of the input
    const searchValue = searchInput.value.trim().toLowerCase();

    // if input value is empty show a message then return
    if (searchValue === '') {
      UtilityMethods.liveMsg('Please enter a city name');
      return;
    }
    // if everything is okay then show loading message in weather app e.i., in home element

    weatherAppContainer.innerHTML = `
    <h2 class="loading-message">Loading...</h2>
    `;

    // when page loaded render the weather of the given location

    // as api will return promise so used await
    const weatherInfo = await WeatherAPIHandler.getWeatherInfo(searchValue);

    // when promise full filled called renderWeatherInfo method to render the weather
    this.renderWeather.renderWeatherInfo(weatherInfo);

    // when elements are created once (as this app is dynamically created using javascript) call initAnimations function where gsap can get the element's selectors
    initAnimations();

    // clear the input value
    searchInput.value = '';
  }

  searchCity() {
    // getting form element so to attach submit event listener
    const searchForm = document.querySelector('.form-field');
    // attaching submit event listener to the form
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.submitHandler(e);
    });
  }
}
