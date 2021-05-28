//   static demoUrl = "https://codesandbox.io/s/dashed-line-chart-dxwzg";

import React, { useEffect, useState, useContext } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import DataContext from "../../context/data/dataContext";

const TimeSeries = () => {
  const dataContext = useContext(DataContext);
  const { deviceAData } = dataContext;
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log(deviceAData);
    if (deviceAData !== undefined) {
      setData(deviceAData);
    }
  }, [deviceAData]);

  return (
    <div>
      <ResponsiveContainer width="70%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="t" interval="10" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="p1"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="p2.5"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
          <Line
            type="monotone"
            dataKey="p10"
            stroke="#82ca65"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TimeSeries;
