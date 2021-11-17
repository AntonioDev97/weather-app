import { Grid, Link, Typography } from '@material-ui/core';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { WiRain } from 'react-icons/wi';

const WelcomePage = () => {
    return (
        <Grid container
            direction='column'
            justifyContent='center'
            className='full'>
            <div className="highlight">
                <Grid item container
                    justifyContent='center'
                    alignItems='center'>
                    <Grid item>
                        <IconContext.Provider value={{ size:'6em' }}>
                            <WiRain />
                        </IconContext.Provider>
                    </Grid>
                    <Grid item container
                        direction='column'
                        justifyContent='center'
                        alignItems='center'>
                        <Typography variant='h4' color='inherit'>
                            404 | The page does not exist
                        </Typography>
                        <Link color='inherit'
                            aria-label='menu'
                            component={RouterLink}
                            to='/'>
                            return to Home
                        </Link>
                    </Grid>
                </Grid>
            </div>
        </Grid>
    );
};

export default WelcomePage;