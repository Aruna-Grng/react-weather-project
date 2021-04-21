import React from "react";

export default function Temperature(props) {
    return (
        <div className="col-md-2 text-center">
            <span style={{ fontSize: 43, opacity: .7, fontWeight: 650 }}>{Math.round(props.displayTemperature)}°</span>
            <span style={{ position: "relative", top: -16, opacity: .7, fontWeight: 650 }}>C</span>
        </div>
    )
}