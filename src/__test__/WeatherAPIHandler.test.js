import { describe, it, expect, vi, beforeEach } from 'vitest';
import WeatherAPIHandler from '../WeatherAPIHandler.js';

describe('WeatherAPIHandler', () => {
  const dummyKey = 'test-api-key';

  beforeEach(() => {
    import.meta.env = { VITE_API_KEY: dummyKey };
    WeatherAPIHandler.API_KEY = import.meta.env.VITE_API_KEY;
  });

  it('should have a static API_KEY equal to VITE_API_KEY from env', () => {
    expect(WeatherAPIHandler.API_KEY).toBe(dummyKey);
  });

  it('should construct the correct API URL using the search value', async () => {
    const search = 'Delhi';

    global.fetch = vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue({ name: 'Delhi', temp: 30 }),
    });

    await WeatherAPIHandler.getWeatherInfo(search);

    const expectedURL = `https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=${dummyKey}&units=metric`;
    expect(fetch).toHaveBeenCalledWith(expectedURL);
  });

  it('should return parsed JSON data from the API response', async () => {
    const sampleResponse = { name: 'Kolkata', main: { temp: 29 } };

    global.fetch = vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue(sampleResponse),
    });

    const result = await WeatherAPIHandler.getWeatherInfo('Kolkata');
    expect(result).toEqual(sampleResponse);
  });

  it('should throw an error if fetch fails', async () => {
    const errorMessage = 'Network error';
    global.fetch = vi.fn().mockRejectedValue(new Error(errorMessage));

    const fn = () => WeatherAPIHandler.getWeatherInfo('Paris');
    await expect(fn()).rejects.toThrow(`There is an issue: Error: ${errorMessage}`);
  });
});
