import React, { useEffect } from "react";

import { CombinedData } from "../datas/DeviceData";

import ComparationGraph from "../layouts/ComparationGraph.js";
import DateTimePicker from "../layouts/DateTimePicker.js";
import { comparationData } from "../datas/ComparationGraphData";

function ComparationPage() {
  //Maping of comparationData from ComparationGraphData with ComparationGraph Component
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
        </div>
      </div>
    </div>
  );
}

export default ComparationPage;
