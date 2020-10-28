import React, {useState} from "react";

export default function TodayCurrent(props) {
  function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
function ordinal(currentDate) {
  if (currentDate === 1 || currentDate === 21 || currentDate === 31) {
    return currentDate + "st";
  } else if (currentDate === 2 || currentDate === 22) {
    return currentDate + "nd";
  } else if (currentDate === 3 || currentDate === 23) {
    return currentDate + "rd";
  } else {
    return currentDate + "th";
  }
}
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = days[date.getDay()];
  let month = months[date.getMonth()];
  let currentDate = ordinal(date.getDate());
  let hour = date.getHours();
  let min = addZero(date.getMinutes());
  let formattedDate = `${hour}:${min} ${day} ${currentDate} ${month}`;
  return formattedDate;
}


    return (
    <div className="today-current col-sm-6 card">
        <div className="card-current ">
             <h5>{props.data.cityName}, {props.data.country}</h5>
            <h6>{formatDate(new Date((props.data.timestamp)))}</h6>
            <div  className="card-text">
              <div className="row">
              <div className=" col-6"> <i className="fas fa-info today-icon"></i></div>
               <div className="current-temp col-6">{props.data.currentTemp}°C</div>
               </div>
                  <div className="today-description row col-12"> {props.data.currentDescription}</div>
                  <div className="today-feels row col-12">Feels like {props.data.currentFeelsTemp}°C
                  </div> 
                  
            </div>
            
        </div>
        </div>)
      
       
           
   }
