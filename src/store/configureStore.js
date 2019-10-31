import { createStore, applyMiddleware, compose } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "./reducers";

// TODO
// eslint-disable-next-line no-unused-vars
const catchError = store => next => action => {
	try {
		next(action);
	} catch (error) {
		console.log("Error:", error, "Trace:", console.trace());
	}
};

const middlewares = [thunk, logger, catchError, reduxImmutableStateInvariant()];

export default function configureStore(initialState) {
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

	return createStore(
		rootReducer,
		initialState,
		composeEnhancers(applyMiddleware(...middlewares))
	);
}
