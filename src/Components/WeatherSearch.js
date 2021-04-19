import axios from "axios";
// import React, { useState } from "react";
import "./WeatherSearch.css";

export default function WeatherSearch() {
    // const [city, setCity] = useState(props.city);

    // let city = "Dallas";
    // let apiKey = "28a9b26783d5b53ed2f25d7dd7717889";
    // let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    // axios.get(apiUrl).then(search);

    // function search(response) {
    //     console.log(response.data);
    // }
    
    return (
        <div>
            <form>
                <input 
                className="city-name" 
                style={{ backgroundColor: '#eeeeee' }} 
                type="search" 
                placeholder="Enter city name..."
                autoFocus="on" /> {""}

                <input 
                className="search-btn" 
                type="submit" 
                value="Search" /> 
            </form>
        </div>
    );
}


    // function handleSearch(event) {
    //     event.preventDefault();
        

    // function handleCityUpdate(event) {
    //     setCity(event.target.value);
    // }