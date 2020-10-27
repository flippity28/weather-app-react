import React from "react";

 export default function Date(props){ 
    let dateNow = new Date();  
let futureDate = new Date(dateNow.setDate(dateNow.getDate() + props)).toISOString();

  let days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];
 let day = days[futureDate.getDay()];
 let date = futureDate.getDate()
//const [day, setDay] = useState("");
//const [todayDate, setTodayDate] = useState();
//const [loaded, setLoaded]= useState(false);
//const [ordinal, setOrdinal] = useState("")

return (<div>{day} {date}</div>)



//function formatDate(date){
//setDay(days[date.getDay()]);
//setTodayDate(date.getDate());
//if (date.getDate() === 1 || date.getDate() === 21 || date.getDate() === 31) {
 //   setOrdinal("st");
 // } else if (date.getDate() === 2 || date.getDate() === 22) {
   // setOrdinal("nd");
 // } else if (date.getDate() === 3 || date.getDate() === 23) {
    //setOrdinal("rd");
  //} else {
   // setOrdinal("th")
 // }

}


//if (loaded){
//return(<div>{day} {todayDate}<sup>{ordinal}</sup></div> )}
//else {setLoaded(true);
//formatDate(new Date());
//}}


