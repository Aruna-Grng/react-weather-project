import React from "react";
import "./WeatherSearch.css";

export default function WeatherSearch() {
    return (
        <div>
            <form>
                <input className="city-name" style={{ backgroundColor: '#eeeeee' }} type="search" placeholder="Enter city name..." /> {""}
                <input className="search-btn" type="submit" value="Search" /> 
            </form>
        </div>
    )
}