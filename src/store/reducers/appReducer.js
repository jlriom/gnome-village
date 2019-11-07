import * as types from "../actions/actionTypes";
import initialState from "../state/initialState";

const appReducer = (state = initialState.app, action) => {
	let numOperationsInProgress;

	switch (action.type) {
		case types.APP_OPERATION_IN_PROGRESS:
			numOperationsInProgress = state.numOperationsInProgress + 1;
			return {
				...state,
				numOperationsInProgress: numOperationsInProgress,
				loading: true
			};
		case types.APP_OPERATION_DONE:
			numOperationsInProgress = state.numOperationsInProgress - 1;
			return {
				...state,
				numOperationsInProgress:
					numOperationsInProgress < 0 ? 0 : numOperationsInProgress,
				loading: numOperationsInProgress !== 0
			};
		case types.APP_SHOW_MESSAGE:
		case types.APP_SHOW_ERROR:
			return {
				...state,
				message: action.message
			};
		default:
			return state;
	}
};

export default appReducer;
