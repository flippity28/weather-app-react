import React from "react";
import TodayDetails from "./todaydetails.js";
import "./todaydetails.css";
import TodayCurrent from "./todaycurrent.js";
import "./todaycurrent.css";

export default function WeatherToday() {
  return (
    <div className="weather-today card-deck row-cols-1">
      <div className="card card-today col-sm-6">
        <div className="card-body-one">
          <TodayCurrent />
        </div>
      </div>
      <div className="card card-today col-sm-6">
        <div className="card-body-two">
          <TodayDetails />
        </div>
      </div>
    </div>
  );
}
