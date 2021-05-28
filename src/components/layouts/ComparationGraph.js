import React, { useEffect, useState, useContext } from "react";
import DataContext from "../../context/data/dataContext";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import "../../static/style/layouts/comparationGraph.css";
const ComparationGraph = (props) => {
  const dataContext = useContext(DataContext);
  const { combinedData } = dataContext;
  const [data, setData] = useState(null);

  useEffect(() => {
    if (combinedData !== undefined && combinedData !== null) {
      setData(combinedData);
    }
  }, [combinedData]);

  return (
    <div className="comparation-graph-sec">
      <p>{props.tile}</p>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={data}
          stackOffset="sign"
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey={props.datakey1} fill="#8884d8" stackId="stack" />
          <Bar dataKey={props.datakey2} fill="#82ca9d" stackId="stack" />
          <Bar dataKey={props.datakey3} fill="#82chfG" stackId="stack" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComparationGraph;
