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

  function handleSubmit(event){event.preventDefault()
  if (city.length> 0) {let apiKey = "f5937ab22539bc6268f9a982f0955523"
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(displayWeather)
} else{alert("Please search for a city")}}

  function updateCity(event){setCity(event.target.value)}

  function displayWeather (response){console.log(response)
  setDataLoaded(true)}

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
<div class="card-deck row-cols-1">
        <div class="card col-sm-6">
             <h5>London</h5>
            <h6>12:27 Thursday 3rd September</h6>
            <div  class="card-text row">
              <i class="fas fa-info today-symbol col-6 justify-content-center"></i>
                <div class="card-text col-6 justify-content-center">12 °C
                </div>
            </div>
            <div class="row col-12 justify-content-center"> Cloudy</div>
                  <div class="row col-12 justify-content-center">Feels like 12°C
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
       
        <div class="col-sm-6">
            <h5>Sunday 6th</h5>
                <div  class="card-text">
                  <i class="fas fa-cloud-sun"></i>
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