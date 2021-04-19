import React from "react";
import "./CityDisplay.css";
import ReactAnimatedWeather from "react-animated-weather";
import HumidityInfo from "./HumidityInfo";
import Temperature from "./Temperature";
import WindSpeed from "./WindSpeed";


export default function CityDisplay(props) {
    return(
        <div>
            <h1 className="city">Dallas</h1>
            <h2>Sunny</h2>
            <p>
                <ReactAnimatedWeather
                    icon={props.icon}
                    color="#eeeeee"
                    size={props.size}
                    animate={true}
                />
            </p>
            <div className="row justify-content-md-center">
                <HumidityInfo />
                <Temperature />
                <WindSpeed />
            </div>
            <hr />
        </div>
    )
}