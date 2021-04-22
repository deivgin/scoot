import { WHEELS, MATERIAL, SPEED, CONTROLS } from "./product.types";

export const changeWheels = () => {
  return {
    type: WHEELS,
  };
};

export const changeMaterial = () => {
  return {
    type: MATERIAL,
  };
};

export const changeSpeed = () => {
  return {
    type: SPEED,
  };
};

export const changecontrols = () => {
  return {
    type: CONTROLS,
  };
};
