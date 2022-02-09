import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import IconState, { validStates } from '../IconState';
import { IconContext } from 'react-icons';

const Weather = ({ temperature, state }) => {
    const IconContextSize = useMemo(() => ({ size: '6em' }), []);
    return (
        <Grid container item
            direction='row'
            justifyContent='center'
            alignItems='center'
            spacing={1}>
            <IconContext.Provider value={IconContextSize}>
                {   
                    state ? <IconState state={state}/> 
                    : <Skeleton variant='circle' width={90} height={90} />
                }
            </IconContext.Provider>
            {
                temperature ? <Typography variant='h2' display='inline'>{temperature}</Typography> 
                : <Skeleton variant='rect' width={90} height={90} />
            }
        </Grid>
    )
}

Weather.propTypes = {
    temperature: PropTypes.number,
    state: PropTypes.oneOf(validStates)
}

export default Weather
