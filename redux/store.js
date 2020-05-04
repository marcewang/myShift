import { createStore } from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

// middleware goes inside the composeWithDevTools function as a parameter
export default createStore(rootReducer, composeWithDevTools());
