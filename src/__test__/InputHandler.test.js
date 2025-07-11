import { beforeEach, describe, expect, it, vi } from 'vitest';
import InputHandler from '../InputHandler.js';
import UtilityMethods from '../UtilityMethods.js';

let renderWeatherMock, inputHandler;

beforeEach(() => {
  document.body.innerHTML = `
    <div id="app">
    <form class="form-field">
    <input id="searchInput" />
    </form>
    <main class="weather-app"></main>
    </div>
    `;
  UtilityMethods.rootElement = document.querySelector('#app');
  renderWeatherMock = {
    renderWeatherInfo: vi.fn(),
  };

  inputHandler = new InputHandler(renderWeatherMock);
});

describe('InputHandler.js', () => {
  describe('constructor', () => {
    it('should assign renderWeather and call searchCity()', () => {
      expect(inputHandler.renderWeather).toBe(renderWeatherMock);
    });
  });

  describe('searchCity()', () => {
    it('should attach a submit event listener to the form', () => {
      const form = document.querySelector('.form-field');

      const event = new Event('submit');
      const preventDefault = vi.fn();
      event.preventDefault = preventDefault;

      const submitHandlerSpy = vi.spyOn(inputHandler, 'submitHandler');

      form.dispatchEvent(event);

      expect(preventDefault).toHaveBeenCalled();
      expect(submitHandlerSpy).toHaveBeenCalled();
    });
  });

  describe('submitHandler()', () => {
    it('should show a message when input is empty', async () => {
      const searchInput = document.querySelector('#searchInput');
      searchInput.value = '';

      const UtilityMethods = await import('../UtilityMethods.js');
      const liveMsgSpy = vi.spyOn(UtilityMethods.default, 'liveMsg');

      const e = { preventDefault: vi.fn() };

      await inputHandler.submitHandler(e);

      expect(e.preventDefault).toHaveBeenCalled();
      expect(liveMsgSpy).toHaveBeenCalledWith('Please enter a city name');
    });

    it('should call WeatherAPIHandler and renderWeatherInfo on valid input', async () => {
      const searchInput = document.querySelector('#searchInput');
      searchInput.value = 'London';

      const mockWeatherInfo = { name: 'London', sys: { country: 'GB' } };

      const weatherApp = document.querySelector('.weather-app');

      const WeatherAPIHandler = await import('../WeatherAPIHandler.js');
      const getWeatherInfoSpy = vi
        .spyOn(WeatherAPIHandler.default, 'getWeatherInfo')
        .mockResolvedValue(mockWeatherInfo);

      const initAnimations = await import('../animatingApp.js');
      const initAnimationsSpy = vi.spyOn(initAnimations, 'default');

      const e = { preventDefault: vi.fn() };

      await inputHandler.submitHandler(e);

      expect(e.preventDefault).toHaveBeenCalled();
      expect(weatherApp.innerHTML).toContain('Loading');
      expect(getWeatherInfoSpy).toHaveBeenCalledWith('london');
      expect(renderWeatherMock.renderWeatherInfo).toHaveBeenCalledWith(
        mockWeatherInfo
      );
      expect(initAnimationsSpy).toHaveBeenCalled();
      expect(searchInput.value).toBe('');
    });
  });
});
