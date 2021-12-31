import { toCelsius } from '../utils';
import moment from 'moment';

const getForecastItemList = (data) => {
    const interval = [4,8,12,16,20,24];
    const forecastItemsListFormat = data.list
    .filter((item, index) => interval.includes(index))
    .map(item => {
        const date = moment.unix(item.dt);
        return ({
            hour: date.hour(),
            weekDay: date.format('dddd'),
            state: item.weather[0].main.toLowerCase(),
            temperature: toCelsius(item.main.temp)
        });
    });

    return forecastItemsListFormat;
};

export default getForecastItemList;