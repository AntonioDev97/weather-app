import React, { useReducer, useContext } from 'react';

const WeatherStateContext = React.createContext();
const WeatherDispatchContext = React.createContext(); 

const initialValue = {
    allWeather: {},
    allChartData: {},
    allForecastItemsList: {},
};
const reducer = (state, action) => {
    const { type, payload } = action;
    const types = {
        SET_ALL_WEATHER: () => {
            const weatherCity = payload;
            const newAllWeather = { ...state.allWeather, ...weatherCity };
            return { ...state, allWeather: newAllWeather };
        },
        SET_CHART_DATA: () => {
            const chartDataCity = payload;
            const newAllChartData = { ...state.allChartData, ...chartDataCity };
            return { ...state, allChartData: newAllChartData };
        },
        SET_FORECAST_ITEM_LIST: () => {
            const forecastItemListCity = payload;
            const newAllForecastItemListCity = { ...state.allForecastItemsList, ...forecastItemListCity };
            return { ...state, allForecastItemsList: newAllForecastItemListCity };
        }
    }
    return types[type] ? types[type]() : state;
};

const WeatherContext = ({ children }) => {
    const [ state, dispatch ] = useReducer(reducer, initialValue);

    return(
        <WeatherDispatchContext.Provider value={dispatch}>
            <WeatherStateContext.Provider value={state}>
                { children }
            </WeatherStateContext.Provider>
        </WeatherDispatchContext.Provider>
    );
};

const useWeatherContext = () => {
    const dispatch = useContext(WeatherDispatchContext);
    const state = useContext(WeatherStateContext);
    if (!dispatch) throw new Error("Must set a dispatch provider");
    if (!state) throw new Error("Must set a state provider");
    return { dispatch, data: state };
};

export {
    WeatherContext,
    useWeatherContext,
};