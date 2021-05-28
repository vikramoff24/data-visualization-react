import React, { useState, useEffect, useContext } from "react";
import WeekPicker from "../layouts/WeekPicker";
import WindyItem from "../layouts/WindyItem";
import DataContext from "../../context/data/dataContext";

import "../../static/style/Pages/home.css";
const Home = () => {
  const dataContext = useContext(DataContext);
  const { windyDay } = dataContext;

  const [windy, setWindy] = useState({
    deviceA: "Select A Week to See Data",
    deviceB: "Select A Week to See Data",
    deviceC: "Select A Week to See Data",
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
              <hr></hr>
              <p>
                <ul>
                  <li>
                    Select Dates and Weeks between <b>19th March 2021</b> to
                    <b>19th May 2021</b> (inclusive).
                  </li>
                  <li>
                    Application is made keeping fuctionality at first place, If
                    these is any UI glitch, please ignore it.
                  </li>
                  <li>
                    Due to limited time given, Could not add validation for the
                    pickers (Date,Time and Week), so while choosing it, please
                    cross check twice.
                  </li>
                  <li>
                    {" "}
                    Please select correct time convention for start and end
                    date, like it should be always <b>AM</b> to <b>PM</b> for a
                    particular day.
                  </li>
                </ul>
              </p>
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
              <WindyItem device="Device A" date={windy.deviceA} />
            </div>
          </div>
          <div className="col-lg-4">
            <div>
              <WindyItem device="Device B" date={windy.deviceB} />
            </div>
          </div>
          <div className="col-lg-4">
            <div>
              <WindyItem device="Device C" date={windy.deviceC} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
