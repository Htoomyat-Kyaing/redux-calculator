import {
  CLICK_OPERANDS,
  CLICK_OPERATORS,
  CLICK_CLEAR,
  CLICK_DECIMAL,
  CLICK_EQUAL,
} from "./calculatorTypes";

export const clickOperands = (value) => {
  return {
    type: CLICK_OPERANDS,
    payload: value,
    info: `A ${value} has been clicked`,
  };
};

export const clickClear = () => {
  return {
    type: CLICK_CLEAR,
    info: "Clear button has been clicked",
  };
};

export const clickDecimal = () => {
  return {
    type: CLICK_DECIMAL,
    info: "A decimal has been clicked",
  };
};

export const clickOperators = (value) => {
  return {
    type: CLICK_OPERATORS,
    payload: value,
    info: `A ${value} has been clicked`,
  };
};

export const clickEqual = () => {
  return {
    type: CLICK_EQUAL,
    info: `An equal has been clicked`,
  };
};
