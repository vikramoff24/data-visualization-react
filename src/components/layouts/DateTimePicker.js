import "date-fns";
import React, { useState, useEffect, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker,
} from "@material-ui/pickers";
import DataContext from "../../context/data/dataContext";
export default function DateTimePicker() {
  // The first commit of Material-UI
  // const [selectedDate, setSelectedDate] = React.useState(
  //   new Date("2014-08-18T21:11:54")
  // );
  const dataContext = useContext(DataContext);
  const { getAData, getCombinedData } = dataContext;

  const [startDate, setStartDate] = useState(new Date("2021-03-21T09:11:54"));
  const [endDate, setEndDate] = useState(new Date("2021-03-21T11:11:54"));

  useEffect(() => {
    if (startDate !== undefined && startDate !== null) {
      console.log("picked date");
      //   getAData(startDate);
      getCombinedData(startDate, endDate);
    }
  }, [startDate, endDate]);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <DatePicker
          margin="normal"
          variant="inline"
          label="Date"
          value={startDate}
          onChange={(date) => {
            handleStartDateChange(date);
            handleEndDateChange(date);
          }}
        />
        {/* <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        /> */}
        <TimePicker
          margin="normal"
          variant="inline"
          label="Start Time"
          value={startDate}
          onChange={handleStartDateChange}
        />
        <TimePicker
          margin="normal"
          variant="inline"
          label="End Time"
          value={endDate}
          onChange={handleEndDateChange}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
