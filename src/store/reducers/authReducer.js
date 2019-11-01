import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const authReducer = (state = initialState.auth, action) => {
	switch (action.type) {
		case types.AUTH_LOGIN:
			return {
				...state,
				username: action.username,
				isLoggedIn: true
			};
		case types.AUTH_LOGOUT:
			return initialState;
		default:
			return state;
	}
};

export default authReducer;
