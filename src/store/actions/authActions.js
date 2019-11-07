import * as types from "./actionTypes";
import * as auth from "../../api/auth";
import { operationInProgress, operationDone } from "../actions/appActions";
import history from "../../shared/history";

const userLogin = (id, username, isGuest) => ({
	type: types.AUTH_LOGIN,
	id,
	username,
	isGuest
});

const userLogout = () => ({
	type: types.AUTH_LOGOUT
});

export const login = username => async dispatch => {
	try {
		dispatch(operationInProgress());

		const userResponse = await auth.login(username);
		dispatch(
			userLogin(userResponse.id, userResponse.username, userResponse.isGuest)
		);
		history.push("/dashboard");
	} catch (error) {
		alert(error);
	} finally {
		dispatch(operationDone());
	}
};

export const logout = () => dispatch => {
	dispatch(userLogout());
	history.push("/");
};
