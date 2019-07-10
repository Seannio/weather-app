import React from "react";
import "./Location.css";
import sun from "../../img/sun-icon.svg";
import snow from "../../img/snow-icon.svg";
import ca from "../../img/pic-1.jpg";
import ru from "../../img/pic-2.jpg";

const Location = props => {
  let currentTemp = 0;
  if (props.cities) {
    let fahrenheit = parseInt(props.cities.main.temp);
    let celsius = parseInt((fahrenheit - 32) * (5 / 9));
    if (props.tempSymbol === "C") {
      currentTemp = celsius;
    } else {
      currentTemp = fahrenheit;
    }
  }

  return (
    <section>
      <div className="floater">
        <div className="icon-temp">
          {props.cities && props.cities.name === "Los Angeles" ? (
            <img alt="sunicon" src={sun} />
          ) : (
            <img alt="sunicon" src={snow} />
          )}
          <p id="temp">{props.cities ? currentTemp : ""}°</p>
        </div>
        <p>{props.cities ? props.cities.weather[0].main.toUpperCase() : ""}</p>
      </div>
      {props.cities && props.cities.name === "Los Angeles" ? (
        <img src={ca} alt="LA" id="location-img" />
      ) : (
        <img src={ru} alt="RU" id="location-img" />
      )}

      <div className="location">
        {props.cities && props.cities.name === "Los Angeles" ? (
          <div>
            <p>Los Angeles</p>
            <p>CALIFORNIA</p>
          </div>
        ) : (
          <div>
            <p>Moscow</p>
            <p>Russia</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Location;
