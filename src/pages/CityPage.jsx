import React from 'react';
import { Grid } from '@material-ui/core';
import AppFrame from '../components/AppFrame';
import CityInfo from '../components/CityInfo';
import Forecast from '../components/Forecast';
import ForecastChart from '../components/ForecastChart';
import Weather from '../components/Weather';
import WeatherDetails from '../components/WeatherDetails';

const data = [
    {
        "dayHour": "Jue 18",
        "min": 14,
        "max": 22,
    },
    {
        "dayHour": "Vie 06",
        "min": 18,
        "max": 27,
    },
    {
        "dayHour": "Vie 12",
        "min": 18,
        "max": 28,
    },
    {
        "dayHour": "Vie 18",
        "min": 18,
        "max": 25,
    },
    {
        "dayHour": "Sab 06",
        "min": 15,
        "max": 22,
    },
    {
        "dayHour": "Sab 12",
        "min": 12,
        "max": 19,
    }
];
const forecastItemsList = [
    { hour: 18, state: 'clear', temperature: 17, weekDay: 'Monday' },
    { hour: 6, state: 'clouds', temperature: 18, weekDay: 'Tuesday' },
    { hour: 12, state: 'fog', temperature: 14, weekDay: 'Wednesday' },
    { hour: 17, state: 'clouds', temperature: 19, weekDay: 'Thursday' },
    { hour: 19, state: 'rain', temperature: 11, weekDay: 'Friday' },
    { hour: 12, state: 'rain', temperature: 13, weekDay: 'Saturday' }
];

const CityPage = () => {
    const city = 'Tlaxcala';
    const country = 'Mexico';
    const state = 'clouds';
    const temperature = 22;
    const humidity = 80;
    const wind = 5;

    return (
        <AppFrame>
            <Grid container
                justifyContent='space-around'
                alignContent='center'
                direction='column'
                spacing={2}>
                <Grid container item 
                    xs={12}
                    justifyContent='center'
                    alignItems='flex-end'>
                    <CityInfo city={city} country={country}/>
                </Grid>
                <Grid container item xs={12}
                    justifyContent='center'>
                        <Weather state={state} temperature={temperature}/>
                        <WeatherDetails humidity={humidity} wind={wind}/>
                </Grid>
                <Grid item>
                    <ForecastChart data={data} />
                </Grid>
                <Grid item>
                    <Forecast forecastItems={forecastItemsList}/>
                </Grid>
            </Grid>
        </AppFrame>
    );
};


export default CityPage;