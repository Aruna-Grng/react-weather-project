import React from "react";

export default function Time() {

    function showDays() {
        let date = new Date();
        let day = date.getDay();
        
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        days = days[day];

        return days;
    }

    return (
        <div>
            <h3 style={{ textAlign: "center", opacity: 0.6 }}>{showDays()}</h3>
        </div>
    );
}