import React from 'react';
import Forecast from '.';
import { render } from '@testing-library/react';

describe('Forecast component test', () => {
    const forecastItemsList = [
        { hour: 18, state: 'clear', temperature: 17, weekDay: 'Monday' },
        { hour: 6, state: 'clouds', temperature: 18, weekDay: 'Tuesday' },
        { hour: 12, state: 'fog', temperature: 14, weekDay: 'Wednesday' },
        { hour: 17, state: 'clouds', temperature: 19, weekDay: 'Thursday' },
        { hour: 19, state: 'rain', temperature: 11, weekDay: 'Friday' },
        { hour: 12, state: 'rain', temperature: 13, weekDay: 'Saturday' }
    ];
    test('Forecast render test', async () => {
        const { findAllByTestId } = render(<Forecast forecastItems={forecastItemsList} />);
        const forecastItems = await findAllByTestId('forecast-item-container');

        expect(forecastItems).toHaveLength(6);
        
    });

    test('Forecast render test fail', async () => {
        const { findAllByTestId } = render(<Forecast forecastItems={forecastItemsList} />);
        const forecastItems = await findAllByTestId('forecast-item-container');

        expect(forecastItems).not.toHaveLength(7);
    });
});