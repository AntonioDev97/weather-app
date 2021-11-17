import React from 'react';
import { render } from '@testing-library/react';
import FirecastItem from './ForecastItem';

describe('ForecastItem test component', () => {
    test('ForecastItem render', async () => {
        const { findAllByRole, findByText } = render(<FirecastItem hour={10} temperature={24} weekDay='Monday' state='clear' />);
        const FirecastComponent = await findAllByRole('heading');
        const findHour = await findByText(/10/);
        const findTemperature = await findByText(/24/);
        const findWeekDay = await findByText(/Monday/);
        
        expect(FirecastComponent.length).toBeGreaterThanOrEqual(3);
        expect(findHour).toHaveTextContent('10');
        expect(findTemperature).toHaveTextContent('24 °');
        expect(findWeekDay).toHaveTextContent('Monday');
    });
});