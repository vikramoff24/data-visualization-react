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
  GET_COMBINED_DATA,
} from "../types";
import dataReducer from "./dataReducer";

const DataState = (props) => {
  const intialState = {
    deviceAData: null,
    deviceBData: null,
    deviceCData: null,
    combinedData: null,
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

    dispatch({ type: GET_COMBINED_DATA, payload: combined });
  };

  return (
    <DataContext.Provider
      value={{
        deviceAData: state.deviceAData,
        deviceBData: state.deviceBData,
        deviceBData: state.deviceBData,
        combinedData: state.combinedData,
        getAData,
        getCombinedData,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
