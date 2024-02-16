// import { DeveloperBoardOff } from "@mui/icons-material";
import React from "react";
const WeatherCard = ({ title, value }) => {
    return (
      <div className="weather-card">
        <h1>{title}</h1>
        <p>{value}</p>
      </div>
    );
  };
  
  export default WeatherCard;