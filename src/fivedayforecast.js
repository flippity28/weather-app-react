import React from "react";
import DayOne from "./dayone.js";
import DayTwo from "./daytwo.js";
import DayThree from "./daythree.js";
import DayFour from "./dayfour.js";
import DayFive from "./dayfive.js";

export default function FiveDayForecast() {
  return (
    <div className="card-deck row-cols-1 five-day-forecast">
      <div className="card five-day col-sm-6">
        <DayOne />
      </div>
      <div className="card five-day col-sm-6">
        <DayTwo />
      </div>
      <div className="card five-day col-sm-6">
        <DayThree />
      </div>
      <div className="card five-day col-sm-6">
        <DayFour />
      </div>
      <div className="card five-day col-sm-6">
        <DayFive />
      </div>
    </div>
  );
}
