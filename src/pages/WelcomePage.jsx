import { Grid, Link, Typography } from '@material-ui/core';
import React, { useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { WiDaySunny } from 'react-icons/wi';
import WelcomeScreen from '../components/WelcomeScreen/WelcomeScreen';

const WelcomePage = () => {
    const IconContextSize = useMemo(() => ({ size:'6em' }), []);
    return (
        <WelcomeScreen>
            <Grid container
                direction='column'
                justifyContent='center'
                className='full'>
                    <div className="highlight">
                        <Grid item container
                            justifyContent='center'
                            alignItems='center'>
                            <Grid item>
                                <IconContext.Provider value={IconContextSize}>
                                    <WiDaySunny />
                                </IconContext.Provider>
                            </Grid>
                            <Grid item container
                                direction='column'
                                justifyContent='center'
                                alignItems='center'>
                                <Typography variant='h4' color='inherit'>
                                    Weather App
                                </Typography>
                                <Link color='inherit'
                                    aria-label='menu'
                                    component={RouterLink}
                                    to='/main'>
                                    Ingresar
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
            </Grid>
        </WelcomeScreen>
    );
};

export default WelcomePage;