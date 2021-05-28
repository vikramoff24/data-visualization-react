import {
  GET_DEVICE_B_DATA,
  GET_DEVICE_A_DATA,
  GET_DEVICE_C_DATA,
  GET_COMBINED_DATA,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_DEVICE_A_DATA: {
      return { ...state, deviceAData: action.payload };
    }
    case GET_DEVICE_B_DATA: {
      return { ...state, deviceBData: action.payload };
    }
    case GET_DEVICE_C_DATA: {
      return { ...state, deviceCData: action.payload };
    }

    case GET_COMBINED_DATA: {
      return {
        ...state,
        combinedData: action.payload,
      };
    }
    default:
      return state;
  }
};
