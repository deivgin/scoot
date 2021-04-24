import { TOTAL, CHANGE_VALUE } from "./product.types";

const changeValue = (part, option) => {
  return {
    type: CHANGE_VALUE,
    option,
    part,
  };
};

const calcTotal = (total) => {
  return {
    type: TOTAL,
  };
};

export { calcTotal, changeValue };
