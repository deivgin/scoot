import { CHANGE_VALUE, TOTAL } from "./product.types";

const changeValue = (value) => ({
  type: CHANGE_VALUE,
  payload: value,
});

const calcTotal = () => ({
  type: TOTAL,
});

export { changeValue, calcTotal };
