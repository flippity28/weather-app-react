import React from "react";
import DayOne from "./dayone.js";
import DayTwo from "./daytwo.js";
import DayThree from "./daythree.js";
import DayFour from "./dayfour.js";
import DayFive from "./dayfive.js";
import "./dayforecast.css"

export default function FiveDayForecast(props) {
  return (
    <div className="card-deck row-cols-1 five-day-forecast">
      <div className="card card-one five-day col-sm-6">
        <DayOne data={props.data} unit={props.unit}/>
      </div>
      <div className="card card-two five-day col-sm-6">
        <DayTwo data={props.data} unit={props.unit}/>
      </div>
      <div className="card card-three five-day col-sm-6">
        <DayThree data={props.data} unit={props.unit}/>
        </div>
      <div className="card card-four five-day col-sm-6">
        <DayFour data={props.data} unit={props.unit}/>
      </div>
      <div className="card card-five five-day col-sm-6">
        <DayFive data={props.data} unit={props.unit}/>
      </div>
    </div>
  );
}
