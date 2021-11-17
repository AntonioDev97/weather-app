import React from "react";
import PropTypes from 'prop-types';
import { Typography, Grid } from "@material-ui/core";
import IconState, { validStates } from "../IconState";
import { IconContext } from "react-icons";

const ForecastItem = ({ weekDay, hour, state, temperature }) => {
    return (
        <Grid container
            direction="column"
            justifyContent="center"
            alignItems="center">
            <Grid item>
                <Typography variant='h6'>{weekDay}</Typography>
            </Grid>
            <Grid item>
                <Typography variant='h6'>{hour}</Typography>
            </Grid>
            <Grid item>
                <IconContext.Provider value={{ size: '5em' }}>
                    <IconState state={state}/>
                </IconContext.Provider>
            </Grid>
            <Grid item>
                <Typography variant='h6'>{temperature} °</Typography>
            </Grid>
        </Grid>
    );
};

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validStates).isRequired,
    temperature: PropTypes.number.isRequired,
}

export default ForecastItem;