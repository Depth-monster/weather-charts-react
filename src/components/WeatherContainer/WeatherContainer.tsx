import './WeatherContainer.scss'


const WeatherContainer = ({ weatherData }: any) => {
  return (
    <div className='weatherContainer'>
      <div>
        <div>
          <span>Среднесуточная t°</span>
          <div>
            {weatherData.list[0].main.temp}

            <span>°C</span>
          </div>
          <div>Location:
            {weatherData.city.name}
            <div>Population: {weatherData.city.population}</div>
            <div>date :{new Date(weatherData.list[0].dt * 1000).toLocaleDateString()}</div>
            <div>description: {weatherData.list[0].weather[0].description}</div>
          </div>

        </div>
        <div>
          <ul>
            <li>Probability: {weatherData.list[0].clouds.all}%</li>
            <li>Humidity: {weatherData.list[0].main.humidity}%</li>
            <li>Windspeed: {weatherData.list[0].wind.speed} m/s</li>
          </ul>
        </div>
      </div>
      <div>dkdkl</div>
    </div>
  );
};

export default WeatherContainer;
