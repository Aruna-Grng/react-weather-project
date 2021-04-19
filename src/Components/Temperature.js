import React from "react";

export default function Temperature() {
    return (
        <div className="col-md-2 text-center">
            <span style={{ fontSize: 43, opacity: .7, fontWeight: 650 }}>21°</span>
            <span style={{ position: "relative", top: -16, opacity: .7, fontWeight: 650 }}>C</span>
        </div>
    )
}