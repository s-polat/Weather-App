import React from 'react'

function WeatherOfCity({weatherData}) {
  return (
    <div>
        <div class="card" style={{ width: "18rem" }}>
        <img style={{width:"200px"}} src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} className="card-img-top weather-icon m-auto" alt="weather icon" />
          <div class="card-body">
            <h3 class="card-title">{weatherData.name}</h3>
           
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Date: {new Date().toLocaleDateString()}</li>
            <li class="list-group-item">Temperature: {weatherData.main.temp.toFixed(0)} °C</li>
            <li class="list-group-item">Humidity: {weatherData.main.humidity}%</li>
          </ul>
        
        </div>

    </div>
  )
}

export default WeatherOfCity