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

  let date, time;
  if (activeCity !== 0) {
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
      <ul className="cities">
        {Cities.map((city, section) => (
          <li
            key={section}
            onClick={handleClick}
            className={activeCity === city.label ? "active" : ""}
          >
            {city.label}
          </li>
        ))}
      </ul>

      <hr />
      {activeCity !== 0 && (
        <div className="time">
          It's {time} in {activeCity}
        </div>
      )}
    </div>
  );
}

export default App;
