import UtilityMethods from './UtilityMethods.js';
import weatherDescriptions from './WeatherDescriptions.js';
import WeatherImg from './assets/weather.png';
import SunriseImg from './assets/sunrise.png';
import SunsetImg from './assets/sunset.png';
import PressureImg from './assets/pressure.png';
import HumidityImg from './assets/humidity.png';
import VisibilityImg from './assets/visibility.png';
import WindImg from './assets/wind.png';
import gsap from 'gsap';

export default class RenderWeather {
  constructor() {
    this.weatherApp = UtilityMethods.createElement(
      'main',
      UtilityMethods.rootElement,
      'weather-app',
      null
    );

    this.welcomeText = `
    <div class="weather-welcome-container">
      <h2 class="welcome-title">Weather Shapes Our World</h2>
      <p class="welcome-subtitle">Plan your perfect day with real-time weather insights</p>
      <div class="welcome-context">
        <p>Whether you're planning an adventure</p>
        <p>Preparing for your daily commute</p>
        <p>Or just curious about nature's mood</p>
      </div>
      <p class="welcome-action">Type any location to explore the weather</p>
    </div>
  `;

    this.weatherApp.innerHTML = this.welcomeText;

    this.animateWelcomeBox(); // animating welcome message when page reloads or loads
  }

  animateWelcomeBox() {
    gsap.from('.weather-welcome-container', {
      scale: 0.9,
      opacity: 0,
      duration: 1.5,
      ease: 'power2.inOut',
    });
  }

  renderWeatherInfo(weatherInfo) {
    // Clearing weather Info Section to display the upcoming results
    this.weatherApp.innerHTML = '';
    try {
      // Rendering weather information
      this.renderPlaceTime(weatherInfo);
      this.renderTempWeather(weatherInfo);
      this.renderSunRiseSet(weatherInfo);
      this.renderOtherInfo(weatherInfo);
    } catch (error) {
      UtilityMethods.liveMsg('No city found with this name');
      this.weatherApp.innerHTML = this.welcomeText;
      this.animateWelcomeBox(); // animating welcome message after user enter a wrong input
    }
  }

  renderPlaceTime(weatherInfo) {
    // Section tag contains time and places information
    const placeTime = UtilityMethods.createElement(
      'section',
      this.weatherApp,
      'place-time-section',
      null
    );
    // A div box to place e.i., city country

    const place = UtilityMethods.createElement(
      'div',
      placeTime,
      'place-box',
      null
    );

    UtilityMethods.createElement('h2', place, 'city-text', weatherInfo['name']);

    UtilityMethods.createElement(
      'h3',
      place,
      'country-text',
      weatherInfo['sys']['country']
    );

    // A h2 to store time that comes from the country's timezone

    UtilityMethods.createElement(
      'h2',
      placeTime,
      'time-text',
      UtilityMethods.formateTime(weatherInfo['dt'], weatherInfo['timezone']) //formatting and correcting timezone
    );
  }

 renderTempWeather(weatherInfo) {
  // section tag that contains temperatures and weather information
  const tempWeather = UtilityMethods.createElement(
    'section',
    this.weatherApp,
    'temp-weather-section',
    null
  );

  // A div box that contains temperature and feels-like temperature
  const tempBox = UtilityMethods.createElement(
    'div',
    tempWeather,
    'temp-box',
    null
  );

  UtilityMethods.createElement('h2', tempBox, 'temp-heading', 'Temperature');

  const tempText = UtilityMethods.createElement(
    'h3',
    tempBox,
    'temperature',
    `${weatherInfo.main.temp} ℃`
  );

  const feelsLikeText = UtilityMethods.createElement(
    'h4',
    tempBox,
    'feels-like-temp',
    `Feels like: ${weatherInfo.main.feels_like} ℃`
  );

  // Toggle button for Celsius ↔ Fahrenheit
  const toggleBtn = UtilityMethods.createElement(
    'button',
    tempWeather,
    'temp-toggle-btn',
    'Switch to °F'
  );

  let isCelsius = true;

  toggleBtn.addEventListener('click', () => {
    isCelsius = !isCelsius;

    const tempC = weatherInfo.main.temp;
    const feelsC = weatherInfo.main.feels_like;
    const tempF = (tempC * 9) / 5 + 32;
    const feelsF = (feelsC * 9) / 5 + 32;

    tempText.textContent = isCelsius
      ? `${tempC} ℃`
      : `${tempF.toFixed(1)} ℉`;

    feelsLikeText.textContent = isCelsius
      ? `Feels like: ${feelsC} ℃`
      : `Feels like: ${feelsF.toFixed(1)} ℉`;

    toggleBtn.textContent = isCelsius ? 'Switch to °F' : 'Switch to ℃';
  });

  // A div box that contains weather description and an image
  const weatherDescBox = UtilityMethods.createElement(
    'div',
    tempWeather,
    'weather-description-box',
    null
  );

  const mainWeather = weatherInfo.weather[0].main;
  const weatherDesc = weatherInfo.weather[0].description;

  UtilityMethods.createElement(
    'h2',
    weatherDescBox,
    'weather-description',
    weatherDesc.charAt(0).toUpperCase() + weatherDesc.slice(1)
  );

  const weatherDescImg = UtilityMethods.createElement(
    'img',
    weatherDescBox,
    'weather-description-img',
    null
  );

  if (weatherDescriptions[mainWeather]) {
    weatherDescImg.src = weatherDescriptions[mainWeather].src;
    weatherDescImg.alt = weatherDescriptions[mainWeather].alt;
  } else {
    weatherDescImg.src = WeatherImg;
    weatherDescImg.alt = 'Weather condition';
  }
}


