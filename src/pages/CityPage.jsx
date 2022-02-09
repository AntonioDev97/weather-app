import React, { useMemo } from 'react';
import { CircularProgress, Grid, LinearProgress } from '@material-ui/core';
import useCityPage from '../hooks/useCityPage';
import AppFrame from '../components/AppFrame';
import CityInfo from '../components/CityInfo';
import Forecast from '../components/Forecast';
import ForecastChart from '../components/ForecastChart';
import Weather from '../components/Weather';
import WeatherDetails from '../components/WeatherDetails';
import { useCityList } from '../hooks/useCityList';
import { getCityCode } from '../utils/utils';
import { getCountryNameByCode } from '../utils/serviceCities';
import { useWeatherContext } from '../WeatherContext';

const CityPage = () => {
    const { dispatch, data } = useWeatherContext();

    // const { onSetAllWeather, onSetChartData, onSetForecastItemList } = actions;
    const { allWeather, allChartData, allForecastItemsList } = data;
    
    const { city, countryCode } = useCityPage(dispatch, allChartData, allForecastItemsList);
    const cities = useMemo(() => ([{ city, countryCode }]), [city, countryCode]);
    
    useCityList(cities, allWeather, dispatch);
    
    const cityCode = getCityCode(city, countryCode);
    const weather = allWeather[cityCode];
    const chartData = allChartData[cityCode];
    const forecastItemsList = allForecastItemsList[cityCode];

    const country = getCountryNameByCode(countryCode);
    const state = weather && weather.state;
    const temperature = weather && weather.temperature;
    const humidity = weather && weather.humidity;
    const wind = weather && weather.wind;

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
                        { humidity && wind && <WeatherDetails humidity={humidity} wind={wind}/> }
                </Grid>
                <Grid item>
                    { !chartData && !forecastItemsList && <LinearProgress /> }
                    { !chartData && !forecastItemsList && <CircularProgress /> }
                </Grid>
                <Grid item>
                    { chartData && <ForecastChart data={chartData} /> }
                </Grid>
                <Grid item>
                    { forecastItemsList && <Forecast forecastItems={forecastItemsList}/> }
                </Grid>
            </Grid>
        </AppFrame>
    );
};


export default CityPage;