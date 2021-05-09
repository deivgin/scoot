import { GET_DATA, SET_TAB } from "./tabs.types";

const getProductData = (data) => ({
  type: GET_DATA,
  payload: data,
});

const setCurrTab = (currTab) => ({
  type: SET_TAB,
  payload: currTab,
});

export { getProductData, setCurrTab };
