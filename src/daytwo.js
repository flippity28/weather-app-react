import React from "react";

export default function DayTwo() {
  return (
    <div className="card-body-one">
      <h5 className="card-title">
        <div className="day" id="day-two">
          Fri 5<sup>th</sup>
        </div>
      </h5>
      <div className="card-text">
        <div>
          <i
            className="fas fa-cloud-rain five-day-symbol"
            id="day-two-icon"
          ></i>
        </div>
        <span className="five-day-temp">
          <span id="day-two-high">15</span> / <span id="day-two-low">10</span>
          <span className="unit"> °C</span>
        </span>
      </div>
    </div>
  );
}
