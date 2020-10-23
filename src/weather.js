import React, { useState } from "react";
import axios from "axios";
import Loader from 'react-loader-spinner'

export default function Weather(){
    
     const [city, changeCity] = useState("");
     const [dataLoaded, updateDataLoaded] = useState(false);
    const [weather, updateWeather] = useState({});
         


    function handleSubmit(event){event.preventDefault();
     if (city.length > 0) {let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f5937ab22539bc6268f9a982f0955523`;
    axios.get(apiUrl).then(showCurrentWeather); } else {alert ("please enter a city")}
   
      }

     function showCurrentWeather(response){
         console.log(response.data);
         updateDataLoaded(true);
        updateWeather({
      temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${
        response.data.weather[0].icon
      }@2x.png`,
      description: response.data.weather[0].description
    });
  }


    function updateCity(event){
        changeCity(event.target.value);}

    let form =  <form onSubmit={handleSubmit}><input type="search" placeholder="search for a city" onChange={updateCity}/>
    <input type="submit" value="search"/>
    </form>
   let weatherForecast = <div><ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
        </ul> 
        <img src={weather.icon} alt={weather.description} />
        </div>
 
 
   if (dataLoaded) {
    return (
      <div>
        {form}
        {weatherForecast}
      </div>
    );
  } else {
    return <div>{form}
     <Loader
         type="Puff"
         color="white"
         height={100}
         width={100}
         timeout={3000} // 3 secs
 
      /></div>
  }
 
}