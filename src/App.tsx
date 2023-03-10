import Search from './components/Search/Search'
import WeatherContainer from './components/WeatherContainer/WeatherContainer';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { debug } from 'console';


function App() {
  

  let [city, setCity] = useState<string>('ashgabat');
  const API: string = '814a79c17d4df4e9e8b2bcacf2722dc8';
  let [weatherData, setWeatherData] = useState<any>(null);
  console.log(city)
  useEffect(() => {
    //https://api.openweathermap.org/data/2.5/forecast?q=ashgabat&units=metric&appid=814a79c17d4df4e9e8b2bcacf2722dc8
    axios
      .get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API}`)
      .then(response => {
        setWeatherData(response.data);
      })
      .catch(error => {
        alert(error.message)
        console.error(error);
      });
  }, [city]);

  return (
    <div className="App">
      {/* AppGlass background milk */}
      <div className="AppGlass">
        {/* just container*/}
        <div className="container">
          <h1>Weather</h1>
          <Search setCity={setCity}/>

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
//now on proccess

export default App;
