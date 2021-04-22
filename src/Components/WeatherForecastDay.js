import React from "react";
import IconDisplay from "./IconDisplay";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {

    function day() {
        let date = new Date(props.data.dt*1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }
    


    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max);
        return temperature;
    }

    function minTemperature() {
        let temperature = Math.round(props.data.temp.min);
        return temperature;
    }

    return (
        <div>
            <p className="forecast-Day">{day()}</p>
                <IconDisplay image={props.data.weather[0].icon} size={60} />
                <p className="forecast-Temperature">
                    <span className="high-Temperature">{maxTemperature()}°</span>
                    <span className="low-Temperature">| {minTemperature()}°</span>
                </p>
        </div>
    );
}