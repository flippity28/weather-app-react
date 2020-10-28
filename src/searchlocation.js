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
 //const [dataLoaded, setDataLoaded] = useState(false)
  const [weather, updateWeather]= useState({})
 

let apiKey = `e024c14bd2f0eae086692698825b45e0`

  function handleSubmit(event){event.preventDefault();
    if (city.length> 0) {
       // search()
   }   else{alert("Please search for a city")}
}

function search(){let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
   axios.get(apiUrl).then(getCoords)}

  function updateCity(event){setCity(event.target.value)}

  function getCoords (response){
  console.log(response);
  let lat = response.data.coord.lat
  let long = response.data.coord.lon
  let apiUrlTwo = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly&appid=${apiKey}
&units=metric`;
  axios.get(apiUrlTwo).then(updateWeatherForecast);
      }



  function updateWeatherForecast(response){
   console.log(response);
  updateWeather({currentTemp: Math.round(response.data.current.temp),
  currentFeelsTemp: Math.round(response.data.current.feels_like),
  currentDescription: response.data.current.weather[0].description,
  todayDescription: response.data.daily[0].weather[0].description,
  todayHighTemp: Math.round(response.data.daily[0].temp.max),
  todayLowTemp: Math.round(response.data.daily[0].temp.min),
  todayPrecip: Math.round(response.data.daily[0].pop * 100),
  todayWindspeed: Math.round(response.data.daily[0].wind_speed * 3.6),
  sunrise:new Date(1000*response.data.daily[0].sunrise),
  sunset: new Date( 1000*response.data.daily[0].sunset),
     })
     console.log({weather}) 
     // setDataLoaded (true)
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
       <button className="my-location">
          <i className="fas fa-map-marker-alt"></i>
        </button>
      </form> 
    </div>
   
  
   //if (dataLoaded) 
return (<div className="search-location">  <div>{searchForm} </div>
<div className="card-deck row-cols-1">
  <TodayCurrent />
  <TodayDetails/></div>
 
 <FiveDayForecast/>
       
         <MoreInfo/>
         <UnitConversion/>
         <Footer />
        </div> 
        );
          
   //else {search();
    //return (<div>{searchForm}</div>);

//};

  }