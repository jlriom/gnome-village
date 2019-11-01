import * as types from "./actionTypes";
import history from "../../shared/history";

const userLogin = username => ({
	type: types.AUTH_LOGIN,
	username
});

const userLogout = () => ({
	type: types.AUTH_LOGOUT
});

const fakeLoginRequest = username =>
	new Promise((resolve, reject) =>
		setTimeout(() => {
			username === "foo" ? resolve(username) : reject("No such user");
		}, 1000)
	);

export const login = username => async dispatch => {
	try {
		const userResponse = await fakeLoginRequest(username);
		dispatch(userLogin(userResponse));
		history.push("/dashboard");
	} catch (error) {
		alert(error);
	} finally {
	}
};

export const logout = () => dispatch => {
	dispatch(userLogout());
	history.push("/");
};
