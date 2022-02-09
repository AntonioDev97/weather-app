import React from 'react';
import PropType from 'prop-types';
import { 
    Grid, 
    AppBar, 
    Toolbar, 
    IconButton,
    Link,
    Typography,
} from '@material-ui/core';
import { IconContext } from 'react-icons'
import { WiDaySunny } from 'react-icons/wi';
import { Link as LinkRouter } from 'react-router-dom';
import ErrorBoundary from '../../generic/ErrorBoundary';

const AppFrame = ({ children }) => {
    const iconContextSize = React.useMemo(() => ({ size: '2em' }), []); 
    return (
        <Grid container
            justifyContent='center'>
            <AppBar position='static'>
                <Toolbar variant='dense'>
                    <IconButton color='inherit' aria-label='menu'>
                        <Link
                            component={LinkRouter}
                            to='/main' 
                            color='inherit' 
                            aria-label='menu'>
                            <IconContext.Provider value={iconContextSize}>
                                <WiDaySunny/>
                            </IconContext.Provider>
                        </Link>
                    </IconButton>
                    <Typography variant='h6' color='inherit'>
                        Weather App
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid item
                xs={12}
                ms={11}
                md={10}
                lg={9}>
                <ErrorBoundary>{ children }</ErrorBoundary>
            </Grid>
        </Grid>
    );
}

AppFrame.propType = {
    children: PropType.node
}

export default AppFrame;