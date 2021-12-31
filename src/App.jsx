import React, { useState, useCallback, useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import Mainpage from './pages/MainPage';
import CityPage from './pages/CityPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
    const [ allWeather, setAllWeather ] = useState({});
    const [ allChartData, setAllChartData ] = useState({});
    const [ allForecastItemsList, setAllForecastItemList ] = useState({});

    const onSetAllWeather = useCallback((weatherCity) => {
        setAllWeather(allWeather => ({ ...allWeather, ...weatherCity }));
    }, [setAllWeather]);
    const onSetChartData = useCallback(chartDataCity => {
        setAllChartData(allchartData => ({ ...allchartData, ...chartDataCity }));
    }, [setAllChartData]);
    const onSetForecastItemList = useCallback(forecastDataCity => {
        setAllForecastItemList(allForecastItemsList => ({ ...forecastDataCity, ...allForecastItemsList }));
    }, [setAllForecastItemList]);

    const actions = useMemo(() => ({
        onSetAllWeather, 
        onSetChartData,
        onSetForecastItemList,
    }), [onSetAllWeather, onSetChartData, onSetForecastItemList]);

    const data = useMemo(() => ({
        allWeather,
        allChartData,
        allForecastItemsList
    }), [allWeather, allChartData, allForecastItemsList]);

    return (
        <Router>
            <Switch>
                <Route path='/main'>
                    <Mainpage data={data} actions={actions} />
                </Route>
                <Route path='/city/:countryCode/:city'>
                    <CityPage data={data} actions={actions} />
                </Route>
                <Route exact path='/'>
                    <WelcomePage />
                </Route>
                <Route>
                    <NotFoundPage />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;