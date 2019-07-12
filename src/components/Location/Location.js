import React from "react";
import "./Location.css";
import ca from "../../img/pic-1.jpg";

const Location = props => {
  let currentTemp = 0;
  let currentHum = 0;
  if (props.cities) {
    let fahrenheit = parseInt(props.cities.main.temp);
    let celsius = parseInt((fahrenheit - 32) * (5 / 9));
    if (props.tempSymbol === "C") {
      currentTemp = celsius;
    } else {
      currentTemp = fahrenheit;
    }
    let humidity = parseInt(props.cities.main.humidity);
    currentHum = humidity;
  }

  return (
    <section>
      <div className="floater">
        <div className="icon-temp">
          <p id="temp">{props.cities ? currentTemp : ""}°</p>
          <p id="temp">{props.cities ? currentHum : ""}%</p>
        </div>
        <p>{props.cities ? props.cities.weather[0].main.toUpperCase() : ""}</p>
      </div>
      <img src={ca} alt="sunny" id="location-img" />
      <div className="location">
        <div>
          <p>{props.cities ? props.cities.name : ""}</p>
          <p>{props.cities ? props.cities.sys.country : ""}</p>
        </div>
      </div>
    </section>
  );
};

export default Location;
