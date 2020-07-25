import React from "react";
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTempeture from "./WeatherTemperature";

const WeatherData = () => {
    return <div>
        <WeatherTempeture></WeatherTempeture>
        <WeatherExtraInfo humidity={80} wind={"10 m/s"}></WeatherExtraInfo>
    </div>
    
}

export default WeatherData;