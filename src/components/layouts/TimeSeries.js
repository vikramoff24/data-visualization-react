import React, { useEffect, useState, useContext } from "react";
import "../../static/style/layouts/timeSeries.css";
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
//This is from Reharts Package, it provides with beautiful visualization
const TimeSeries = (props) => {
  const dataContext = useContext(DataContext);
  const { combinedData } = dataContext;
  const [data, setData] = useState(null);

  useEffect(() => {
    if (combinedData !== undefined) {
      setData(combinedData);
    }
  }, [combinedData]);

  return (
    <div className="time-series-sec">
      <p className="title">{props.title}</p>
      <ResponsiveContainer width="100%" aspect={3}>
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
          <XAxis dataKey="time" interval="10" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={props.datakey1} stroke="#810d0d" />
          <Line type="monotone" dataKey={props.datakey2} stroke="#8884d8" />
          <Line type="monotone" dataKey={props.datakey3} stroke="#e1db67" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TimeSeries;
