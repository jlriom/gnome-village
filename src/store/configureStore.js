import { createStore, applyMiddleware, compose } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "./reducers";

const middlewares = [thunk, logger, reduxImmutableStateInvariant()];

export default function configureStore(initialState) {
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

	return createStore(
		rootReducer,
		initialState,
		composeEnhancers(applyMiddleware(...middlewares))
	);
}
