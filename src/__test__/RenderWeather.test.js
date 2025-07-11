import { beforeEach, describe, expect, it } from 'vitest';
import RenderWeather from '../RenderWeather.js';
import UtilityMethods from '../UtilityMethods.js';
import weatherDescriptions from '../WeatherDescriptions.js';

beforeEach(() => {
  document.body.innerHTML = '<div id="app"></div>';
  UtilityMethods.rootElement = document.querySelector('#app');
});

describe('RenderWeather.js', () => {
  let renderer;

  beforeEach(() => {
    renderer = new RenderWeather();
  });

  it('constructor() should create weatherApp and insert welcome text', () => {
    const main = document.querySelector('main.weather-app');
    expect(main).toBeInstanceOf(HTMLElement);
    expect(main.innerHTML.includes('weather-welcome-container')).toBe(true);
  });

  it('animateWelcomeBox() should apply gsap animation (indirect check)', () => {
    expect(typeof renderer.animateWelcomeBox).toBe('function');
  });

  it('renderWeatherInfo() should call all render methods on valid data', () => {
    const dummyData = {
      name: 'Delhi',
      dt: 123456,
      timezone: 19800,
      sys: { country: 'IN', sunrise: 123000, sunset: 124000 },
      main: { temp: 30, feels_like: 33, pressure: 1000, humidity: 60 },
      weather: [{ main: 'Clear', description: 'clear sky' }],
      visibility: 5000,
      wind: { speed: 4 },
    };

    renderer.renderWeatherInfo(dummyData);

    expect(document.querySelector('.place-time-section')).toBeTruthy();
    expect(document.querySelector('.temp-weather-section')).toBeTruthy();
    expect(document.querySelector('.sun-rise-set-section')).toBeTruthy();
    expect(document.querySelector('.other-info-section')).toBeTruthy();
  });

  it('renderPlaceTime() should render city, country and time', () => {
    const data = { name: 'Lucknow', dt: 123456, timezone: 19800, sys: { country: 'IN' } };
    renderer.renderPlaceTime(data);

    const placeText = document.querySelector('.city-text');
    const countryText = document.querySelector('.country-text');
    const timeText = document.querySelector('.time-text');

    expect(placeText.textContent).toBe('Lucknow');
    expect(countryText.textContent).toBe('IN');
    expect(timeText).toBeInstanceOf(HTMLElement);
  });

  it('renderTempWeather() should show temp, feels like and weather description', () => {
    const data = {
      main: { temp: 25, feels_like: 27 },
      weather: [{ main: 'Clouds', description: 'broken clouds' }],
    };

    renderer.renderTempWeather(data);

    expect(document.querySelector('.temperature').textContent).toContain('25');
    expect(document.querySelector('.feels-like-temp').textContent).toContain('27');
    expect(document.querySelector('.weather-description').textContent).toBe('Broken clouds');

    const img = document.querySelector('.weather-description-img');
    expect(img.src).toContain(weatherDescriptions['Clouds'].src);
    expect(img.alt).toBe(weatherDescriptions['Clouds'].alt);
  });

  it('renderTempWeather() fallback image works when weather type unknown', () => {
    const data = {
      main: { temp: 20, feels_like: 22 },
      weather: [{ main: 'Unknown', description: 'weird sky' }],
    };
    renderer.renderTempWeather(data);

    const img = document.querySelector('.weather-description-img');
    expect(img.src).toContain('weather.png'); // fallback
    expect(img.alt).toBe('Weather condition');
  });

  it('renderSunRiseSet() should display sunrise and sunset images and times', () => {
    const data = { sys: { sunrise: 123000, sunset: 124000 }, timezone: 19800 };
    renderer.renderSunRiseSet(data);

    expect(document.querySelector('.sun-rise-img')).toBeTruthy();
    expect(document.querySelector('.sun-set-img')).toBeTruthy();
    expect(document.querySelector('.sun-rise-timing')).toBeInstanceOf(HTMLElement);
    expect(document.querySelector('.sun-set-timing')).toBeInstanceOf(HTMLElement);
  });

  it('renderOtherInfo() should display all extra data like pressure, humidity, etc.', () => {
    const data = {
      main: { pressure: 1001, humidity: 70 },
      visibility: 4000,
      wind: { speed: 3 },
    };

    renderer.renderOtherInfo(data);

    expect(document.querySelector('.pressure-para').textContent).toContain('1001');
    expect(document.querySelector('.humidity-para').textContent).toContain('70');
    expect(document.querySelector('.visibility-para').textContent).toContain('4000');
    expect(document.querySelector('.wind-speed-para').textContent).toContain('3');
  });
});
