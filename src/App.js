import React from 'react';
import './App.css';
import Header from "./header.js";
import "./header.css";
import "./searchlocation.css";
import WeatherToday from "./weathertoday.js";
import "./weathertoday.css";
import FiveDayForecast from "./fivedayforecast.js";
import "./fivedayforecast.css";
import MoreInfo from "./moreinfo.js";
import "./moreinfo.css";
import UnitConversion from "./unitconversion.js";
import "./unitconversion.css";
import Footer from "./footer.js";
import "./footer.css";

export default function  App() {
  return (
    <div className="App container-sm">
      <Header />
       <WeatherToday />
      <FiveDayForecast />
      <MoreInfo />
      <UnitConversion />
      <Footer />
     
    </div>
  );
}


