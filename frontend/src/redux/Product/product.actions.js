import { CHANGE_VALUE, TOTAL, UPDATE_VALUE } from "./product.types";

const changeValue = (value) => ({
  type: CHANGE_VALUE,
  payload: value,
});

const calcTotal = () => ({
  type: TOTAL,
});

const updateValue = (value) => ({
  type: UPDATE_VALUE,
  payload: value,
});

export { changeValue, calcTotal, updateValue };
