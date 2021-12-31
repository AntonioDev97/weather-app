import { useEffect, useDebugValue } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { getForecastUrl } from '../utils/urls';
import getChartData from '../utils/transform/getChartData';
import getForecastItemList from '../utils/transform/getForecastItemList';
import { getCityCode } from '../utils/utils';

const useCityPage = (onSetChartData, onSetForecastItemList, allChartData, allForecastItemsList ) => {
    const { city, countryCode } = useParams();
    // const [ chartData, setChartData ] = useState(null);
    // const [ forecastItemsList, setForecastItemList ] = useState(null);

    // Development proporses - see in components tab
    useDebugValue('useCityPage' + city);

    useEffect(() => {
        const getForecast = async () => {
            const url = getForecastUrl(city, countryCode);
            try {
                const cityCode = getCityCode(city, countryCode);
                const { data } = await axios.get(url);
                const dataFormat = getChartData(data);
                onSetChartData({ [cityCode]: dataFormat });

                const forecastItemsListFormat = getForecastItemList(data);
                onSetForecastItemList({ [cityCode]: forecastItemsListFormat });
            } catch (error) {
                console.error(error);
            }
        }
        const cityCode = getCityCode(city, countryCode);
        if (!allChartData[cityCode] && !allForecastItemsList[cityCode]) {
            getForecast();
        }
    }, [city, countryCode, onSetChartData, onSetForecastItemList, allChartData, allForecastItemsList]);

    return { city, countryCode };
};

export default useCityPage;