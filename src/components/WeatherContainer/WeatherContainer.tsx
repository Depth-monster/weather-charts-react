import { useState } from 'react'
import './WeatherContainer.scss'


interface WeatherData {
  cod: string;
  message: number;
  cnt: number;
  list: number[];
  city: any;
}
interface Props {
  weatherData: any;
}

const WeatherContainer: React.FC<Props> = ({ weatherData }) => {


  const convertedData = weatherData.list.map((weather) => ({
    ...weather,
    normalDate: new Date(weather.dt * 1000).toDateString()

  }));

  let uniqueDates = Array.from(new Set(convertedData.map((data) => data.normalDate)));
  const [k,a]=useState()
  let weatherForDate
  uniqueDates.forEach((date) => {
     weatherForDate = convertedData.filter((data) => data.normalDate === date)[0];
    console.log(`Weather for ${date}:`, weatherForDate.main.temp);

  });
  //console.log(convertedData.map((data) => data.normalDate));

  //const normalDate = new Date(weatherData.list[0].dt * 1000).toDateString();
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
      <div>
        <div>
          <div>
          <div>
  {weatherForDate.main.temp}
</div>
            {/* output here weatherForDate.main.temp */}
            {/* {weatherData.list.map((item, index) => (
              <div key={index}>
                {item.dt_txt}
              </div>
//dt_txt output
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherContainer;
