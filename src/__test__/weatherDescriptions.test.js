import { describe, it, expect } from 'vitest';
import weatherDescriptions from '../WeatherDescriptions.js';

import Clear from '../assets/clear-sky.png';
import Clouds from '../assets/cloud.png';
import Haze from '../assets/haze.png';
import Mist from '../assets/mist.png';
import Rain from '../assets/rainy-day.png';
import Snow from '../assets/snowfall.png';
import Thunderstorm from '../assets/thunderstorm.png';

describe('WeatherDescriptions.js', () => {
  it('should have correct image and alt for Haze', () => {
    expect(weatherDescriptions.Haze.src).toBe(Haze);
    expect(weatherDescriptions.Haze.alt).toBe('Hazy weather');
  });

  it('should have correct image and alt for Clear', () => {
    expect(weatherDescriptions.Clear.src).toBe(Clear);
    expect(weatherDescriptions.Clear.alt).toBe('Clear sky');
  });

  it('should have correct image and alt for Clouds', () => {
    expect(weatherDescriptions.Clouds.src).toBe(Clouds);
    expect(weatherDescriptions.Clouds.alt).toBe('Cloudy conditions');
  });

  it('should have correct image and alt for Rain', () => {
    expect(weatherDescriptions.Rain.src).toBe(Rain);
    expect(weatherDescriptions.Rain.alt).toBe('Rainy weather');
  });

  it('should have correct image and alt for Thunderstorm', () => {
    expect(weatherDescriptions.Thunderstorm.src).toBe(Thunderstorm);
    expect(weatherDescriptions.Thunderstorm.alt).toBe('Thunderstorm');
  });

  it('should have correct image and alt for Snow', () => {
    expect(weatherDescriptions.Snow.src).toBe(Snow);
    expect(weatherDescriptions.Snow.alt).toBe('Snowy conditions');
  });

  it('should have correct image and alt for Mist', () => {
    expect(weatherDescriptions.Mist.src).toBe(Mist);
    expect(weatherDescriptions.Mist.alt).toBe('Misty weather');
  });

  it('should only contain valid keys', () => {
    expect(Object.keys(weatherDescriptions).sort()).toEqual(
      ['Clear', 'Clouds', 'Haze', 'Mist', 'Rain', 'Snow', 'Thunderstorm'].sort()
    );
  });
});
