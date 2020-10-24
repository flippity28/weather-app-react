import React from "react";

export default function TodayDetails() {
  return (
    <div className="today-details">
      <h5 className="card-title-two">Today's Forecast</h5>
      <div className="card-text todays-forecast">
        <div>
          <i className="fas fa-info-circle"></i>{" "}
          <span id="today-description">Cloudy with some showers</span>{" "}
        </div>
        <div>
          <i className="fas fa-temperature-high"></i> Highs of{" "}
          <span id="today-high">17</span>
          <span class="unit"> °C</span>{" "}
        </div>
        <div>
          <i className="fas fa-temperature-low"></i> Lows of{" "}
          <span id="today-low">10</span>
          <span className="unit"> °C</span>
        </div>
        <div>
          {" "}
          <i className="fas fa-umbrella"></i>{" "}
          <span id="today-rain-percent">50</span>% chance of precipitation{" "}
        </div>
        <div>
          {" "}
          <i className="fas fa-wind"></i> Windspeed{" "}
          <span id="today-windspeed">15</span> <span>km/h</span>
        </div>
        <div>
          {" "}
          <i className="fas fa-sun"></i> Sunrise at{" "}
          <span id="today-sunrise">05:55</span>{" "}
        </div>
        <div>
          {" "}
          <i className="fas fa-moon"></i> Sunset at{" "}
          <span id="today-sunset">20:40 </span>
        </div>
      </div>
    </div>
  );
}
