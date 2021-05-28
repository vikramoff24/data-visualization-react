import React from "react";
import DateTimePicker from "../layouts/DateTimePicker";
import TimeSeries from "../layouts/TimeSeries";
import { TimeSeriesData } from "../datas/TimeSeriesGraphData";

const TimeSeriesPage = () => {
  return (
    <div>
      <div className="container-fluid">
        <DateTimePicker />
        <div className="row g-2">
          {TimeSeriesData.map((data, index) => (
            <div className="col-lg-6 col-md-6">
              <TimeSeries
                title={data.title}
                datakey1={data.datakey1}
                datakey2={data.datakey2}
                datakey3={data.datakey3}
              />
              ;
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeSeriesPage;
