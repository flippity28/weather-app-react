import React from "react";

export default function DayThree() {
  return (
    <div className="card-body-one">
      <h5 className="card-title">
        <div className="day" id="day-three">
          Tue 8<sup>th</sup>
        </div>
      </h5>
      <div className="card-text">
        <div>
          <i
            className="fas fa-cloud-rain five-day-symbol"
            id="day-three-icon"
          ></i>
        </div>
        <span className="five-day-temp">
          <span id="day-three-high">15</span> /{" "}
          <span id="day-three-low">10</span>
          <span className="unit"> °C</span>
        </span>
      </div>
    </div>
  );
}
