import React, { useState } from "react";
import "./Forecast.css";
import IconDisplay from "./IconDisplay";
import axios from "axios";


export default function Forecast(props) {

    let [loaded, setLoaded] = useState(false);
    let [forecastInfo, setForecastInfo] = useState(null);

    function handleResponse(response) {
        console.log(response.data);
        setForecastInfo(response.data.daily);
        setLoaded(true);
    }

    function maxTemperature() {
        let temperature = Math.round(forecastInfo[0].temp.max);
        return temperature;
    }

    function minTemperature() {
        let temperature = Math.round(forecastInfo[0].temp.min);
        return temperature;
    }

    if (loaded) {
        return (
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <p className="forecast-Day">{forecastInfo[0].dt}</p>
                            <IconDisplay image="01d" size={60} />
                        
                            <p className="forecast-Temperature">
                                <span className="high-Temperature">{maxTemperature()}°</span>
                                <span className="low-Temperature">| {minTemperature()}°</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        const apiKey = "28a9b26783d5b53ed2f25d7dd7717889";
        let latitude = props.forecastData.lat;
        let longitude = props.forecastData.lon;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`

        axios.get(apiUrl).then(handleResponse);

        return null;
    }

    
}