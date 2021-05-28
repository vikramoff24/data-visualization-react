import React, { useEffect } from "react";

import {
  DeviceAData,
  DeviceBData,
  DeviceCData,
  CombinedData,
} from "../datas/DeviceData";

import ComparationGraph from "../layouts/ComparationGraph.js";
import DateTimePicker from "../layouts/DateTimePicker.js";
import { comparationData } from "../datas/ComparationGraphData";

function ComparationPage() {
  useEffect(() => {
    console.log(DeviceAData);
    console.log(DeviceBData);
    console.log(DeviceCData);
    console.log(CombinedData);
  });

  return (
    <div className="home">
      <DateTimePicker />
      <div className="container-fluid">
        <div className="row g-2">
          {comparationData.map((data, index) => (
            <div className="col-lg-6 col-md-6">
              <ComparationGraph
                title={data.title}
                datakey1={data.datakey1}
                datakey2={data.datakey2}
                datakey3={data.datakey3}
              />
            </div>
          ))}
          {/* <div className="col-lg-4 col-md-6">
            <ComparationGraph datakey1="Ap25" datakey2="Bp25" datakey3="Cp25" />
          </div>
          <div className="col-lg-4 col-md-6">
            <ComparationGraph datakey1="Ap10" datakey2="Bp10" datakey3="Cp10" />
          </div>
          <div className="col-lg-4 col-md-6">
            <ComparationGraph datakey1="Aw" datakey2="Bw" datakey3="Cw" />
          </div> */}
        </div>
      </div>
      {/* <TimeSeries /> */}
    </div>
  );
}

export default ComparationPage;
