import React from "react";

export default function WindSpeed(props) {
    return (
        <div className="col-md-2 text-center">
            <span style={{ fontWeight:"bold", opacity: .6 }}>Wind</span>{" "}
            <span style={{ fontWeight: 600, fontSize: 14, opacity: .6 }}>{props.wind}km/h</span>
        </div>
    )
}