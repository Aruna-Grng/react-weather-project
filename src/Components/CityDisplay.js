import React from "react";
import "./CityDisplay.css";
import HumidityInfo from "./HumidityInfo";
import Temperature from "./Temperature";
import WindSpeed from "./WindSpeed";
import IconDisplay from "./IconDisplay";


export default function CityDisplay(props) {
    return(
        <div>
            <h1 className="city">{props.data.city}</h1>
            <h2 className="text-capitalize">{props.data.description}</h2>
            <IconDisplay image={props.data.icon} />
            <div className="row justify-content-md-center">
                <HumidityInfo humidity={props.data.humidity} />
                <Temperature displayTemperature={props.data.temperature} />
                <WindSpeed wind={props.data.wind} />
            </div>
            <hr />
        </div>
    )
}