import React, {useState} from "react";
import axios from "axios";
import Footer from "./footer.js"
import "./footer.css";
import UnitConversion from "./unitconversion.js";
import "./unitconversion.css";
import MoreInfo from "./moreinfo.js";
import "./moreinfo.css";

export default function SearchLocation() {

  const [city, setCity] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false)
  const [currentWeather, updateCurrentWeather]= useState({})

  function handleSubmit(event){event.preventDefault()
  if (city.length> 0) {let apiKey = "f5937ab22539bc6268f9a982f0955523"
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(displayWeather)
} else{alert("Please search for a city")}}

  function updateCity(event){setCity(event.target.value)}

  function displayWeather (response){console.log(response)
  setDataLoaded(true)
  updateCurrentWeather({temperature: Math.round(response.data.main.temp),
    feels_temperature: Math.round(response.data.main.feels_like),
    description: response.data.weather[0].description,
    })
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
    return currentDate + "th"
  }
}
let currentDate = formatDate(new Date())
 
let searchForm =
    <div className="search-location row">
      <div className="col-3"> </div>
      <form className=" form-group location-search-form col-sm-6" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type a location"
          autoFocus="on"
          autoComplete="off" onChange={updateCity}
        />
        <input type="submit" id="search-button" value="Search" />
       
      </form> <button className="my-location">
          <i className="fas fa-map-marker-alt"></i>
        </button>
    </div>
    
    if (dataLoaded)
  
{return (
<div> 
  {searchForm}
<div className="card-deck row-cols-1">
        <div className="card card-current col-sm-6">
             <h5>{city}</h5>
            <h6>{currentDate}</h6>
            <div  className="card">
              <div className="row">
              <div className="today-icon col-6">
                <i className="fas fa-info "></i></div>
               <div className="current-temp col-6">{currentWeather.temperature}°C
                </div>
                </div>
                <div className="card-text row col-12"> Cloudy</div>
                  <div className="card-text row col-12">Feels like {currentWeather.feels_temperature}°C
                  </div>
                  
            </div>
            
        </div>
      
        <div class="card card-today col-sm-6">
           <h5>Today's Forecast</h5>
            <div class="card-text todays-forecast">
              <div> <i class="fas fa-info-circle"></i> Cloudy with some showers</div>
               <div><i class="fas fa-temperature-high"></i> Highs of 17 °C</div>
                <div><i class="fas fa-temperature-low"></i> Lows of 10°C</div>
                <div><i class="fas fa-umbrella"></i> 50% chance of precipitation</div>
                <div><i class="fas fa-wind"></i> Windspeed 15 km/h </div>
                <div><i class="fas fa-sun"></i> Sunrise at 05:55</div>
                <div> <i class="fas fa-moon"></i> Sunset at 20:40</div>
                
            </div>
          </div>
        </div>

       <div class="card-deck row-cols-1">
        <div class="card col-sm-6">
               <h5>Friday 4th</h5>
               <div  class="card-text">
                  <i class="fas fa-cloud-rain"></i>
                    15C</div>
        </div>
        <div class="card col-sm-6">
              <h5>Saturday 5th</h5>
                <div  class="card-text">
                  <i class="fas fa-cloud"></i>
                  17°C
                </div>
          </div>
       
        <div className="card col-sm-6">
            <h5>Sunday 6th</h5>
                <div  className="card-text">
                  <i className="fas fa-cloud-sun"></i>
                    18°C
                     
          </div>
        </div>
        <div class="card col-sm-6">
         
            <h5>Monday 7th</h5>
                <div  class="card-text">
                  <i class="fas fa-sun"></i>
                    20°C
                </div>     
        
        </div>  
        <div class="card col-sm-6">
            <h5>Tuesday 8th</h5>
                <div  class="card-text">
                  <i class="fas fa-smog"></i>
                    18°C 
                </div>            
          </div>  
        </div>
        <UnitConversion/>
        <MoreInfo/>
        </div>
       
     
  );} else {return<div>{searchForm}
    <Footer />
  </div>}



}