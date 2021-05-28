import React, { useState, useEffect, useContext } from "react";
import Helmet from "react-helmet";
import moment from "moment";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import DataContext from "../../context/data/dataContext";
import "../../static/style/layouts/weekPicker.css";
function getWeekDays(weekStart) {
  const days = [weekStart];
  for (let i = 1; i < 7; i += 1) {
    days.push(moment(weekStart).add(i, "days").toDate());
  }
  return days;
}

function getWeekRange(date) {
  return {
    from: moment(date).startOf("week").toDate(),
    to: moment(date).endOf("week").toDate(),
  };
}

export default function WeekPicker() {
  const dataContext = useContext(DataContext);
  const { getMostWindyDay } = dataContext;

  const [hoverRange, setHoverRange] = useState(undefined);
  const [selectedDays, setSelectedDays] = useState([]);

  useEffect(() => {
    if (selectedDays !== undefined && selectedDays !== null)
      getMostWindyDay(selectedDays);
  }, [selectedDays]);

  const handleDayChange = (date) => {
    // this.setState({
    //   selectedDays: getWeekDays(getWeekRange(date).from),
    // });
    setSelectedDays(getWeekDays(getWeekRange(date).from));
  };

  const handleDayEnter = (date) => {
    // this.setState({
    //   hoverRange: getWeekRange(date),
    // });
    setHoverRange(getWeekRange(date));
  };

  const handleDayLeave = () => {
    // this.setState({
    //   hoverRange: undefined,
    // });
    setHoverRange(undefined);
  };

  const handleWeekClick = (weekNumber, days, e) => {
    // this.setState({
    //   selectedDays: days,
    // });
    setSelectedDays(days);
  };

  const daysAreSelected = selectedDays.length > 0;

  const modifiers = {
    hoverRange,
    selectedRange: daysAreSelected && {
      from: selectedDays[0],
      to: selectedDays[6],
    },
    hoverRangeStart: hoverRange && hoverRange.from,
    hoverRangeEnd: hoverRange && hoverRange.to,
    selectedRangeStart: daysAreSelected && selectedDays[0],
    selectedRangeEnd: daysAreSelected && selectedDays[6],
  };

  return (
    <div className="week-picker-sec">
      <p>Most Windy Day Of Week</p>
      <div className="SelectedWeek">
        <DayPicker
          selectedDays={selectedDays}
          showWeekNumbers
          showOutsideDays
          modifiers={modifiers}
          onDayClick={handleDayChange}
          onDayMouseEnter={handleDayEnter}
          onDayMouseLeave={handleDayLeave}
          onWeekClick={handleWeekClick}
        />
        {selectedDays.length === 7 && (
          <div className="week-display">
            <div className="week">
              {moment(selectedDays[0]).format("LL")} –{" "}
              {moment(selectedDays[6]).format("LL")}
            </div>
          </div>
        )}

        <Helmet>
          <style>{`
            .SelectedWeek .DayPicker-Month {
              border-collapse: separate;
            }
            .SelectedWeek .DayPicker-WeekNumber {
              outline: none;
            }
            .SelectedWeek .DayPicker-Day {
              outline: none;
              border: 1px solid transparent;
            }
            .SelectedWeek .DayPicker-Day--hoverRange {
              background-color: #a4920e!important;
            }

            .SelectedWeek .DayPicker-Day--selectedRange {
              background-color: #fff7ba !important;
              border-top-color: #FFEB3B;
              border-bottom-color: #FFEB3B;
              border-left-color: #fff7ba;
              border-right-color: #fff7ba;
            }

            .SelectedWeek .DayPicker-Day--selectedRangeStart {
              background-color: #FFEB3B !important;
              border-left: 1px solid #FFEB3B;
            }

            .SelectedWeek .DayPicker-Day--selectedRangeEnd {
              background-color: #FFEB3B !important;
              border-right: 1px solid #FFEB3B;
            }

            .SelectedWeek .DayPicker-Day--selectedRange:not(.DayPicker-Day--outside).DayPicker-Day--selected,
            .SelectedWeek .DayPicker-Day--hoverRange:not(.DayPicker-Day--outside).DayPicker-Day--selected {
              border-radius: 0 !important;
              color: black !important;
            }
            .SelectedWeek .DayPicker-Day--hoverRange:hover {
              border-radius: 0 !important;
            }
          `}</style>
        </Helmet>
      </div>
    </div>
  );
}
