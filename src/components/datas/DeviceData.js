import React from "react";
import DeviceAJSON from "../../static/dataset/DeviceA.json";
import DeviceBJSON from "../../static/dataset/DeviceB.json";
import DeviceCJSON from "../../static/dataset/DeviceC.json";
function formatDate(date) {
  const datestr = date;

  const updateddate = datestr.replace(/\//g, "-");
  const updatedtdate = updateddate.replace(/,/, "T");
  const exactDate = "20" + updatedtdate;
  return exactDate;
}
//returns array of object with new dateformat
function addDate(data) {
  return data.map((deviceData) => ({
    ...deviceData,
    date: formatDate(deviceData.t),
  }));
}

function combineDate(dataA, dataB, dataC) {
  return dataA.map((deviceData, index) => ({
    date: formatDate(deviceData.t),
    Aw: deviceData.w,
    Ah: deviceData.h,
    Ap1: deviceData.p1,
    Ap25: deviceData["p2.5"],
    Ap10: deviceData.p10,
    Bw: dataB[index].w,
    Bh: dataB[index].h,
    Bp1: dataB[index].p1,
    Bp25: dataB[index]["p2.5"],
    Bp10: dataB[index].p10,
    Cw: dataC[index].w,
    Ch: dataC[index].h,
    Cp1: dataC[index].p1,
    Cp25: dataC[index]["p2.5"],
    Cp10: dataC[index].p10,
  }));
}
export const DeviceAData = [addDate(DeviceAJSON)];
export const DeviceBData = [addDate(DeviceBJSON)];
export const DeviceCData = [addDate(DeviceCJSON)];

export const CombinedData = [
  combineDate(DeviceAJSON, DeviceBJSON, DeviceCJSON),
];
