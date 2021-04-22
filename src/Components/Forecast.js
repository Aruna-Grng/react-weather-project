import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";


export default function Forecast(props) {

    let [loaded, setLoaded] = useState(false);
    let [forecastInfo, setForecastInfo] = useState(null);

    function handleResponse(response) {
        console.log(response.data);
        setForecastInfo(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        return (
            <div className="row">
                {forecastInfo.map(function(dailyForecast, index) {
                    if (index > 0 && index < 6) {
                        return (
                            <div className="col" key={index}>
                                <div className="card">
                                    <div className="card-body" >
                                    <WeatherForecastDay data={dailyForecast} />
                                    </div>
                                </div>
                            </div>    
                        );
                    }
                })} 
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