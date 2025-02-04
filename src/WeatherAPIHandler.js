export default class WeatherAPIHandler {
  static API_KEY = import.meta.env.VITE_API_KEY;

  // handling API callback with async await

  static async getWeatherInfo(searchValue) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${this.API_KEY}&units=metric`;

    try {
      const request = await fetch(url);
      const data = await request.json();
      return data;
    } catch (error) {
      throw new Error(`There is an issue: ${error}`);
    }
  }
}
