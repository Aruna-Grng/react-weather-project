import React from "react";
import "./Forecast.css";
import IconDisplay from "./IconDisplay";
import axios from "axios";


export default function Forecast(props) {

    const apiKey = "28a9b26783d5b53ed2f25d7dd7717889";
    let latitude = props.forecastData.lat;
    let longitude = props.forecastData.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`

    axios.get(apiUrl).then(handleResponse);

    function handleResponse(response) {
        // console.log(response.data);
    }

    console.log(props);

    return (
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <p className="forecast-Day">Tue</p>
                        <IconDisplay image="01d" size={60} />
                    
                        <p className="forecast-Temperature">
                            <span className="high-Temperature">{Math.round(props.forecastData.maxTemperature)}°</span>
                            <span className="low-Temperature">| {Math.round(props.forecastData.minTemperature)}°</span>
                        </p>
                    </div>
                </div>
            </div>
            {/* <div className="col">
                <div className="card">
                    <div className="card-body">
                        <p className="forecast-Day">Wed</p>
                        <p> 
                            <ReactAnimatedWeather 
                                    icon="PARTLY_CLOUDY_DAY"
                                    color="#eeeeee"
                                    size={60}
                                    animate={true}
                                    />  
                        </p>
                        <p className="forecast-Temperature"><span className="high-Temperature">22°</span> | <span className="low-Temperature">13°</span></p>                           
                    </div>
                </div>
            </div> */}
            {/* <div className="col">
                <div className="card">
                    <div className="card-body">
                        <p className="forecast-Day">Thur</p> 
                        <p>
                            <ReactAnimatedWeather 
                                    icon="PARTLY_CLOUDY_DAY"
                                    color="#eeeeee"
                                    size={60}
                                    animate={true}
                                    /> 
                        </p>
                        <p className="forecast-Temperature"><span className="high-Temperature">26°</span> | <span className="low-Temperature">15°</span></p>                    
                    </div>
                </div>
            </div> */}
            {/* <div className="col">
                <div className="card">
                    <div className="card-body">
                        <p className="forecast-Day">Fri</p>
                        <p>
                            <ReactAnimatedWeather 
                                    icon="CLEAR_DAY"
                                    color="#eeeeee"
                                    size={60}
                                    animate={true}
                                    />
                        </p> 
                        <p className="forecast-Temperature"><span className="high-Temperature">30°</span> | <span className="low-Temperature">18°</span></p>             
                    </div>
                </div>
            </div> */}
            {/* <div className="col">
                <div className="card">
                    <div className="card-body">
                        <p>Sat</p>
                        <p>
                            <ReactAnimatedWeather 
                                    icon="CLEAR_DAY"
                                    color="#eeeeee"
                                    size={60}
                                    animate={true}
                                    />
                        </p>
                        <p className="forecast-Temperature"><span className="high-Temperature">24°</span> | <span className="low-Temperature">11°</span></p>  
                    </div>
                </div>
            </div> */}
        </div>
    );
}