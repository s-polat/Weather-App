import React, { useEffect, useContext, useState } from "react";
import WeatherOfCity from "./WeatherOfCity";
import { DataStore } from "../DataStore";

function Weather() {
  const { isLogin, setIsLogin } = useContext(DataStore);
  const [cityState, setCityState] = useState("london");

  const [findCity, setFindCity]= useState(true)

  const [weatherData, setWeatherData] = useState({main: { temp: 0, humidity: "", pressure: "" },
  name: "",
  weather: [{ description: "", icon: "", main: "" }],
  wind: { speed: "" }});

  console.log(cityState);

  const submitHandler = async (e) => {
    e.preventDefault();
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityState}&appid=76493a2787453aef554d7fa7e7eb56d8&units=metric`
    );

    const getWeatherData = await result.json();
    console.log(getWeatherData);
    setWeatherData(getWeatherData);
    if (getWeatherData.message) {
      /* alert("City can't find!"); */
      setFindCity(false)
      console.log(findCity);
    } else {
      console.log(weatherData);
      setFindCity(true)
    }
  };

  const londonWeather = async () => {
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=london&appid=76493a2787453aef554d7fa7e7eb56d8&units=metric`
    ).then((data) => data.json());
    setWeatherData(result);
  };

  useEffect(() => {
    londonWeather();
  }, []);

  

  return (
    <div className="container">
      <header className=" d-flex justify-content-center mt-5">
        <form
          className="d-flex  justify-content-center align-items-center"
          onSubmit={submitHandler}
        >
          <input
            autoFocus
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setCityState(e.target.value)}
          />
          <button className="btn btn-outline-success " type="submit">
            Search
          </button>
        </form>
      </header>
      <main className="d-flex justify-content-center align-items-center mt-5">
        {!findCity?<h3>City can't find! </h3>:<WeatherOfCity weatherData={weatherData}/>}

      </main>
      <div className="d-flex justify-content-center align-items-center mt-5">

        <button className="btn btn-warning" onClick={()=>{localStorage.removeItem("weatherUser"); setIsLogin(false)}}>Logout</button>
      </div>
      
    </div>
  );
}

export default Weather;
