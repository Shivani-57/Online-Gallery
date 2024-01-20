// reducers/index.js
import changeCount from "./increment";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeCount
});

export default rootReducer;
