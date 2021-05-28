import React, { useEffect } from "react";
import PickDate from "../layouts/DatePicker.js";
import {
  DeviceAData,
  DeviceBData,
  DeviceCData,
  CombinedData,
} from "../datas/DeviceData";
import TimeSeries from "../layouts/TimeSeries.js";
import ComparationGraph from "../layouts/ComparationGraph.js";
import DateTimePicker from "../layouts/DateTimePicker.js";

function Home() {
  useEffect(() => {
    console.log(DeviceAData);
    console.log(DeviceBData);
    console.log(DeviceCData);
    console.log(CombinedData);
  });

  return (
    <div className="home">
      <h1>Home</h1>
      {/* <PickDate /> */}
      <DateTimePicker />
      <div className="container-fluid">
        <div className="row g-2">
          <div className="col-lg-4 col-md-6">
            <ComparationGraph
              title="All Device P1"
              datakey1="Ap1"
              datakey2="Bp1"
              datakey3="Cp1"
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <ComparationGraph datakey1="Ap25" datakey2="Bp25" datakey3="Cp25" />
          </div>
          <div className="col-lg-4 col-md-6">
            <ComparationGraph datakey1="Ap10" datakey2="Bp10" datakey3="Cp10" />
          </div>
          <div className="col-lg-4 col-md-6">
            <ComparationGraph datakey1="Aw" datakey2="Bw" datakey3="Cw" />
          </div>
        </div>
      </div>
      {/* <TimeSeries /> */}
    </div>
  );
}

export default Home;
