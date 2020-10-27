import React, {useState} from "react";
import axios from "axios";
import Footer from "./footer.js"
import "./footer.css";
import UnitConversion from "./unitconversion.js";
import "./unitconversion.css";
import MoreInfo from "./moreinfo.js";
import "./moreinfo.css";
import TodayDate from "./todaydate.js"



export default function SearchLocation() {

  const [city, setCity] = useState("London");
  const [cityName, updateCityName]= useState("London");
  const [country, updateCountry] = useState("GB");
  //const [dataLoaded, setDataLoaded] = useState(false)
  const [weather, updateWeather]= useState({})
  const [date, updateDate] = useState({})


 // if (dataLoaded){} else {axios.get(apiUrl).then(getCoords);
   // setDataLoaded(true)}
let apiKey = `e024c14bd2f0eae086692698825b45e0`
  function handleSubmit(event){event.preventDefault();
    if (city.length> 0) {
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
   axios.get(apiUrl).then(getCoords)
}   else{alert("Please search for a city")}
}

  function updateCity(event){setCity(event.target.value)}

  function getCoords (response){
  console.log(response);
  updateCityName(response.data.name)
  updateCountry(response.data.sys.country)
  let lat = response.data.coord.lat
  let long = response.data.coord.lon
  let apiUrlTwo = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly&appid=${apiKey}
&units=metric`;
  axios.get(apiUrlTwo).then(showWeatherForecast);
      }

function getOrdinal(value){ if (value === 1 || value === 21 || value === 31) {
    return (value + "st")}
   else if (value === 2 || value === 22) {
   return (value +"nd");
  } else if (value=== 3 || value === 23) {
    return (value +"rd");
  } else {
    return(value + "th")
  } }
  function showDates(date)  {let days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
  ]; 
  let newDate = new Date (date)
   let day = days[newDate.getDay()]
     let dateValue = getOrdinal(newDate.getDate())
     return (<div>{day} {dateValue}</div>)}
  
     

  function showWeatherForecast(response){
    //setDataLoaded(true);
  console.log(response);
  let todaySunriseUnix = response.data.daily[0].sunrise;
  let timeSunrise = new Date(todaySunriseUnix * 1000);
  let hoursSunrise = addZero(timeSunrise.getHours());
  let minutesSunrise = addZero(timeSunrise.getMinutes());
  let todaySunsetUnix = response.data.daily[0].sunset;
  let timeSunset = new Date(todaySunsetUnix * 1000);
  let hoursSunset = addZero(timeSunset.getHours());
  let minutesSunset = addZero(timeSunset.getMinutes());
 
   
 
updateWeather({currentTemp: Math.round(response.data.current.temp),
currentFeelsTemp: Math.round(response.data.current.feels_like),
currentDescription: response.data.current.weather[0].description,
todayDescription: response.data.daily[0].weather[0].description,
todayHighTemp: Math.round(response.data.daily[0].temp.max),
  todayLowTemp: Math.round(response.data.daily[0].temp.min),
  todayPrecip: Math.round(response.data.daily[0].pop * 100),
  todayWindspeed: Math.round(response.data.daily[0].wind_speed * 3.6),
  sunrise:`${hoursSunrise}:${minutesSunrise}`,
  sunset: `${hoursSunset}:${minutesSunset}`,})
  
     updateDate({dateOne: showDates(1000*response.data.daily[1].dt)})
//console.log(date.dateOne)
  }

 function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
let searchForm =
    <div className="search-location row">
      <div className="col-3"> </div>
      <form className=" form-group location-search-form col-sm-6" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type a location"
          autoFocus="on"
          autoComplete="off" 
          onChange={updateCity}
        />
        <input type="submit" id="search-button" value="Search" />
       
      </form> <button className="my-location">
          <i className="fas fa-map-marker-alt"></i>
        </button>
    </div>
   
  
   
return (
<div> 
  {searchForm}
<div className="card-deck row-cols-1">
        <div className="card card-current col-sm-6">
             <h5>{cityName}, {country}</h5>
            <h6><TodayDate/></h6>
            <div  className="card-text">
              <div className="row">
              <div className="today-icon col-6">
                <i className="fas fa-info "></i></div>
               <div className="current-temp col-6">{weather.currentTemp}°C
                </div>
                           <div className="card-text row col-12"> {weather.currentDescription}</div>
                  <div className="card-text row col-12">Feels like {weather.currentFeelsTemp}°C
                  </div> 
                  </div>
            </div>
            
        </div>
      
        <div className="card card-today col-sm-6">
           <h5>Today's Forecast</h5>
            <div className="card-text todays-forecast">
              <div> <i className="fas fa-info-circle"></i> {weather.todayDescription}</div>
               <div><i className="fas fa-temperature-high"></i> Highs of {weather.todayHighTemp}°C</div>
                <div><i className="fas fa-temperature-low"></i> Lows of {weather.todayLowTemp}°C</div>
                <div><i className="fas fa-umbrella"></i> {weather.todayPrecip}% chance of precipitation</div>
                <div><i className="fas fa-wind"></i> Windspeed {weather.todayWindspeed} km/h </div>
                <div><i className="fas fa-sun"></i> Sunrise at {weather.sunrise}</div>
                <div> <i className="fas fa-moon"></i> Sunset at {weather.sunset}</div>
                
            </div>
          </div>
        </div>

       <div className="card-deck row-cols-1">
        <div className="card col-sm-6">
               <h6>
                 {date.dateOne}</h6>
               <div  className="card-text">
                  <i className="fas fa-cloud-rain"></i>
                    <div>15°C</div></div>
        </div>
        <div className="card col-sm-6">
              <h6>{date.dateOne}</h6>
                <div  className="card-text">
                  <i className="fas fa-cloud"></i>
                  <div>17°C</div>
                </div>
          </div>
       
        <div className="card col-sm-6">
            <h6></h6>
                <div  className="card-text">
                  <i className="fas fa-cloud-sun"></i>
                   <div>18°C</div> 
                     
          </div>
        </div>
        <div className="card col-sm-6">
         
            <h6></h6>
                <div  className="card-text">
                  <i className="fas fa-sun"></i>
                    <div>20°C</div>
                </div>     
        
        </div>  
        <div className="card col-sm-6">
            <h6></h6>
                <div  className="card-text">
                  <i className="fas fa-smog"></i>
                   <div>18°C</div>  
                </div>            
          </div>  
        </div>
         <MoreInfo/>
         <UnitConversion/>
         <Footer />
        </div>
       
     
  );



}