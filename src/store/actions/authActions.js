import * as types from "./actionTypes";
import PropTypes from "prop-types";
import {
	operationInProgress,
	operationDone,
	showError
} from "../actions/appActions";

import * as auth from "../../api/auth";
import history from "../../shared/history";

const userLogin = (id, username, isGuest) => ({
	type: types.AUTH_LOGIN,
	id,
	username,
	isGuest
});

userLogin.propTypes = {
	id: PropTypes.number,
	username: PropTypes.string.isRequired,
	isGuest: PropTypes.bool.isRequired
};

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
		dispatch(showError("Login", error));
	} finally {
		dispatch(operationDone());
	}
};

login.propTypes = {
	username: PropTypes.string.isRequired
};

export const logout = () => dispatch => {
	dispatch(userLogout());
	history.push("/");
};
