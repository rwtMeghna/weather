import { useEffect, useState } from "react";
import axios from "axios";

import WeatherCard from "./WeatherCard";
// const SearchBar = ({ onSearch }) => {
//   const [searchValue, setSearchvalue] = useState("");
//   const handleSearch = () => {
//     onSearch(searchValue);
//   };

//   return (
//     <div className="search-bar">
//       <input
//         type="text"
//         placeholder="Enter city name"
//         value={searchValue}
//         onChange={(e) => {
//           setSearchvalue(e.target.value);
//         }}
//       />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// };

// const WeatherCard = ({ title, value }) => {
//   return (
//     <div className="weather-card">
//       <h1>{title}</h1>
//       <p>{value}</p>
//     </div>
//   );
// };

export default function WeatherDisplay  ({ city }) {
  const [weatherData, setWeatherdata] = useState(null);
  const [loading, setLoadaing] = useState(false);

  useEffect(() => {
    if (city) {
      setLoadaing(true);
      axios
        .get(`https://api.weatherapi.com/v1/current.json`, {
          params: {
            key: "3c3ab892d57d4460ae6154828242701",
            q: city,
          },
        })
        .then((response) => {
          setWeatherdata(response.data);
        })
        .catch((error) => {
          console.error("error fetching data");
          alert("failed to fetching weather data");
        })
        .finally(() => {
          setLoadaing(false);
        });
    }
  }, [city]);

  return (
    <div className="weather-display">
      {loading && <p>Loading data...</p>}
      {!loading && weatherData && (
        <div className="weather-cards">
          <WeatherCard
            title="Temperature"
            value={`${weatherData.current.temp_c}°C`}
          />
          <WeatherCard
            title="Humidity"
            value={`${weatherData.current.humidity}%`}
          />
          <WeatherCard
            title="Condition"
            value={`${weatherData.current.condition.text}`}
          />
          <WeatherCard
            title="Wind-Speed"
            value={`${weatherData.current.wind_kph}kph`}
          />
        </div>
      )}
    </div>
  );
};