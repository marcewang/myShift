import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import shiftBrowser from './shiftBrowser';
import todos from "./todos";

export default combineReducers({ shiftBrowser });
