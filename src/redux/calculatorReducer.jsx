import {
  CLICK_CLEAR,
  CLICK_DECIMAL,
  CLICK_EQUAL,
  CLICK_OPERANDS,
  CLICK_OPERATORS,
} from "./calculatorTypes";

const isOperator = (symbol) => {
  return /[-+/*]/.test(symbol);
};

const initialState = {
  answer: 0,
  expression: [],
  decimal: false,
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_OPERANDS:
      return {
        ...state,
        answer: null,
        expression: [...state.expression, action.payload],
      };
    case CLICK_CLEAR:
      return {
        answer: 0,
        expression: [],
        decimal: false,
      };
    case CLICK_DECIMAL:
      return {
        ...state,
        expression: [...state.expression, "."],
        decimal: true,
      };
    case CLICK_OPERATORS:
      const lastInput = state.expression[state.expression.length - 1]
      if (isOperator(lastInput) && lastInput !== "-" && action.payload !== "-") {
        return {
          ...state,
        }
      }
      if (lastInput === action.payload) {
        return {
          ...state,
        }
      }
      if (lastInput === "-" && (action.payload === "*" || action.payload === "/")) {
        return {
          ...state,
        }
      } else {
        return {
          ...state,
          answer: null,
          expression: [...state.expression, action.payload],
          decimal: false,
        };

      }
    case CLICK_EQUAL:
      if (state.expression.length === 0) return { ...state };
      return {
        answer: eval(state.expression.toString().replaceAll(",", "")).toFixed(
          2
        ),
        expression: [],
        decimal: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default calculatorReducer;
