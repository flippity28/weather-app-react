import React from "react";

export default function TodayDetails(props) {
  function formatTemp(value){
    if (props.unit === "F") {return (Math.round((value*9/5)+32));
    }
else {
  return value}}

  function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
  let sunrise = new Date(props.data.sunrise);
  let hoursSunrise = addZero(sunrise.getHours());
  let minutesSunrise = addZero(sunrise.getMinutes());
  let sunset = new Date(props.data.sunset);
  let hoursSunset = addZero(sunset.getHours());
  let minutesSunset = addZero(sunset.getMinutes());

  return ( <div className="today-details col-sm-6 card ">
    <div className="card-today ">
           <h5>Today's Forecast</h5>
            <div className="card-text todays-forecast">
              <div className="today-description"> <i className="fas fa-info-circle"></i> {props.data.todayDescription}</div>
               <div><i className="fas fa-temperature-high"></i> Highs of {formatTemp(props.data.todayHighTemp)}°{props.unit}</div>
                <div><i className="fas fa-temperature-low"></i> Lows of {formatTemp(props.data.todayLowTemp)}°{props.unit}</div>
                <div><i className="fas fa-umbrella"></i> {props.data.todayPrecip}% Chance of Precipitation</div>
                <div><i className="fas fa-wind"></i> Windspeed  {props.data.todayWindspeed} km/h </div>
                <div><i className="fas fa-sun"></i> Sunrise at {hoursSunrise}:{minutesSunrise}</div>
                <div> <i className="fas fa-moon"></i> Sunset at {hoursSunset}:{minutesSunset}</div>
                
            </div>
          </div>
           </div>
  );
}
