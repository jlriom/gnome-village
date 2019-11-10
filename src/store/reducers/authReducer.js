import * as types from "../actions/actionTypes";
import initialState from "../state/initialState";
import noop from "./noop";

const authReducer = (state = initialState.auth, action = noop) => {
	switch (action.type) {
		case types.AUTH_LOGIN:
			return {
				...state,
				id: action.id,
				username: action.username,
				isLoggedIn: true,
				isGuest: action.isGuest
			};
		case types.AUTH_LOGOUT:
			return initialState;
		default:
			return state;
	}
};

export default authReducer;
