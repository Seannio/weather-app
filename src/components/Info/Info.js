import React from "react";
import bg from "../../img/bg-shape.svg";
import "./Info.css";

const Info = props => {
  // props.tempSymbol
  // props.setTempSymbol

  return (
    <section>
      <img src={bg} alt="BackgroundShape" id="bg" />
      <h1>
        COOL <span>WEATHER</span>
        <hr />
      </h1>

      <div className="search">
        <input type="text" placeholder="Enter City Name" />
        <button onClick={props.searchWeather}>Submit</button>
      </div>
      <br />
      <p>
        Here's a bunch of dumb bullshit about weather. <br /> Yeah, here's
        another line.
      </p>

      <div className="bottom">
        <p>Your Weather is currently showing in:</p>
        <div className="buttons">
          <div className="btn">
            {props.tempSymbol === "C" ? (
              <button className="clicked">C</button>
            ) : (
              <button onClick={props.setTempSymbol}>C</button>
            )}
            <p>Celcius</p>
          </div>
          <div className="btn">
            {props.tempSymbol === "F" ? (
              <button className="clicked">F</button>
            ) : (
              <button onClick={props.setTempSymbol}>F</button>
            )}
            <p>Fahrenheit</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
