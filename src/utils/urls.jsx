const apiKey = "d82baad4a11a9b1a2974b259a2fc1fca";
const baseUrl = "https://api.openweathermap.org/data/2.5"
export const getForecastUrl = (city, countryCode) => `${baseUrl}/forecast?q=${city},${countryCode}&appid=${apiKey}`;
export const getWeatherUrl = (city, countryCode) => `${baseUrl}/weather?q=${city},${countryCode}&appid=${apiKey}`