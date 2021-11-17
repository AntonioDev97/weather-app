import React from "react";
import PropTypes from 'prop-types';
import { WiCloud, 
    WiDayCloudy, 
    WiDayFog, 
    WiDaySunny, 
    WiRain,
    WiSnow,
    WiRaindrop,
    WiThunderstorm 
} from 'react-icons/wi';

export const validStates = [
    'clouds',
    'fog',
    'clear',
    'rain',
    'snow',
    'drizzle',
    'thunderstorm'
]

const stateByName = {
    clouds: WiDayCloudy,
    fog: WiDayFog,
    clear: WiDaySunny,
    rain: WiRain,
    snow: WiSnow,
    drizzle: WiRaindrop,
    thunderstorm: WiThunderstorm
}

const IconState = ({ state }) => {
    const Icon = stateByName[state];
    return <Icon/>
};

IconState.propTypes = {
    state: PropTypes.oneOf(validStates).isRequired
}

export default IconState;