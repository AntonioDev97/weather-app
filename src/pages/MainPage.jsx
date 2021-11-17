import React from 'react';
import { useHistory } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import AppFrame from '../components/AppFrame';
import CityList from '../components/CityList';

const cities = [
    { city: 'Tlaxcala', country: 'Mexico', countryCode: 'MX' },
    { city: 'Guadalajara', country: 'Mexico', countryCode: 'MX' },
    { city: 'Buenos Aires', country: 'Argentina', countryCode: 'AR'  },
    { city: 'Washington', country: 'United States', countryCode: 'US'  },
]

const MainPage = () => {
    const history = useHistory();
    const onClickHandler = () => {
        history.push('/city');
    };
    return (
        <AppFrame>
            <Paper elevation={2}>
                <CityList cities={cities} onClickCity={onClickHandler}/>
            </Paper>
        </AppFrame>
    );
};

export default MainPage;