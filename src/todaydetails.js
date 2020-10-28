import React from "react";

export default function TodayDetails() {
  return ( <div className="today-details col-sm-6 card ">
    <div className="card-today ">
           <h5>Today's Forecast</h5>
            <div className="card-text todays-forecast">
              <div> <i className="fas fa-info-circle"></i> weather description</div>
               <div><i className="fas fa-temperature-high"></i> Highs of °C</div>
                <div><i className="fas fa-temperature-low"></i> Lows of °C</div>
                <div><i className="fas fa-umbrella"></i> % chance of precipitation</div>
                <div><i className="fas fa-wind"></i> Windspeed  km/h </div>
                <div><i className="fas fa-sun"></i> Sunrise at</div>
                <div> <i className="fas fa-moon"></i> Sunset at </div>
                
            </div>
          </div>
           </div>
  );
}
