import React from "react";

export default function TodayCurrent() {
  return (
    <div className="today-current">
      <h5 className="card-title-one" id="city">
        London
      </h5>
      <h6 className="time-and-date" id="current-date">
        12:27 Thursday 3<sup>rd</sup> September
      </h6>
      <div className="card-text row">
        <i
          className="fas fa-info today-symbol col-6 justify-content-center"
          id="today-icon"
        ></i>
        <p className="temp card-text col-6 justify-content-center">
          <span className="current-temp">12</span>
          <span className="unit"> °C</span>
        </p>
      </div>
      <div
        className="weather-description row col-12 justify-content-center"
        id="current-weather-description"
      >
        Cloudy
      </div>
      <div
        className="weather-description row col-12 justify-content-center"
        id="current-weather-feels-temp"
      >
        Feels like &#160;<span id="feels-like-temp"> 12</span>&#160;
        <span className="unit"> °C</span>
      </div>
    </div>
  );
}
