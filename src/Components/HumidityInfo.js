import React from "react";

export default function HumidityInfo(props) {
    return (
        <div className="col-md-2 text-center">
            <span style={{ fontWeight:"bold", opacity: .6 }}>Humidity</span>{" "}
            <span style={{ fontWeight: 600, fontSize: 14, opacity: .6 }}>{props.humidity}%</span>
        </div>
    )
}