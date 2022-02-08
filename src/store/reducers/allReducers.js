import { combineReducers } from "redux";
import { examplesReducer } from "./examplesReducer";

export const allReducers = combineReducers({
    exampleReducer: examplesReducer
});