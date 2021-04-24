import { TOTAL, CHANGE_VALUE } from "./product.types";

const changeValue = (option) => {
  return {
    type: CHANGE_VALUE,
    payload: option,
  };
};

const calcTotal = (total) => {
  return {
    type: TOTAL,
  };
};

export { calcTotal, changeValue };
