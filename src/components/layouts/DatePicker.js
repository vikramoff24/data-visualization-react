import React, { useState, useContext, useEffect } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import DataContext from "../../context/data/dataContext";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const PickDate = () => {
  const dataContext = useContext(DataContext);
  const { getAData, getCombinedData } = dataContext;
  const [startDate, setStartDate] = useState(null);

  useEffect(() => {
    if (startDate !== undefined && startDate !== null) {
      console.log("picked date");
      //   getAData(startDate);
      getCombinedData(startDate);
    }
  }, [startDate]);

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => {
        console.log(startDate);
        setStartDate(date);
      }}
    />
  );
};

export default PickDate;
