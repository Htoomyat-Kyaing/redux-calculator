import { legacy_createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import calculatorReducer from "./calculatorReducer";

const store = legacy_createStore(calculatorReducer, devToolsEnhancer());

export default store;
