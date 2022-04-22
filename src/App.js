import "./App.css";
import Cities from "./data";
import { useState } from "react";

function App() {
  const [activeCity, setActiveCity] = useState(0);

  const handleClick = (e) => {
    setActiveCity(e.target.innerHTML);
  };
  const timezones = {
    cup: "America/Los_Angeles",
    new: "America/New_York",
    lon: "Europe/Belfast",
    ams: "Europe/Amsterdam",
    tok: "Japan",
    hon: "Hongkong",
    syd: "Australia/Sydney",
  };
  // activeCity != 0 ? console.log(timezones[activeCity.slice(0, 3)]) : null;

  let date, time;
  if (activeCity != 0) {
    let tz = activeCity.slice(0, 3).toLowerCase();
    console.log(timezones[tz]);
    let options = {
        timeZone: `${timezones[tz]}`,
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      },
      formatter = new Intl.DateTimeFormat([], options);

    date = formatter.format(new Date());
    time = date.split(", ")[1];
    console.log(time);
  }

  return (
    <div className="App">
      <div className="cities">
        {Cities.map((city, section) => (
          <p
            key={section}
            onClick={handleClick}
            className={activeCity === city.label ? "active" : ""}
          >
            {city.label}
          </p>
        ))}
      </div>

      <hr />
      {activeCity != 0 && (
        <div className="time">
          It's {time} in {activeCity}
        </div>
      )}
    </div>
  );
}

export default App;
