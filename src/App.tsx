import Search from './components/Search/Search'
import WeatherContainer from './components/WeatherContainer/WeatherContainer';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {
  const API: string = '814a79c17d4df4e9e8b2bcacf2722dc8';
  let cityId: number = 5128581; // New York City ID
  let [weatherData, setWeatherData] = useState<any>(null);

  useEffect(() => {
    axios
    
      .get(`https://api.openweathermap.org/data/2.5/weather?q=texas&appid=814a79c17d4df4e9e8b2bcacf2722dc8`)
      //.get(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${API}`)
      //.get(`https://api.openweathermap.org/data/2.5/weather?q=814a79c17d4df4e9e8b2bcacf2722dc8`)
      .then(response => {
        setWeatherData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      {/* AppGlass background milk */}
      <div className="AppGlass">
        {/* just container*/}
        <div className="container">
          <h1>Weather</h1>
          <Search />

          {weatherData ? (
            <WeatherContainer weatherData={weatherData} />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
