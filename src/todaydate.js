import React, {useState} from "react";


export default function TodayDate(){
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
const [day, setDay] = useState("");
const [month, setMonth] = useState("");
const [todayDate, setTodayDate] = useState();
//const [ordinal, setOrdinal] = useState("");
const [hour, setHour] = useState();
const [min, setMin] = useState();
const [loaded, setLoaded]= useState(false);
const [ordinal, setOrdinal] = useState("")

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;

}

function formatDate(date){
setDay(days[date.getDay()]);
setMonth(months[date.getMonth()]);
setTodayDate(date.getDate());
setHour(date.getHours());
setMin(addZero(date.getMinutes()))
if (date.getDate() === 1 || date.getDate() === 21 || date.getDate() === 31) {
    setOrdinal("st");
  } else if (date.getDate() === 2 || date.getDate() === 22) {
    setOrdinal("nd");
  } else if (date.getDate() === 3 || date.getDate() === 23) {
    setOrdinal("rd");
  } else {
    setOrdinal("th")
  }

}


if (loaded){
return(<div>{hour}:{min} {day} {todayDate}<sup>{ordinal}</sup> {month} </div> )}
else {setLoaded(true);
formatDate(new Date());
}}