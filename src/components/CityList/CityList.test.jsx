import React from 'react';
import { render, fireEvent, act } from "@testing-library/react";
import CityList from './CityList';

const citiesAndCountryData = [
    { city: 'Tlaxcala', country: 'Mexico', countryCode: 'MX' },
    { city: 'Guadalajara', country: 'Mexico', countryCode: 'MX' },
    { city: 'Buenos Aires', country: 'Argentina', countryCode: 'AR'  },
    { city: 'Washington', country: 'United States', countryCode: 'US'  },
]

const actions = {
    onSetAllWeather: jest.fn(), 
    onSetChartData: jest.fn(),
    onSetForecastItemList: jest.fn(),
}
const data = {
    allWeather: {},
    allChartData: {},
    allForecastItemsList: {}
}

test('CityList render', async () => {
    const fnClickOnItem = jest.fn();
    const { findAllByRole } = render(<CityList cities={citiesAndCountryData} onClickCity={fnClickOnItem} actions={actions} data={data} />);
    const items = await findAllByRole('button');
    await act(() => Promise.resolve());
    expect(items).toHaveLength(4);
});

test('CityList click on item', async () => {
    const fnClickOnItem = jest.fn();
    const { findAllByRole } = render(<CityList cities={citiesAndCountryData} onClickCity={fnClickOnItem} actions={actions} data={data} />)
    const items = await findAllByRole('button');
    
    fireEvent.click(items[0]);

    expect(fnClickOnItem).toHaveBeenCalledTimes(1);
});