import Forecast from "./Forecast";

export default {
    title: 'Forecast',
    component: Forecast
}

const forecastItemsList = [
    { hour: 18, state: 'clear', temperature: 17, weekDay: 'Monday' },
    { hour: 6, state: 'clouds', temperature: 18, weekDay: 'Tuesday' },
    { hour: 12, state: 'fog', temperature: 14, weekDay: 'Wednesday' },
    { hour: 17, state: 'clouds', temperature: 19, weekDay: 'Thursday' },
    { hour: 19, state: 'rain', temperature: 11, weekDay: 'Friday' },
    { hour: 12, state: 'rain', temperature: 13, weekDay: 'Saturday' }
];

export const ForecastExample = () => <Forecast forecastItems={forecastItemsList}/>