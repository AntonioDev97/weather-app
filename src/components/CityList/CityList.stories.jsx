import React from 'react';
import CityList from './CityList';
import { action } from '@storybook/addon-actions';

export default {
    title: 'CityList',
    component: CityList
}

const citiesAndCountryData = [
    { city: 'Tlaxcala', country: 'Mexico', countryCode: 'MX' },
    { city: 'Guadalajara', country: 'Mexico', countryCode: 'MX' },
    { city: 'Buenos Aires', country: 'Argentina', countryCode: 'AR'  },
    { city: 'Washington', country: 'United States', countryCode: 'US'  },
]
export const CityListExample = () => <CityList cities={citiesAndCountryData} onClickCity={action("Click on city")} />