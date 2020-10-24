import React from "react";

export default function DayOne() {
  return (
    <div className="card-body-one">
      <h5 className="card-title">
        <div className="day" id="day-one">
          Fri 4<sup>th</sup>
        </div>
      </h5>
      <div className="card-text">
        <div>
          <i
            className="fas fa-cloud-rain five-day-symbol"
            id="day-one-icon"
          ></i>
        </div>
        <span className="five-day-temp">
          <span id="day-one-high">15</span> / <span id="day-one-low">10</span>
          <span className="unit"> °C</span>
        </span>
      </div>
    </div>
  );
}
