import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary" />
          </div>
        </div>
      </form>

      <h1>New York</h1>
      <ul>
        <li>Monday 14:01</li>
        <li>Broken clouds</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="Mostly Cloudy"
          />
          15°C
        </div>

        <div className="col-6">
          <ul>
            <li>Humidity: 42%</li>
            <li>Wind: 9.77 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
