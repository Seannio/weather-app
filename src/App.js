import React, { useState, useEffect } from "react";
import "./App.css";
import Info from "./components/Info/Info";
import Location from "./components/Location/Location";

const App = () => {
  let [tempSymbol, setTempSymbol] = useState("F");
  const [cities, setCities] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      const response = await fetch(
        "http://api.openweathermap.org/data/2.5/group?id=5368361,524901&units=imperial&appid=1139b4360eac6349eafa7d15da934d5c"
      );
      const data = await response.json();
      setCities(data.list);
    })();
  }, []);

  return (
    <main>
      <Info
        tempSymbol={tempSymbol}
        setTempSymbol={() => setTempSymbol(tempSymbol === "F" ? "C" : "F")}
      />
      <Location cities={cities[0]} tempSymbol={tempSymbol} />
    </main>
  );
};

export default App;
