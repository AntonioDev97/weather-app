import { useState, useEffect } from 'react';
import axios from 'axios';
import getAllWeather from '../utils/transform/getAllWeather';
import { getWeatherUrl } from '../utils/urls';
import { getCityCode } from '../utils/utils';

export const useCityList = (cities, allWeather, onSetAllWeather) => {
    // const [ allWeather, setAllWeather ] = useState({});
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const setWeather = async (city, countryCode) => {
            const url = getWeatherUrl(city, countryCode);
            try {
                onSetAllWeather({ [getCityCode(city, countryCode)]: {} });
                const response = await axios.get(url);
                const allWeatherAux = getAllWeather(response, city, countryCode);
                onSetAllWeather(allWeatherAux);
                //setAllWeather(allWeather => ({ ...allWeather, ...allWeatherAux }));
            } catch (err) {
                if (err.response) {
                    setError('Error data does not retrieved');
                } else if (err.request) {
                    console.error('error', err.request)
                    setError('Error verify your internet conexion');
                } else {
                    console.error('error', err)
                    setError('Error data lost');
                }
            }
        }
        cities.forEach(({ city, countryCode }) => {
            if (!allWeather[getCityCode(city, countryCode)]) {
                setWeather(city, countryCode);
            }
        });
    }, [cities, allWeather, onSetAllWeather])
    return { error, setError };
}
