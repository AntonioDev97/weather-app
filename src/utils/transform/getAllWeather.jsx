import { getCityCode, toCelsius } from '../utils';

const getAllWeather = (response, city, countryCode) => {
    const temperature = toCelsius(response.data.main.temp);
    const state = response.data.weather[0].main.toLowerCase();
    const wind = response.data.wind.speed;
    const humidity = response.data.main.humidity;
    return ({ [getCityCode(city, countryCode)]: { temperature, state, humidity, wind } });
}

export default getAllWeather;