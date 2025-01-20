import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Thu</div>
          <WeatherIcon code="01d" size={32} />
          <div className="Forecast-temp">
            <span className="Forecast-temp-max">19</span>
            <span className="Forecast-temp-min">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
