import React from "react";

export default function DayThree(props) {
   function formatTemp(value){
    if (props.unit === "F") {return (Math.round((value*9/5)+32));
    }
else {
  return value}}

  
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
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];
  
  let day = days[date.getDay()];
  let currentDate = ordinal(date.getDate());
   let formattedDate = `${day} ${currentDate}`;
  return formattedDate;
}
  function formatIcon(){
  let weatherId = props.data.dayThreeId
if (
    weatherId === 502 ||
    weatherId === 503 ||
    weatherId === 504 ||
    weatherId === 522 ||
    weatherId === 531
  ) {
    return (<i className="fas fa-cloud-showers-heavy"></i>);
  
  } else if (weatherId === 804 || weatherId === 803) {
    return (<i className="fas fa-cloud"></i>);
    
  } else if (weatherId === 801 || weatherId === 802) {
    return(<i className ="fas fa-cloud-sun"></i>);
    
  } else if (weatherId === 800) {
    return(<i className="fas fa-sun"></i>);
   
  } else if (
    (weatherId > 599 && weatherId < 623) ||
    weatherId === 511
  ) {
    return(<i className ="fas fa-snowflake"></i>);
    
  } else if (
    weatherId === 500 ||
    weatherId === 501 ||
    weatherId === 520 ||
    weatherId === 521 ||
    (weatherId > 299 && weatherId < 322)
  ) {
    return(<i className="fas fa-cloud-rain"></i>);
   
  } else if (weatherId > 199 && weatherId < 233) {
    return(<i className ="fas fa-bolt"></i>);
    
  } else if (weatherId > 699 && weatherId < 782) {
    return(<id className="fas fa-smog"></id>);
    }
    else return (<i className="fas fa-info"></i>)}
  return (
    
    <div className="day-forecast card-body-one">
      <h5 className="card-title-forecast">
                {formatDate(new Date(props.data.dayThreeTimestamp))}
              </h5>
      <div className="card-text">
        <div className="five-day-symbol">{formatIcon(props.data.dayThreeId)}
        
        </div>
        <div className="five-day-temp">{formatTemp(props.data.dayThreeHigh)} / {formatTemp(props.data.dayThreeLow)} °{props.unit}</div>
         </div>
    </div>
  );
}
