import { combineReducers } from "redux";
import gnomesReducer from "./gnomes";

const rootReducer = combineReducers({
	gnomes: gnomesReducer
});

export default rootReducer;
