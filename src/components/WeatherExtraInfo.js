import React from "react";

const WeatherExtraInfo = ({humidity, wind}) => {
    return (
        <div>
            <span>{`${humidity} % - `}</span>
            <span>{`${wind} wind `}</span>
        </div>
    );
}

export default WeatherExtraInfo;