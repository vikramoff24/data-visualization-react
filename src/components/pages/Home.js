import React, { useState, useEffect, useContext } from "react";
import WeekPicker from "../layouts/WeekPicker";
import WindyItem from "../layouts/WindyItem";
import DataContext from "../../context/data/dataContext";

import "../../static/style/Pages/home.css";
const Home = () => {
  const dataContext = useContext(DataContext);
  const { windyDay } = dataContext;

  const [windy, setWindy] = useState({
    deviceA: "No Date to Show",
    deviceB: "No Date to Show",
    deviceC: "No Date to Show",
  });

  useEffect(() => {
    if (windyDay !== null && windyDay.deviceA !== undefined) {
      const dateString = {
        deviceA: windyDay.deviceA.toDateString(),
        deviceB: windyDay.deviceB.toDateString(),
        deviceC: windyDay.deviceC.toDateString(),
      };
      setWindy(dateString);
    }
  }, [windyDay]);

  return (
    <div className="home ">
      <div className="container">
        <div className="row g-2">
          <div className="col-lg-8">
            <div className="about-sec">
              <h1>Praan Device Dashboard</h1>
              <p>Made By Vikram S</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div>
              <WeekPicker />
            </div>
          </div>
        </div>
        <div className="row g-2">
          <div className="col-lg-4">
            <div>
              <WindyItem date={windy.deviceA} />
            </div>
          </div>
          <div className="col-lg-4">
            <div>
              <WindyItem date={windy.deviceB} />
            </div>
          </div>
          <div className="col-lg-4">
            <div>
              <WindyItem date={windy.deviceC} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
