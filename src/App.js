import React, { useState } from "react";
import "./App.css";
import Info from "./components/Info/Info";
import Location from "./components/Location/Location";

const App = () => {
  let [tempSymbol, setTempSymbol] = useState("F");
  return (
    <main>
      <Info
        tempSymbol={tempSymbol}
        setTempSymbol={() => setTempSymbol(tempSymbol === "F" ? "C" : "F")}
      />
      <Location />
      <Location />
    </main>
  );
};

export default App;
