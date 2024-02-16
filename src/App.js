import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay"
import React ,{useState} from "react"
export default function App() {
  const [city, setCity] = useState("");

  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <WeatherDisplay city={city} />
    </div>
  );
}