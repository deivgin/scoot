import { WHEELS, MATERIAL, SPEED, CONTROLS } from "./product.types";

const changeWheels = (option) => {
  return {
    type: WHEELS,
    payload: option,
  };
};

const changeMaterial = (option) => {
  return {
    type: MATERIAL,
    payload: option,
  };
};

const changeSpeed = (option) => {
  return {
    type: SPEED,
    payload: option,
  };
};

const changeControls = (option) => {
  return {
    type: CONTROLS,
    payload: option,
  };
};

export { changeWheels, changeMaterial, changeSpeed, changeControls };
