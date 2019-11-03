import * as types from "../actions/actionTypes";
import initialState from "../state/initialState";
import { noError, createError } from "../state/errorState";

const userReducer = (state = initialState.user, action) => {
	switch (action.type) {
		case types.ADD_FRIEND_SUCCESS:
			return {
				...state,
				error: noError
			};
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
		case types.LOAD_MY_FRIENDS_SUCCESS:
			return {
				...state,
				myFriends: action.myFriends,
				error: noError
			};
		case types.LOAD_MY_HAB_DETAILS_SUCCESS:
			return {
				...state,
				myProfile: action.myProfile,
				error: noError
			};

		case types.REGISTERME_AS_HAB_SUCCESS:
			return {
				...state,
				id: action.id,
				error: noError
			};
		case types.REMOVE_FRIEND_SUCCESS:
			return {
				...state,
				error: noError
			};
		case types.SAVE_MY_HAB_DETAILS_SUCCESS:
			return {
				...state,
				myProfile: action.myProfile,
				error: noError
			};

		case types.UNREGISTERME_AS_HAB_SUCCESS:
			return initialState;
		case types.REGISTERME_AS_HAB_FAIL:
		case types.REGISTERME_AS_HAB_EXISTS_FAIL:
		case types.UNREGISTERME_AS_HAB_FAIL:
		case types.LOAD_MY_HAB_DETAILS_FAIL:
		case types.SAVE_MY_HAB_DETAILS_FAIL:
		case types.LOAD_MY_FRIENDS_FAIL:
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
