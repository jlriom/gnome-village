import { combineReducers } from "redux";

import authReducer from "./authReducer";
import statsReducer from "./statsReducer";

const rootReducer = combineReducers({
	auth: authReducer,
	stats: statsReducer
});

export default rootReducer;
