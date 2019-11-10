import * as types from "../actions/actionTypes";
import initialState from "../state/initialState";
import { noError, createError } from "../state/errorState";
import noop from "./noop";

const searchReducer = (state = initialState.habitants, action = noop) => {
	switch (action.type) {
		case types.SEARCH_HABITANTS_SUCCESS:
			return {
				...state,
				list: action.list,
				total: action.total,
				searchCriteria: action.searchCriteria,
				error: noError
			};
		case types.SEARCH_HABITANTS_FAIL:
			return {
				...state,
				error: createError(action.type, action.error)
			};
		default:
			return state;
	}
};

export default searchReducer;
