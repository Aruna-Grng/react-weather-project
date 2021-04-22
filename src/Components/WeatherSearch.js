import axios from "axios";
import React, { useState } from "react";
import CityDisplay from "./CityDisplay";
import "./WeatherSearch.css";

export default function WeatherSearch(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleSearch(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.name,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            humidity: response.data.main.humidity
        });
    }

    function search() {
        const apiKey = "28a9b26783d5b53ed2f25d7dd7717889";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleSearch);
    }
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input 
                    className="city-name" 
                    style={{ backgroundColor: '#eeeeee' }} 
                    type="search" 
                    placeholder="Enter city name..."
                    autoFocus="on"
                    onChange={handleCityChange} /> {""}

                    <input 
                    className="search-btn" 
                    type="submit" 
                    value="Search" /> 
                </form>
                <CityDisplay data={weatherData} />
            </div>
    );
    } else {
        search();

        return "Loading...";
    } 
}


    