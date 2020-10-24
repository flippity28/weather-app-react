import React from 'react';
import './App.css';
import WeatherForecast from "./weatherforecast.js";
import "./header.css";
import "./searchlocation.css";
import WeatherToday from "./weathertoday.js";
import "./weathertoday.css";
import FiveDayForecast from "./fivedayforecast.js";
import "./fivedayforecast.css";





export default function  App() {
  return (
    <div className="App container-sm">
      <WeatherForecast />
           </div>
  );
}


