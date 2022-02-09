import React from 'react';
import PropTypes from 'prop-types';
import { Grid, List, ListItem }  from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useCityList } from '../../hooks/useCityList';
import { getCityCode } from '../../utils/utils';
import CityInfo from '../CityInfo';
import Weather from '../Weather';
import { useWeatherContext } from '../../WeatherContext';

const CityListItem = React.memo(({ city, country, countryCode, eventOnClickCity, weather }) => {
    return (
        <ListItem 
            button
            onClick={() => eventOnClickCity(city, countryCode)}>
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
});
CityListItem.displayName = "CityListItem";

const renderCityCountry = eventOnClickCity => (cityAndCountry, weather) => {
    const { city, countryCode } = cityAndCountry;
    return <CityListItem key={getCityCode(city, countryCode)} eventOnClickCity={eventOnClickCity} weather={weather} {...cityAndCountry} /> 
}

const CityList = ({ cities, onClickCity }) => {
    // const { onSetAllWeather } = actions;
    const { dispatch, data } = useWeatherContext();

    const { allWeather } = data;
    const { error, setError } = useCityList(cities, allWeather, dispatch);

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

export default React.memo(CityList);