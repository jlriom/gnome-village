import { combineReducers } from "redux";

import appReducer from "./appReducer";
import authReducer from "./authReducer";
import statsReducer from "./statsReducer";
import searchReducer from "./searchReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
	app: appReducer,
	auth: authReducer,
	stats: statsReducer,
	search: searchReducer,
	user: userReducer
});

export default rootReducer;
