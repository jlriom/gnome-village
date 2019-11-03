import * as types from "../actions/actionTypes";
import initialState from "../state/initialState";
import { noError, createError } from "../state/errorState";

const userReducer = (state = initialState.user, action) => {
	switch (action.type) {
		case types.REGISTERME_AS_HAB_SUCCESS:
			return {
				...state,
				error: noError
			};
		case types.LOAD_HAB_PROFESSIONS_SUCCESS:
			return {
				...state,
				professions: action.professions
			};
		case types.LOAD_HAB_HAIR_COLORS_SUCCESS:
			return {
				...state,
				hairColors: action.hairColors
			};
		case types.REGISTERME_AS_HAB_FAIL:
		case types.REGISTERME_AS_HAB_EXISTS_FAIL:
			return {
				...state,
				error: createError(action.type, action.error)
			};
		default:
			return state;
	}
};

export default userReducer;
