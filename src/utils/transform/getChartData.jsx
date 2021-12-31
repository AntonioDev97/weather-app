import { toCelsius } from '../utils';
import moment from 'moment';

const getChartData = (data) => {
    const dayAhead = [0, 1, 2, 3, 4, 5];
    const days = dayAhead.map(d => moment().add(d, 'd'));
    const dataFormat = days.map(d => {
        const tempObjArray = data.list.filter(item => {
            const dayOfYear = moment.unix(item.dt).dayOfYear();
            return dayOfYear === d.dayOfYear();
        });
        const temps = tempObjArray.map(item => item.main.temp);
        return {
            dayHour: d.format('ddd'),
            min: toCelsius(Math.min(...temps)),
            max: toCelsius(Math.max(...temps)),
            hasTemps: (temps.length) ? true : false
        }
    }).filter(item => item.hasTemps);

    return dataFormat;
}

export default getChartData;