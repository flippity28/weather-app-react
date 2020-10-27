import React from "react";

export default function TodayCurrent(props) {
    return (
    <div className="card-deck row-cols-1">
        <div className="card card-current col-sm-6">
             <h5>city</h5>
            <h6>date</h6>
            <div  className="card-text">
              <div className="row">
              <div className="today-icon col-6">
                <i className="fas fa-info "></i></div>
               <div className="current-temp col-6">°C
                </div>
                           <div className="card-text row col-12"> </div>
                  <div className="card-text row col-12">Feels like °C
                  </div> 
                  </div>
            </div>
            
        </div>
      
        <div className="card card-today col-sm-6">
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
           </div>)
   }
