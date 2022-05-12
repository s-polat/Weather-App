import React from 'react'

function WeatherOfCity({weatherData}) {
  return (
    <div>
        <div className="card" style={{ width: "18rem" }}>
        <img style={{width:"200px"}} src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} className="card-img-top weather-icon m-auto" alt="weather icon" />
          <div className="card-body">
            <h3 className="card-title">{weatherData.name}</h3>
           
          </div>

          
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <dl className='row' style={{marginBottom:"-10px"}}>
                <dd className="col-6">Date:</dd>
                <dt className="col-6">{new Date().toLocaleDateString()}</dt>
              </dl>
             </li>
            <li className="list-group-item">
            <dl className='row' style={{marginBottom:"-10px"}}>
                <dd className="col-6">Temperature:</dd>
                <dt className="col-6">{weatherData.main.temp.toFixed(0)} °C</dt>
              </dl>
             </li>
            <li className="list-group-item">
            <dl className='row' style={{marginBottom:"-10px"}}>
                <dd className="col-6">Humidity:</dd>
                <dt className="col-6">{weatherData.main.humidity}%</dt>
              </dl>
               </li>
          </ul>
        
        </div>

    </div>
  )
}

export default WeatherOfCity