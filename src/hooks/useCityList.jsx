import { useState, useEffect } from 'react';
import axios from 'axios';
import getAllWeather from '../utils/transform/getAllWeather';
import { getWeatherUrl } from '../utils/urls';
import { getCityCode } from '../utils/utils';

export const useCityList = (cities, allWeather, actions) => {
    // const [ allWeather, setAllWeather ] = useState({});
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const setWeather = async (city, countryCode) => {
            const url = getWeatherUrl(city, countryCode);
            try {
                // onSetAllWeather({ [getCityCode(city, countryCode)]: {} });
                actions({ type:'SET_ALL_WEATHER', payload: { [getCityCode(city, countryCode)]: {} } })

                const response = await axios.get(url);
                const allWeatherAux = getAllWeather(response, city, countryCode);
                actions({ type: 'SET_ALL_WEATHER', payload: allWeatherAux });
                // onSetAllWeather(allWeatherAux);
                // setAllWeather(allWeather => ({ ...allWeather, ...allWeatherAux }));
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
    }, [cities, allWeather, actions])
    return { error, setError };
}
