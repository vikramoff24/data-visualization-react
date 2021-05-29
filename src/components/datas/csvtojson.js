//Code for Converting CSV File into JSON
import csv from "../../static/dataset/test_dataset_all.csv";
const CsvToJson = (csv) => {
  {
    var lines = csv.split("\n");
    var result = [];
    var headers = lines[0].split(",");

    for (var i = 1; i < lines.length; i++) {
      var obj = {};
      var currentline = lines[i].split(",");

      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);
    }

    console.log(result);

    return JSON.stringify(result);
  }
};

export const DeviceAData = [CsvToJson(csv)];
