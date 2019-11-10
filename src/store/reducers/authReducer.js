import * as types from "../actions/actionTypes";
import initialState from "../state/initialState";

const authReducer = (action, state = initialState.auth) => {
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
