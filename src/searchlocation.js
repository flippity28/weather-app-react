import React, {useState} from "react";
import axios from "axios";
import Footer from "./footer.js"
import "./footer.css";
import UnitConversion from "./unitconversion.js";
import "./unitconversion.css";
import MoreInfo from "./moreinfo.js";
import "./moreinfo.css";
import TodayCurrent from "./todaycurrent.js"
import "./todaycurrent.css"
import TodayDetails from "./todaydetails.js"
import "./todaydetails.css"
import FiveDayForecast from "./fivedayforecast.js"
import "./fivedayforecast.css"
import "./searchlocation.css"


export default function SearchLocation() {

  const [city, setCity] = useState("London");
  const [dataLoaded, setDataLoaded] = useState(false)
  const [currentWeather, setCurrentWeather] = useState({})
  const [weatherForecast, setWeatherForecast]= useState({})
  const apiKey = `e024c14bd2f0eae086692698825b45e0`


function updateCity(event){setCity(event.target.value)}


function handleSubmit(event){event.preventDefault();
    if (city.length> 0) {search()
      
   }   else{alert("Please search for a city")}
}

   function search(){let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
   axios.get(apiUrl).then(searchForecastCity)
   setDataLoaded (true)}

  function searchForecastCity (response){
  let lati = response.data.coord.lat;
  let long = response.data.coord.lon;
  let apiUrlOne = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=${apiKey}&units=metric`;
  let apiUrlTwo = `https://api.openweathermap.org/data/2.5/onecall?lat=${lati}&lon=${long}&exclude=minutely,hourly&appid=${apiKey}&units=metric`;
  axios.get(apiUrlOne).then(updateCurrentWeather);
  axios.get(apiUrlTwo).then(updateWeatherForecast);
  
      }
      function searchForecastLocation (location){ ;
  let lat = location.coords.latitude;
  let lon=location.coords.longitude;
  let apiUrlOne = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  let apiUrlTwo = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${apiKey}&units=metric`;
  axios.get(apiUrlOne).then(updateCurrentWeather);
  axios.get(apiUrlTwo).then(updateWeatherForecast);
 
      }
  
 
  function getLocation(event){event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchForecastLocation);  
   }

function updateCurrentWeather(response){console.log(response);
setCurrentWeather({cityName: response.data.name,
  country: response.data.sys.country,
  currentTemp: Math.round(response.data.main.temp),
  currentFeelsTemp: Math.round(response.data.main.feels_like),
  currentDescription: response.data.weather[0].description,
  timestamp:(response.data.dt)
})}

  function updateWeatherForecast(response){
   console.log(response);
  setWeatherForecast({
  todayDescription: response.data.daily[0].weather[0].description,
  todayHighTemp: Math.round(response.data.daily[0].temp.max),
  todayLowTemp: Math.round(response.data.daily[0].temp.min),
  todayPrecip: Math.round(response.data.daily[0].pop * 100),
  todayWindspeed: Math.round(response.data.daily[0].wind_speed * 3.6),
  sunrise:new Date(1000*response.data.daily[0].sunrise),
  sunset: new Date( 1000*response.data.daily[0].sunset),
     })
    
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
       <button className="my-location" onClick={getLocation}>
          <i className="fas fa-map-marker-alt"></i>
        </button>
      </form> 
    </div>
   
  
if (dataLoaded) 
return (<div className="search-location">  <div>{searchForm} </div>
<div className="card-deck row-cols-1">
  <TodayCurrent data={currentWeather}/>
  <TodayDetails data={weatherForecast}/></div>
 
 <FiveDayForecast data={weatherForecast}/>
       
         <MoreInfo/>
         <UnitConversion/>
         <Footer />
        </div> 
        );
          
   else {search();
    return (<div>{searchForm}</div>);

}

}