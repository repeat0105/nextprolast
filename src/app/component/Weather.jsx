"use client";

import React, { useEffect, useState } from "react";
import "../sass/weather.scss";
import axios from 'axios';




function WeatherInfo() {
  const [weatherData, setWeatherData] = useState(null);
  
  
  async function fetchDataFromAPI() {

    try {
      const response = await axios.get('/api/weader');

      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching data from API:', error);
      throw new Error('Error fetching data');
    }
  }
 

  useEffect(() => {   
    fetchDataFromAPI();
  }, []);

  return (
    <div className="weatherscsstop">
      {weatherData && (
        <div className="weatherscss">
          <div className="cicon">
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
              alt="Weather Icon"
            />
            <div>
              {weatherData.main.temp}ºC - {weatherData.weather[0].main}
            </div>
          </div>
          <div>
            <p>{weatherData.name}</p>
            <h4>{getCurrentDate()}</h4>
          </div>
        </div>
      )}
    </div>
  );
}

function getCurrentDate() {
  const now = new Date();

  return `${now.getFullYear()}-${("0" + (now.getMonth() + 1)).substr(-2)}-${(
    "0" + now.getDate()
  ).substr(-2)}`;
}

export default WeatherInfo;
