import React from "react";

export default function TodayCurrent(props) {

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
function formatIcon(){
  let todayWeatherId = props.data.weatherId
if (
    todayWeatherId === 502 ||
    todayWeatherId === 503 ||
    todayWeatherId === 504 ||
    todayWeatherId === 522 ||
    todayWeatherId === 531
  ) {
    return (<i className="fas fa-cloud-showers-heavy"></i>);
  
  } else if (todayWeatherId === 804 || todayWeatherId === 803) {
    return (<i className="fas fa-cloud"></i>);
    
  } else if (todayWeatherId === 801 || todayWeatherId === 802) {
    return(<i className ="fas fa-cloud-sun"></i>);
    
  } else if (todayWeatherId === 800) {
    return(<i className="fas fa-sun"></i>);
   
  } else if (
    (todayWeatherId > 599 && todayWeatherId < 623) ||
    todayWeatherId === 511
  ) {
    return(<i className ="fas fa-snowflake"></i>);
    
  } else if (
    todayWeatherId === 500 ||
    todayWeatherId === 501 ||
    todayWeatherId === 520 ||
    todayWeatherId === 521 ||
    (todayWeatherId > 299 && todayWeatherId < 322)
  ) {
    return(<i className="fas fa-cloud-rain"></i>);
   
  } else if (todayWeatherId > 199 && todayWeatherId < 233) {
    return(<i className ="fas fa-bolt"></i>);
    
  } else if (todayWeatherId > 699 && todayWeatherId < 782) {
    return(<id className="fas fa-smog"></id>);
    }
    else return (<i className="fas fa-info"></i>)}

    return (
    <div className="today-current col-sm-6 card">
        <div className="card-current ">
             <h5>{props.data.cityName}, {props.data.country}</h5>
            <h6>{formatDate(new Date((props.data.timestamp)))}</h6>
            <div  className="card-text">
              <div className="row">
              <div className=" col-6  today-icon"> {formatIcon(props.data.weatherId)}</div>
               <div className="current-temp col-6">{formatTemp(props.data.currentTemp)}°{props.unit}</div>
               </div>
                  <div className="today-description row col-12"> {props.data.currentDescription}</div>
                  <div className="today-feels row col-12">Feels like {props.data.currentFeelsTemp}°C
                  </div> 
                  
            </div>
            
        </div>
        </div>)
      
       
           
   }
