import React, { useState, useEffect } from "react";
import "./App.css";
import Info from "./components/Info/Info";
import Location from "./components/Location/Location";

const App = () => {
  let [tempSymbol, setTempSymbol] = useState("F");
  const [cities, setCities] = useState();

  useEffect(() => {
    loadWeather();
  }, []); //[cities]); // Every time cities is changed, a new place will be loaded

  async function loadWeather() {
    let response = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=1139b4360eac6349eafa7d15da934d5c"
    );
    response = await response.json();
    setCities(response);
    console.log(response);
  }

  return (
    <main>
      <Info
        tempSymbol={tempSymbol}
        setTempSymbol={() => setTempSymbol(tempSymbol === "F" ? "C" : "F")}
      />
      <Location cities={cities} tempSymbol={tempSymbol} />
    </main>
  );
};

export default App;
