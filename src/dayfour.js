import React from "react";

export default function DayFour() {
  return (
    <div className="card-body-one">
      <h5 className="card-title">
        <div className="day" id="day-five">
          Mon 7<sup>th</sup>
        </div>
      </h5>
      <div className="card-text">
        <div>
          <i
            className="fas fa-cloud-rain five-day-symbol"
            id="day-four-icon"
          ></i>
        </div>
        <span className="five-day-temp">
          <span id="day-four-high">15</span> / <span id="day-four-low">10</span>
          <span className="unit"> °C</span>
        </span>
      </div>
    </div>
  );
}
