import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import Mainpage from './pages/MainPage';
import CityPage from './pages/CityPage';
import NotFoundPage from './pages/NotFoundPage';
import { WeatherContext } from './WeatherContext';

const App = () => {
    
    /*
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
    */

    return (
        <WeatherContext>
            <Router>
                <Routes>
                    <Route path='/main' element={ <Mainpage /> } />
                    <Route path='/city/:countryCode/:city' element={ <CityPage /> }  />
                    <Route path='/' element={ <WelcomePage /> } />
                    <Route path="*" element={ <NotFoundPage /> } />
                </Routes>
            </Router>
        </WeatherContext>
    );
};

export default App;