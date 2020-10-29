import React, {useState} from "react";
import axios from "axios";
import Footer from "./footer.js"
import "./footer.css";
import MoreInfo from "./moreinfo.js";
import "./moreinfo.css";
import TodayCurrent from "./todaycurrent.js"
import "./todaycurrent.css"
import TodayDetails from "./todaydetails.js"
import "./todaydetails.css"
import FiveDayForecast from "./fivedayforecast.js"
import "./fivedayforecast.css"
import "./searchlocation.css"
import Loader from 'react-loader-spinner'


export default function SearchLocation() {

  const [city, setCity] = useState("London");
  const [dataLoaded, setDataLoaded] = useState(false)
  const [currentWeather, setCurrentWeather] = useState({})
  const [weatherForecast, setWeatherForecast]= useState({})
  const apiKey = `e024c14bd2f0eae086692698825b45e0`
  const [unit, setUnit]= useState("C")


function updateCity(event){setCity(event.target.value)}

function errorFunction() {
       alert(
      `Sorry we do not have weather data for ${city}, please try searching for another city`
    )}

function handleSubmit(event){event.preventDefault();
    if (city.length>1) {search()
      
   }   else{alert("Please search for a city")}
}

   function search(){let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
   axios.get(apiUrl).then(searchForecastCity).catch(errorFunction)
  }

  function searchForecastCity (response){ 
  setDataLoaded (true)
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
  timestamp:(1000*response.data.dt),
  weatherId:(response.data.weather[0].id)
})}

  function updateWeatherForecast(response){
   console.log(response);
  setWeatherForecast({
  todayDescription: response.data.daily[0].weather[0].description,
  todayHighTemp: Math.round(response.data.daily[0].temp.max),
  todayLowTemp: Math.round(response.data.daily[0].temp.min),
  todayPrecip: Math.round(response.data.daily[0].pop * 100),
  todayWindspeed: Math.round(response.data.daily[0].wind_speed * 3.6),
  sunrise:(1000*response.data.daily[0].sunrise),
  sunset:(1000*response.data.daily[0].sunset),
  dayOneHigh: Math.round(response.data.daily[1].temp.max),
  dayOneLow: Math.round(response.data.daily[1].temp.min),
  dayTwoHigh: Math.round(response.data.daily[2].temp.max),
  dayTwoLow: Math.round(response.data.daily[2].temp.min),
  dayThreeHigh: Math.round(response.data.daily[3].temp.max),
  dayThreeLow: Math.round(response.data.daily[3].temp.min),
  dayFourHigh: Math.round(response.data.daily[4].temp.max),
  dayFourLow: Math.round(response.data.daily[4].temp.min),
  dayFiveHigh: Math.round(response.data.daily[5].temp.max),
  dayFiveLow: Math.round(response.data.daily[5].temp.min),
  dayOneId:response.data.daily[1].weather[0].id,
  dayTwoId:response.data.daily[2].weather[0].id,
  dayThreeId:response.data.daily[3].weather[0].id,
  dayFourId:response.data.daily[4].weather[0].id,
  dayFiveId:response.data.daily[5].weather[0].id, 
  dayOneTimestamp:(1000*response.data.daily[1].dt),
  dayTwoTimestamp:(1000*response.data.daily[2].dt),
  dayThreeTimestamp:(1000*response.data.daily[3].dt),
  dayFourTimestamp:(1000*response.data.daily[4].dt),
  dayFiveTimestamp:(1000*response.data.daily[5].dt),
})
    
    }
     

  function convertF(event){
    event.preventDefault();
  setUnit("F")}

  function convertC(event){
    event.preventDefault();
  setUnit("C")}

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
  <TodayCurrent data={currentWeather} unit={unit}/>
  <TodayDetails data={weatherForecast} unit={unit}/></div>
  <FiveDayForecast data={weatherForecast} unit={unit}/>
  <MoreInfo data={currentWeather}/>
        
      <div
        className="unit-conversion btn-group row col-4 offset-4"
        role="group"
             >
        <button type="button" className="btn celsius" onClick={convertC}>
          Celsius
        </button>
        <button type="button" className="btn fahrenheit" onClick={convertF}>
          Fahrenheit
        </button>
      </div>
   
  <Footer />
        </div> 
        );
          
   else {search();
    return (<div className="loader col-12"><Loader
         type="Grid"
         color="#ac1f32"
         height={100}
         width={100}
         timeout={3000} //3 secs
 
      />)</div>)
   }

}