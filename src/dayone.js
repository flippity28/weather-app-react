import React from "react";

export default function DayOne() {
  return (
    <div className="day-forecast card-body-one">
      <h5 className="card-title-forecast">
                Date
              </h5>
      <div className="card-text">
        <div>
          <i
            className="fas fa-cloud-rain five-day-symbol"
            id="day-one-icon"
          ></i>
        </div>
        <div className="five-day-temp">10/15 </div>
         </div>
    </div>
  );
}
