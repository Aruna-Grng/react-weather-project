import React, { useState } from "react";

export default function Temperature(props) {
    const [unit, setUnit] = useState("celsius");

    function changeToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    
    }

    function changeToCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function fahrenheit() {
        return (props.displayCelsius * 9/5) + 32 ;
    }

    if (unit === "celsius") {
        return (
        <div className="col-md-3 text-center" style={{ marginTop: -11 }}>
            <span style={{ fontSize: 43, opacity: .7, fontWeight: 650 }}>{Math.round(props.displayCelsius)}</span>
            <span style={{ 
            position: "relative", 
            top: -18, 
            opacity: .7, 
            fontWeight: 650 
            }}>
            °C | <a href="/" onClick={changeToFahrenheit}>°F</a>
        </span>
        </div>
        );
    } else {
         
        return (
            <div className="col-md-3 text-center" style={{ marginTop: -11 }}>
                <span style={{ fontSize: 43, opacity: .7, fontWeight: 650 }}>{Math.round(fahrenheit())}</span>
                <span style={{ 
                    position: "relative", 
                    top: -18, 
                    opacity: .7, 
                    fontWeight: 650 
                    }}>
                    <a href="/" onClick={changeToCelsius}>°C</a> | °F
                </span>
            </div>    
        );
    }   
}