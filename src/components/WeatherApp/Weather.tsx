import React, { useState, useEffect } from "react";
import { fetchWeather, fetchLocation } from "../../API";
import { StyledWeather } from "./Weather.styles";
const Weather = () => {
  const [city, setCity] = useState<string>("london");
  const [icon, setIcon] = useState<any>("");
  const [temp, setTemp] = useState<any>("");
  const [minTemp, setMinTemp] = useState<any>("");
  const [maxTemp, setMaxTemp] = useState<any>("");

  useEffect(() => {
    const getCurrentLocation = async () => {
      const city = await fetchLocation();
      setCity(city);
    };
    getCurrentLocation();
  }, []);

  useEffect(() => {
    const getWeather = async () => {
      const response: any = await fetchWeather(city);
      setTemp(response[0].temp!);
      setMinTemp(response[0].temp_min!);
      setMaxTemp(response[0].temp_max!);
      setIcon(response[1][0].icon!);
    };
    getWeather();
  }, [city]);

  const iconapi = `http://openweathermap.org/img/w/${icon}.png`;
  return (
    <StyledWeather>
      <div className="weather">
        <img src={iconapi} alt="" />
        <div className="weather-temp">
          <div>
            <h4>{(temp - 273.15).toFixed(0)} °C</h4>
            <h5>{(maxTemp - 273.15).toFixed(0)} °</h5>
            <h5 className="min">{(minTemp - 273.15).toFixed(0)} °</h5>
          </div>
          <h5>{city}</h5>
        </div>
      </div>
    </StyledWeather>
  );
};

export default Weather;
