import React, { useReducer } from "react";
import {
  DeviceAData,
  DeviceBData,
  DeviceCData,
  CombinedData,
} from "../../components/datas/DeviceData";
import DataContext from "./dataContext";
import {
  GET_DEVICE_B_DATA,
  GET_DEVICE_A_DATA,
  GET_DEVICE_C_DATA,
  GET_WINDY_DAY,
  GET_COMBINED_DATA,
} from "../types";
import dataReducer from "./dataReducer";

const DataState = (props) => {
  const intialState = {
    deviceAData: null,
    deviceBData: null,
    deviceCData: null,
    combinedData: null,
    windyDay: null,
  };

  const [state, dispatch] = useReducer(dataReducer, intialState);

  //actions
  const getAData = (selectedDate) => {
    // console.log(DeviceAData);
    const deviceA = DeviceAData[0].filter((data) => {
      // console.log(data);
      const deviceDate = new Date(data.date);
      const currDate = new Date(selectedDate);
      if (deviceDate.setHours(0, 0, 0, 0) === currDate.setHours(0, 0, 0, 0)) {
        console.log(deviceDate);
        console.log(currDate);
      }
      return deviceDate.setHours(0, 0, 0, 0) === currDate.setHours(0, 0, 0, 0);
    });

    console.log(deviceA);

    dispatch({ type: GET_DEVICE_A_DATA, payload: deviceA });
  };

  const getCombinedData = (startDate, endDate) => {
    console.log(CombinedData);
    const combined = CombinedData[0].filter((data) => {
      // console.log(data);
      // const deviceDate = new Date(data.date);
      // const currDate = new Date(selectedDate);
      // if (deviceDate.setHours(0, 0, 0, 0) === currDate.setHours(0, 0, 0, 0)) {
      //   console.log(deviceDate);
      //   console.log(currDate);
      // }
      // return deviceDate.setHours(0, 0, 0, 0) === currDate.setHours(0, 0, 0, 0);
      return (
        new Date(data.date) > new Date(startDate) &&
        new Date(data.date) < new Date(endDate)
      );
    });
    console.log(combined);
    dispatch({ type: GET_COMBINED_DATA, payload: combined });
  };

  const getMostWindyDay = (weekRange) => {
    const totalwind = (date, device) => {
      const filteredData = CombinedData[0].filter((data) => {
        const deviceDate = new Date(data.date);
        const currDate = new Date(date);

        return (
          currDate.setHours(0, 0, 0, 0) === deviceDate.setHours(0, 0, 0, 0)
        );
      });

      var totalwind = 0;
      filteredData.forEach((data) => {
        if (device === "a") totalwind += data.Aw;
        if (device === "b") totalwind += data.Bw;
        if (device === "c") totalwind += data.Cw;
      });
      return totalwind;
    };

    const totalWindOfWeekA = {
      tWind1: totalwind(weekRange[0], "a"),
      tWind2: totalwind(weekRange[1], "a"),
      tWind3: totalwind(weekRange[2], "a"),
      tWind4: totalwind(weekRange[3], "a"),
      tWind5: totalwind(weekRange[4], "a"),
      tWind6: totalwind(weekRange[5], "a"),
      tWind7: totalwind(weekRange[6], "a"),
    };

    const totalWindOfWeekB = {
      tWind1: totalwind(weekRange[0], "b"),
      tWind2: totalwind(weekRange[1], "b"),
      tWind3: totalwind(weekRange[2], "b"),
      tWind4: totalwind(weekRange[3], "b"),
      tWind5: totalwind(weekRange[4], "b"),
      tWind6: totalwind(weekRange[5], "b"),
      tWind7: totalwind(weekRange[6], "b"),
    };

    const totalWindOfWeekC = {
      tWind1: totalwind(weekRange[0], "c"),
      tWind2: totalwind(weekRange[1], "c"),
      tWind3: totalwind(weekRange[2], "c"),
      tWind4: totalwind(weekRange[3], "c"),
      tWind5: totalwind(weekRange[4], "c"),
      tWind6: totalwind(weekRange[5], "c"),
      tWind7: totalwind(weekRange[6], "c"),
    };

    console.log(totalWindOfWeekA);
    console.log(totalWindOfWeekB);
    console.log(totalWindOfWeekC);
    function findMax(obj) {
      var keys = Object.keys(obj);
      var max = keys[0];
      for (var i = 1, n = keys.length; i < n; ++i) {
        var k = keys[i];
        if (obj[k] > obj[max]) {
          max = k;
        }
      }

      return max;
    }

    const windyDay = {
      deviceA: weekRange[findMax(totalWindOfWeekA).slice(-1) - 1],
      deviceB: weekRange[findMax(totalWindOfWeekB).slice(-1) - 1],
      deviceC: weekRange[findMax(totalWindOfWeekC).slice(-1) - 1],
    };

    console.log(windyDay);

    dispatch({ type: GET_WINDY_DAY, payload: windyDay });
  };

  return (
    <DataContext.Provider
      value={{
        deviceAData: state.deviceAData,
        deviceBData: state.deviceBData,
        deviceBData: state.deviceBData,
        combinedData: state.combinedData,
        windyDay: state.windyDay,
        getAData,
        getCombinedData,
        getMostWindyDay,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
