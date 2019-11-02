import { combineReducers } from "redux";

import authReducer from "./authReducer";
import statsReducer from "./statsReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
	auth: authReducer,
	stats: statsReducer,
	search: searchReducer
});

export default rootReducer;
