import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core'
import ForecastItem from '../ForecastItem';
import { validStates } from '../IconState';

const Forecast = ({ forecastItems }) => {
    const renderForecastItem = ({ weekDay, hour, state, temperature }) => {
        return(
            <Grid item 
                key={`${weekDay}${hour}`}
                data-testid='forecast-item-container'>
                <ForecastItem
                    hour={hour}
                    weekDay={weekDay}
                    state={state}
                    temperature={temperature}/>
            </Grid>
        );
    }
    return(
        <Grid container
            justifyContent='space-around'
            alignItems='center'
            spacing={2}>
            {
                forecastItems.map(forecast => renderForecastItem(forecast))
            }
        </Grid>
    );
};

Forecast.propTypes = {
    forecastItems: PropTypes.arrayOf(PropTypes.shape({
        weekDay: PropTypes.string.isRequired,
        hour: PropTypes.number.isRequired,
        state: PropTypes.oneOf(validStates).isRequired,
        temperature: PropTypes.number.isRequired,
    })).isRequired
}

export default Forecast;
