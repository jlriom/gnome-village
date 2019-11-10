import * as types from "../actions/actionTypes";
import initialState from "../state/initialState";
import { noError, createError } from "../state/errorState";

const userReducer = (action, state = initialState.user) => {
	switch (action.type) {
		case types.LOAD_HAB_HAIR_COLORS_SUCCESS:
			return {
				...state,
				hairColors: action.hairColors,
				error: noError
			};
		case types.LOAD_HAB_PROFESSIONS_SUCCESS:
			return {
				...state,
				professions: action.professions,
				error: noError
			};
		case types.LOAD_FRIENDS_SUCCESS:
			return {
				...state,
				friends: action.friends,
				error: noError
			};
		case types.LOAD_HAB_DETAILS_SUCCESS:
			return {
				...state,
				profile: action.profile,
				error: noError
			};

		case types.REGISTERME_AS_HAB_SUCCESS:
			return {
				...state,
				id: action.id,
				profile: initialState.defaultProfile,
				error: noError
			};
		case types.SAVE_HAB_DETAILS_SUCCESS:
			return {
				...state,
				profile: state.profile,
				error: noError
			};

		case types.UNREGISTERME_AS_HAB_SUCCESS:
			return {
				...state,
				profile: initialState.defaultProfile,
				error: noError
			};
		case types.ADD_FRIEND_SUCCESS:
		case types.REMOVE_FRIEND_SUCCESS:
			return {
				...state,
				error: noError
			};
		case types.REGISTERME_AS_HAB_FAIL:
		case types.REGISTERME_AS_HAB_EXISTS_FAIL:
		case types.UNREGISTERME_AS_HAB_FAIL:
		case types.LOAD_HAB_DETAILS_FAIL:
		case types.SAVE_HAB_DETAILS_FAIL:
		case types.LOAD_FRIENDS_FAIL:
		case types.ADD_FRIEND_FAIL:
		case types.REMOVE_FRIEND_FAIL:
			return {
				...state,
				error: createError(action.type, action.error)
			};
		default:
			return state;
	}
};

export default userReducer;
