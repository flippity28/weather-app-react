import React from "react";

export default function DayFive() {
  return (
    <div className="card-body-one">
      <h5 className="card-title">
        <div className="day" id="day-five">
          Tue 8<sup>th</sup>
        </div>
      </h5>
      <div className="card-text">
        <div>
          <i
            className="fas fa-cloud-rain five-day-symbol"
            id="day-five-icon"
          ></i>
        </div>
        <span className="five-day-temp">
          <span id="day-five-high">15</span> / <span id="day-five-low">10</span>
          <span className="unit"> °C</span>
        </span>
      </div>
    </div>
  );
}
