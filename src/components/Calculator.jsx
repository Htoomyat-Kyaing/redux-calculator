import { useDispatch, useSelector } from "react-redux";
import {
  clickClear,
  clickDecimal,
  clickEqual,
  clickOperands,
  clickOperators,
} from "../redux/calculatorActions";

const Calculator = () => {
  const { answer, expression, decimal } = useSelector((store) => store);
  const dispatch = useDispatch();
  const handleOperands = (value) => {
    dispatch(clickOperands(value));
  };
  const handleClear = () => {
    dispatch(clickClear());
  };
  const handleDecimal = () => {
    dispatch(clickDecimal());
  };
  const handleOperators = (value) => {
    dispatch(clickOperators(value));
  };
  const handleEqual = () => {
    dispatch(clickEqual());
  };

  return (
    <div className="grid grid-cols-4 gap-5 p-5 rounded-lg select-none min-w-fit min-h-fit bg-zinc-900">
      <button
        className="col-start-4 text-3xl bg-red-300 bg-opacity-50 rounded-full hover:bg-opacity-75 active:bg-opacity-100"
        onClick={() => handleClear()}
      >
        C
      </button>
      <div className="w-full max-w-sm col-span-4 p-5 text-3xl text-right rounded-lg min-h-10 bg-zinc-500">
        <div>{answer}</div>
        <div>{expression}</div>
      </div>
      <button
        className="w-20 h-20 text-3xl bg-opacity-50 rounded-full bg-zinc-300 hover:bg-opacity-75 active:bg-opacity-100"
        onClick={() => handleOperands("7")}
      >
        7
      </button>
      <button
        className="w-20 h-20 text-3xl bg-opacity-50 rounded-full bg-zinc-300 hover:bg-opacity-75 active:bg-opacity-100"
        onClick={() => handleOperands("8")}
      >
        8
      </button>
      <button
        className="w-20 h-20 text-3xl bg-opacity-50 rounded-full bg-zinc-300 hover:bg-opacity-75 active:bg-opacity-100"
        onClick={() => handleOperands("9")}
      >
        9
      </button>
      <button
        className="w-20 h-20 text-3xl bg-orange-300 bg-opacity-50 rounded-full hover:bg-opacity-75 active:bg-opacity-100"
        onClick={() => handleOperators("+")}
      >
        +
      </button>
      <button
        className="w-20 h-20 text-3xl bg-opacity-50 rounded-full bg-zinc-300 hover:bg-opacity-75 active:bg-opacity-100"
        onClick={() => handleOperands("4")}
      >
        4
      </button>
      <button
        className="w-20 h-20 text-3xl bg-opacity-50 rounded-full bg-zinc-300 hover:bg-opacity-75 active:bg-opacity-100"
        onClick={() => handleOperands("5")}
      >
        5
      </button>
      <button
        className="w-20 h-20 text-3xl bg-opacity-50 rounded-full bg-zinc-300 hover:bg-opacity-75 active:bg-opacity-100"
        onClick={() => handleOperands("6")}
      >
        6
      </button>
      <button
        className="w-20 h-20 text-3xl bg-orange-300 bg-opacity-50 rounded-full hover:bg-opacity-75 active:bg-opacity-100"
        onClick={() => handleOperators("-")}
      >
        -
      </button>
      <button
        className="w-20 h-20 text-3xl bg-opacity-50 rounded-full bg-zinc-300 hover:bg-opacity-75 active:bg-opacity-100"
        onClick={() => handleOperands("1")}
      >
        1
      </button>
      <button
        className="w-20 h-20 text-3xl bg-opacity-50 rounded-full bg-zinc-300 hover:bg-opacity-75 active:bg-opacity-100"
        onClick={() => handleOperands("2")}
      >
        2
      </button>
      <button
        className="w-20 h-20 text-3xl bg-opacity-50 rounded-full bg-zinc-300 hover:bg-opacity-75 active:bg-opacity-100"
        onClick={() => handleOperands("3")}
      >
        3
      </button>
      <button
        className="w-20 h-20 text-3xl bg-orange-300 bg-opacity-50 rounded-full hover:bg-opacity-75 active:bg-opacity-100"
        onClick={() => handleOperators("*")}
      >
        *
      </button>
      <button
        className="w-20 h-20 text-3xl bg-opacity-50 rounded-full bg-zinc-300 hover:bg-opacity-75 active:bg-opacity-100"
        onClick={() => handleEqual()}
      >
        =
      </button>
      <button
        className="w-20 h-20 text-3xl bg-opacity-50 rounded-full bg-zinc-300 hover:bg-opacity-75 active:bg-opacity-100"
        onClick={() => handleOperands("0")}
      >
        0
      </button>
      {decimal ? (
        <button
          disabled
          className="w-20 h-20 text-3xl bg-opacity-50 rounded-full bg-zinc-300 disabled:bg-opacity-25 hover:bg-opacity-75 active:bg-opacity-100"
          onClick={() => handleDecimal()}
        >
          .
        </button>
      ) : (
        <button
          className="w-20 h-20 text-3xl bg-opacity-50 rounded-full bg-zinc-300 hover:bg-opacity-75 active:bg-opacity-100"
          onClick={() => handleDecimal()}
        >
          .
        </button>
      )}
      <button
        className="w-20 h-20 text-3xl bg-orange-300 bg-opacity-50 rounded-full hover:bg-opacity-75 active:bg-opacity-100"
        onClick={() => handleOperators("/")}
      >
        /
      </button>
    </div>
  );
};

export default Calculator;
