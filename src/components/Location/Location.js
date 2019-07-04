import React from "react";
import "./Location.css";
import sun from "../../img/sun-icon.svg";
import snow from "../../img/snow-icon.svg";
import ca from "../../img/pic-1.jpg";
import ru from "../../img/pic-2.jpg";

const Location = () => {
  return (
    <section>
      <div className="floater">
        <div className="icon-temp">
          <img src={sun} />
          <p id="temp">90</p>
        </div>
        <p>Sunny</p>
      </div>
      <img src={ca} alt="location" id="location-img" />
      <div className="location">
        <div>
          <p>Los Angeles</p>
          <p>CALIFORNIA</p>
        </div>
        <div>
          <p>Moscow</p>
          <p>Russia</p>
        </div>
      </div>
    </section>
  );
};

export default Location;
