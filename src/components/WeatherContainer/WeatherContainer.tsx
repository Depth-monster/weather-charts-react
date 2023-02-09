import React from 'react';

const WeatherContainer = ({ weatherData}:any) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'spaceBetween' }}>
      <div>
        <div>
          <span>Среднесуточная t°</span>
          <div>
            {weatherData.main.temp}
            <span>°C</span>
          </div>
        </div>
        <div>
          <ul>
            <li>Probability: {weatherData.clouds.all}%</li>
            <li>Humidity: {weatherData.main.humidity}%</li>
            <li>Windspeed: {weatherData.wind.speed} m/s</li>
          </ul>
        </div>
      </div>
      <div>
        {weatherData.name}
        <div>Population: {weatherData.population}</div>
        <div>{new Date(weatherData.dt * 1000).toLocaleDateString()}</div>
        <div>{weatherData.weather[0].description}</div>
      </div>
    </div>
  );
};

export default WeatherContainer;