  renderSunRiseSet(weatherInfo) {
    // section that contains sun rise and sun set information

    const sunRiseSet = UtilityMethods.createElement(
      'section',
      this.weatherApp,
      'sun-rise-set-section',
      null
    );

    // A div box that contains information of sun rise

    const sunRiseBox = UtilityMethods.createElement(
      'div',
      sunRiseSet,
      'sun-rise-box',
      null
    );
    const sunRiseImg = UtilityMethods.createElement(
      'img',
      sunRiseBox,
      'sun-rise-img',
      null
    );

    sunRiseImg.src = SunriseImg;
    sunRiseImg.alt = 'sun rise image';

    UtilityMethods.createElement(
      'h3',
      sunRiseBox,
      'sun-rise-heading',
      'Sun rise'
    );

    UtilityMethods.createElement(
      'p',
      sunRiseBox,
      'sun-rise-timing',
      UtilityMethods.formateTime(
        weatherInfo['sys']['sunrise'],
        weatherInfo['timezone']
      ) // formatting and correcting timezone
    );

    // A div box that contains information of sun set

    const sunSetBox = UtilityMethods.createElement(
      'div',
      sunRiseSet,
      'sun-set-box',
      null
    );
    const sunSetImg = UtilityMethods.createElement(
      'img',
      sunSetBox,
      'sun-set-img',
      null
    );

    sunSetImg.src = SunsetImg;
    sunSetImg.alt = 'sun set image';

    UtilityMethods.createElement('h3', sunSetBox, 'sun-set-heading', 'Sun set');

    UtilityMethods.createElement(
      'p',
      sunSetBox,
      'sun-set-timing',
      UtilityMethods.formateTime(
        weatherInfo['sys']['sunset'],
        weatherInfo['timezone']
      ) // formatting and correcting timezone
    );
  }

  renderOtherInfo(weatherInfo) {
    // section tag contains all other information
    const otherInfo = UtilityMethods.createElement(
      'section',
      this.weatherApp,
      'other-info-section',
      null
    );

    //a div box contain pressure text and its icon

    const pressureBox = UtilityMethods.createElement(
      'div',
      otherInfo,
      'pressure-box',
      null
    );

    const pressureImg = UtilityMethods.createElement(
      'img',
      pressureBox,
      'pressure-img',
      null
    );

    pressureImg.src = PressureImg;
    pressureImg.alt = 'weather pressure logo';

    UtilityMethods.createElement(
      'h2',
      pressureBox,
      'pressure-text',
      'Pressure'
    );

    UtilityMethods.createElement(
      'p',
      pressureBox,
      'pressure-para',
      `${weatherInfo['main']['pressure']} hPa` // Added hectopascals unit
    );

    //a div box contain humidity text and its icon
    const humidityBox = UtilityMethods.createElement(
      'div',
      otherInfo,
      'humidity-box',
      null
    );

    const humidityImg = UtilityMethods.createElement(
      'img',
      humidityBox,
      'humidity-img',
      null
    );

    humidityImg.src = HumidityImg;
    humidityImg.alt = 'weather humidity logo';

    UtilityMethods.createElement(
      'h2',
      humidityBox,
      'humidity-text',
      'Humidity'
    );

    UtilityMethods.createElement(
      'p',
      humidityBox,
      'humidity-para',
      `${weatherInfo['main']['humidity']}%` // Added percentage unit
    );

    //a div box contain visibility text and its icon
    const visibilityBox = UtilityMethods.createElement(
      'div',
      otherInfo,
      'visibility-box',
      null
    );

    const visibilityImg = UtilityMethods.createElement(
      'img',
      visibilityBox,
      'visibility-img',
      null
    );

    visibilityImg.src = VisibilityImg;
    visibilityImg.alt = 'weather visibility logo';

    UtilityMethods.createElement(
      'h2',
      visibilityBox,
      'visibility-text',
      'Visibility'
    );

    UtilityMethods.createElement(
      'p',
      visibilityBox,
      'visibility-para',
      `${weatherInfo['visibility']} m` // Added meters unit
    );

    //a div box contain wind speed text and its icon

    const windSpeedBox = UtilityMethods.createElement(
      'div',
      otherInfo,
      'wind-speed-box',
      null
    );

    const windSpeedImg = UtilityMethods.createElement(
      'img',
      windSpeedBox,
      'wind-speed-img',
      null
    );

    windSpeedImg.src = WindImg;
    windSpeedImg.alt = 'weather wind speed logo';

    UtilityMethods.createElement(
      'h2',
      windSpeedBox,
      'wind-speed-text',
      'Wind speed'
    );

    UtilityMethods.createElement(
      'p',
      windSpeedBox,
      'wind-speed-para',
      `${weatherInfo['wind']['speed']} m/s` // Added meters per second unit
    );
  }
}
