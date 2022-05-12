import React, { useEffect, useContext, useState } from "react";
import WeatherOfCity from "./WeatherOfCity";
import { DataStore } from "../DataStore";

function Weather() {
  const { setIsLogin } = useContext(DataStore);

  const [cityState, setCityState] = useState("london");

  const [isCityFound, setIsCityFound] = useState(true);

  const [weatherData, setWeatherData] = useState({
    main: { temp: 0, humidity: "" },
    name: "",
    weather: [{ description: "", icon: "", main: "" }],
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityState}&appid=76493a2787453aef554d7fa7e7eb56d8&units=metric`
    );

    const getWeatherData = await result.json();
    if (getWeatherData.message) {
      setIsCityFound(false);
    } else {
      setIsCityFound(true);
      setWeatherData(getWeatherData);
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
      <header className=" d-flex flex-column justify-content-center align-items-center mt-4">
        <h1 className="mb-5">Weather-App</h1>

        <form
          className="d-flex justify-content-center align-items-center"
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
        {!isCityFound ? (
          <h3>City can't find! </h3>
        ) : (
          <WeatherOfCity weatherData={weatherData} />
        )}
      </main>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <button
          className="btn btn-warning"
          onClick={() => {
            localStorage.removeItem("weatherUser");
            setIsLogin(false);
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Weather;
