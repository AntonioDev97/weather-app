import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ConvertUnits from 'convert-units';
import { Grid, List, ListItem }  from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import CityInfo from '../CityInfo';
import Weather from '../Weather';

const renderCityCountry = eventOnClickCity => (cityAndCountry, weather) => {
    const { city, country, countryCode } = cityAndCountry;

    return (
        <ListItem 
            button
            key={`${city}-${countryCode}`} 
            onClick={eventOnClickCity}>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item md={9} xs={12} >
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid item md={3} xs={12} >
                    <Weather 
                        temperature={weather && weather.temperature} 
                        state={weather && weather.state} />
                </Grid>
            </Grid>
        </ListItem>
    )
}

const CityList = ({ cities, onClickCity }) => {
    const [ allWeather, setAllWeather ] = useState({});
    const [ error, setError ] = useState(null);

    useEffect(() => {
        const setWeather = async (city, countryCode) => {
            const apiKey = 'd82baad4a11a9b1a2974b259a2fc1fca';
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}`
            try {
                const response = await axios.get(url);
                const temperature = Number(ConvertUnits(response.data.main.temp).from('K').to('C').toFixed(1));
                const state = response.data.weather[0].main.toLowerCase();
                setAllWeather(allWeather => ({ ...allWeather, [`${city}-${countryCode}`]: { temperature, state } }));
            } catch (err) {
                if (err.response) {
                    const { data, status } = err.response;
                    console.error('error', err.response)
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
            setWeather(city, countryCode);
        });
    }, [cities])

    return (
        <div> 
            {
                error && <Alert onClose={() => setError(null)} severity='error'>{error}</Alert>
            }
            <List>
                {
                    cities.map(cityAndCountry => renderCityCountry(onClickCity)(
                        cityAndCountry,
                        allWeather[`${cityAndCountry.city}-${cityAndCountry.countryCode}`]
                    ))
                }
            </List>
        </div>
        
    );
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        countryCode: PropTypes.string.isRequired,
    })).isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList;