import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

// TODO
// eslint-disable-next-line no-unused-vars
const catchError = store => next => action => {
	try {
		next(action);
	} catch (error) {
		console.log("Error:", error, "Trace:", console.trace());
	}
};

const middlewares = [thunk, logger, catchError];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
